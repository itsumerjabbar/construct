import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FORMS = {
  project: {
    to: () => 'info@construct.ae',
    subject: d => `New project inquiry — ${d.name}${d.type ? ` (${d.type})` : ''}`,
    title: 'New project inquiry',
    fields: [['name', 'Full name'], ['email', 'Email'], ['phone', 'Phone'], ['type', 'Project type'], ['location', 'Project location'], ['details', 'Project details'], ['page', 'Sent from']],
  },
  career: {
    to: () => 'hr@construct.ae',
    subject: d => `New career application — ${d.name}${d.type ? ` (${d.type})` : ''}`,
    title: 'New career application',
    fields: [['name', 'Full name'], ['email', 'Email'], ['phone', 'Phone'], ['type', 'Area of expertise'], ['profile', 'Profile URL'], ['details', 'Experience'], ['page', 'Sent from']],
  },
};

const LIMITS = { name: 100, email: 200, phone: 40, type: 120, location: 500, profile: 500, details: 5000, page: 300 };
const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
const oneLine = v => v.replace(/[\r\n]+/g, ' ');
const esc = v => v.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Simple per-IP rate limit (per server instance): 5 submissions / 10 minutes.
const hits = new Map();
function limited(ip) {
  const now = Date.now(), win = 10 * 60 * 1000;
  for (const [key, entries] of hits) if (entries.every(t => now - t >= win)) hits.delete(key);
  const list = (hits.get(ip) || []).filter(t => now - t < win);
  list.push(now); hits.set(ip, list);
  return list.length > 5;
}

let transporter;
function getTransport() {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || /your-smtp-password|replace-me|password-or-app-password/i.test(SMTP_PASS)) return null;
  const port = Number(SMTP_PORT || 587);
  if (!Number.isInteger(port) || port < 1 || port > 65535) return null;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === 'true' : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    requireTLS: port !== 465,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
  });
  return transporter;
}

const json = (body, status = 200) => Response.json(body, { status });

export async function POST(req) {
  let body;
  // Bound the body before parsing, including requests without Content-Length.
  if (Number(req.headers.get('content-length')) > 32768) return json({ ok: false, error: 'Your submission is too large.' }, 413);
  try {
    const reader = req.body?.getReader();
    if (!reader) return json({ ok: false, error: 'Invalid request.' }, 400);
    const chunks=[]; let size=0;
    while (true) {
      const {done,value}=await reader.read(); if(done) break;
      size+=value.byteLength;
      if(size>32768){await reader.cancel();return json({ok:false,error:'Your submission is too large.'},413)}
      chunks.push(value);
    }
    body=JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ ok: false, error: 'Invalid request.' }, 400);
  if (!Object.hasOwn(FORMS, body.form)) return json({ ok: false, error: 'Invalid form type.' }, 400);

  // Honeypot: real visitors never fill this hidden field.
  if (body.website) return json({ ok: true });

  const form = body.form;
  const cfg = FORMS[form];
  const fallback = `Please email ${cfg.to()} or call 04 326 1339.`;
  if (Object.keys(LIMITS).some(k => body[k] != null && typeof body[k] !== 'string')) return json({ ok: false, error: 'Invalid field value.' }, 400);
  const d = Object.fromEntries(Object.entries(LIMITS).map(([k, max]) => [k, clean(body[k], max)]));
  for (const k of ['name', 'email', 'phone', 'type', 'location', 'profile', 'page']) d[k] = oneLine(d[k]);

  if (!d.name || !d.email || !d.details || !d.type) return json({ ok: false, error: 'Please complete all required fields.' }, 400);
  if (!EMAIL.test(d.email)) return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  if (body.consent !== true) return json({ ok: false, error: 'Please accept the privacy policy.' }, 400);
  if (d.profile) {
    try { if (!['https:', 'http:'].includes(new URL(d.profile).protocol)) throw new Error(); }
    catch { return json({ ok: false, error: 'Please enter a valid http or https profile URL.' }, 400); }
  }

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return json({ ok: false, error: 'Too many submissions. Please try again later or call 04 326 1339.' }, 429);

  const transport = getTransport();
  if (!transport) {
    console.error('[inquiry] SMTP is not configured — set SMTP_HOST, SMTP_USER and SMTP_PASS.');
    return json({ ok: false, error: `Online submission is temporarily unavailable. ${fallback}` }, 503);
  }

  const rows = cfg.fields.filter(([k]) => d[k]);
  const text = `${cfg.title}\n\n` + rows.map(([k, label]) => `${label}: ${d[k]}`).join('\n');
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#0b1a1f">
    <h2 style="font-family:Georgia,serif;font-weight:400;margin:0 0 16px">${cfg.title}</h2>
    <table cellpadding="8" style="border-collapse:collapse;max-width:640px">${rows.map(([k, label]) => `<tr><td style="color:#a8864a;font-size:12px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;white-space:nowrap">${label}</td><td style="border-bottom:1px solid #e5e0d6">${esc(d[k]).replace(/\n/g, '<br>')}</td></tr>`).join('')}</table>
    <p style="color:#5c6a6c;font-size:12px;margin-top:20px">Sent from the construct.ae website. Reply to this email to answer ${esc(d.name)} directly.</p></div>`;

  try {
    const result = await transport.sendMail({
      from: process.env.MAIL_FROM || `"KEA Website" <${process.env.SMTP_USER}>`,
      to: cfg.to(),
      replyTo: { name: d.name, address: d.email },
      subject: oneLine(cfg.subject(d)),
      text,
      html,
    });
    if (!result.accepted?.some(address => String(address).toLowerCase() === cfg.to().toLowerCase())) {
      throw new Error('SMTP did not accept the destination address.');
    }
    return json({ ok: true });
  } catch (err) {
    console.error('[inquiry] send failed:', err?.code || 'SMTP_DELIVERY_FAILED');
    return json({ ok: false, error: `We could not send your message. ${fallback}` }, 502);
  }
}
