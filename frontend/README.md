# KEA Building Contracting

A responsive, multi-page Next.js App Router website with a Node.js email endpoint.

## Local development

```sh
npm install
npm run dev
```

Visit http://localhost:3000. Build with `npm run build`, then run `npm start`. Production requires a Node.js Next.js host with SMTP access. Static hosting of `out/` cannot run the email forms. The existing `.openai/hosting.json` describes the older static Sites deployment, not the current Node.js application; do not deploy an old `out/` directory as this version.

Development uses `.next-dev/`; production builds use `.next/`. These directories must remain separate so a build cannot overwrite a running development server's bundles.

## Email delivery

Nodemailer is installed. All project inquiry forms POST to `/api/inquiry/` and send to **info@construct.ae**. Career profiles use the same endpoint and send to **hr@construct.ae**. These recipients are fixed server-side; visitors cannot choose another recipient. The visitor's address is used as Reply-To, not as the sender.

Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` and an authorised `MAIL_FROM` in `.env.local` or the production host's environment. Never commit credentials. Port 465 normally uses `SMTP_SECURE=true`; port 587 normally uses STARTTLS with `SMTP_SECURE=false`. Restart the server after changing credentials.

Placeholder passwords are rejected. Success is shown only after the SMTP server accepts the destination; acceptance does not guarantee inbox placement. The configured mail domain needs appropriate SPF/DKIM/DMARC settings and provider permissions. Server-side validation, a honeypot and a per-instance IP throttle are included; production infrastructure must overwrite forwarding headers, and multi-instance deployments should use a shared rate limiter.

## Content and components

- `app/data.js`: project descriptions, associated companies, capabilities and articles.
- `app/ui.jsx`: shared navigation, footer, project filters, accordion and forms.
- `app/globals.css`: base responsive styles (still used by Careers, Insights and legal pages).
- `app/kx.css`, `app/kx-ui.jsx`, `app/kx-client.jsx`: the "Coastal Dubai" design system used by Home, About, Expertise, Projects and Contact — page hero with animated waves, water light/ripple effects, hover lists, project gallery, scroll reveals and cursor.
- `app/home.css`: home-page-only sections (destination hero, sea-view arch, stacking residences, lagoon).
- `app/editorial.jsx` and `app/editorial.css`: sector stories, delivery journey, company principles, location guide, project questions and tailored project narratives.
- Separate About, Expertise, Projects, Careers, Contact, Insights, Privacy and Terms routes, plus individual project and insight routes.

## SEO

- `app/seo.js`: site address, page metadata helper (title, description, canonical, Open Graph, Twitter) and schema.org structured data (GeneralContractor, WebSite, breadcrumbs, FAQ, services, projects, articles).
- `app/faqs.js`: FAQ content shown on Home and Expertise and published as FAQPage schema. Keep answers factual.
- `app/sitemap.js` and `app/robots.js` generate `sitemap.xml` and `robots.txt`; `public/llms.txt` summarises the company for AI assistants.
- **Set the live domain before deploying:** build with `NEXT_PUBLIC_SITE_URL=https://your-domain npm run build`. Canonical URLs, the sitemap and schema all use it.

## Before public launch

- Replace illustrative photography with approved KEA project assets. Current images are from Unsplash, downloaded locally. Original photo IDs: `1613977257363-707ba9348227`, `1600210492486-724fe5c67fb0`, `1486406146926-c627a92ad1ab`, `1600607687939-ce8a6c25118c`, plus home page imagery `1580587771525-78b9dba3b914`, `1600607687644-c7171b42498f`, Dubai `1512453979798-5ea266f8880c`, `1580674684081-7617fbf3d745`, `1528702748617-c64d49f918af`, `1526495124232-a04e1849168c`, `1518684079-3c830dcef090`, sea view `1540541338287-41700207dee6`, `1584132967334-10e028bd69f7`, `1615571022219-eb45cf7faa9d`, `1544984243-ec57ea16fe25` and lagoon `1514282401047-d79a71a590e8`, `1590523277543-a94d2e4eb00b`, `1602002418082-a4443e081dd1`.
- Dubai, Palm Jumeirah and UAE photographs come from Wikimedia Commons under CC0, CC BY and CC BY-SA licences. CC BY and CC BY-SA photos require visible credit to the photographer; the credits page was removed, so add attribution elsewhere or replace these photos before launch.
- Approve the proposed CEO message, vision and mission; add the CEO's confirmed name and portrait if desired.
- Confirm legal entity, official contact information, developer relationships and company descriptions.
- Approve legal copy for the final operating website.
- Configure and verify production SMTP credentials before accepting form submissions. Career profiles contain the form fields and a profile URL; CV file attachments are not currently included.
- Add actual vacancies and dated company news as available. Current insights are editorial perspectives, not invented news announcements.

No analytics, tracking scripts or client-side data persistence are included.
