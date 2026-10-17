import { abs, SITE_URL } from './seo';

export const dynamic = 'force-static';

export default function robots() {
  return { rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }], sitemap: abs('/sitemap.xml'), host: SITE_URL };
}
