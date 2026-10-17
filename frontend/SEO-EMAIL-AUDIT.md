# SEO and email audit — 17 October 2026

## Verified locally

- All 37 sitemap pages return HTTP 200 with unique titles and descriptions, matching canonical URLs, one H1, social metadata, and parseable JSON-LD.
- Checked 49 image paths and 37 internal link targets; no broken resources found. Image alt attributes are present.
- Sitemap and robots.txt respond successfully; an unknown page returns HTTP 404.
- Removed artificial sitemap modification dates and incorrect fixed social-image dimensions. API routes are excluded in robots.txt.
- Production Next.js build passes.
- Nodemailer 10.0.12 is installed. Project submissions are addressed to info@construct.ae; career submissions to hr@construct.ae. Reply-To uses the visitor's email.
- Mock API tests pass for both recipients, message details, validation, HTML escaping, size limits, honeypot, rate limiting, and delivery failures.
- Browser tests pass for contact and career forms: request payload, failure messages, retained input on failure, success message and reset. Delivery was mocked; no test messages were sent.

## SMTP verification

The latest updated local SMTP settings passed connection, TLS and authentication verification on 17 October 2026. This resolves the earlier EAUTH / SMTP 535 login failure. No email was sent during verification; actual delivery to the two destination inboxes remains untested.

The website must run on Node.js with these environment variables configured on its actual host. The older static out/ deployment and .openai/hosting.json cannot run the email API. Restart the application after changing deployment environment variables.

SMTP authentication and message acceptance do not guarantee inbox placement. SPF, DKIM, DMARC, sender permissions and actual receipt remain to be checked with the mail provider.

## Scope

This is a local technical audit, not a guarantee of indexing or ranking. Public production deployment, Google Search Console, Core Web Vitals, rich-result eligibility, and real inbox delivery were not verified. Structured data was checked for JSON validity, not full Google eligibility. Content and image ownership/factual accuracy still require business review.
