# KEA Building Contracting

A responsive, multi-page Next.js App Router website with static export.

## Local development

```sh
npm install
npm run dev
```

Visit http://localhost:3000. Build with `npm run build`; deploy the generated `out/` directory to a static host. Use `npm start` to preview the production export locally. Run `npm run check` for browser checks (requires Chrome).

Development uses `.next-dev/`; production builds use `.next/` and export to `out/`. These directories must remain separate so a build cannot overwrite a running development server's bundles. With the dev server active, run `node scripts/check-dev.mjs` after a production build to verify this regression.

## Content and components

- `app/data.js`: project descriptions, associated companies, capabilities and articles.
- `app/ui.jsx`: shared navigation, footer, project filters, accordion and forms.
- `app/globals.css`: base responsive styles (still used by Careers, Insights and legal pages).
- `app/kx.css`, `app/kx-ui.jsx`, `app/kx-client.jsx`: the "Coastal Dubai" design system used by Home, About, Expertise, Projects and Contact — page hero with animated waves, water light/ripple effects, hover lists, project gallery, scroll reveals and cursor.
- `app/home.css`: home-page-only sections (destination hero, sea-view arch, stacking residences, lagoon).
- `app/editorial.jsx` and `app/editorial.css`: sector stories, delivery journey, company principles, location guide, project questions and tailored project narratives.
- Separate About, Expertise, Projects, Careers, Contact, Insights, Privacy and Terms routes, plus individual project and insight routes.

## Before public launch

- Replace illustrative photography with approved KEA project assets. Current images are from Unsplash, downloaded locally. Original photo IDs: `1613977257363-707ba9348227`, `1600210492486-724fe5c67fb0`, `1486406146926-c627a92ad1ab`, `1600607687939-ce8a6c25118c`, plus home page imagery `1580587771525-78b9dba3b914`, `1600607687644-c7171b42498f`, Dubai `1512453979798-5ea266f8880c`, `1580674684081-7617fbf3d745`, `1528702748617-c64d49f918af`, `1526495124232-a04e1849168c`, `1518684079-3c830dcef090`, sea view `1540541338287-41700207dee6`, `1584132967334-10e028bd69f7`, `1615571022219-eb45cf7faa9d`, `1544984243-ec57ea16fe25` and lagoon `1514282401047-d79a71a590e8`, `1590523277543-a94d2e4eb00b`, `1602002418082-a4443e081dd1`.
- Dubai, Palm Jumeirah and UAE photographs come from Wikimedia Commons under CC0, CC BY and CC BY-SA licences. Their attribution is listed on the /credits/ page (data in `app/credits-data.js`); keep that page linked while these photos are used.
- Approve the proposed CEO message, vision and mission; add the CEO's confirmed name and portrait if desired.
- Confirm legal entity, official contact information, developer relationships and company descriptions.
- Approve legal copy for the final operating website.
- Connect forms to an approved delivery endpoint. Current forms validate input and download a local text file; they do not send data or imply successful submission.
- Add actual vacancies and dated company news as available. Current insights are editorial perspectives, not invented news announcements.

No analytics, tracking scripts or client-side data persistence are included.
