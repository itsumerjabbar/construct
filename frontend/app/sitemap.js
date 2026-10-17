import { projects, articles } from './data';
import { abs } from './seo';

export const dynamic = 'force-static';

export default function sitemap() {
  const pages = [['/', 1, 'weekly'], ['/expertise/', .9, 'monthly'], ['/projects/', .9, 'weekly'], ['/about/', .8, 'monthly'], ['/contact/', .8, 'yearly'], ['/insights/', .7, 'weekly'], ['/careers/', .6, 'monthly'], ['/privacy/', .2, 'yearly'], ['/terms/', .2, 'yearly']];
  return [
    ...pages.map(([p, priority, changeFrequency]) => ({ url: abs(p), changeFrequency, priority })),
    ...projects.map(p => ({ url: abs(`/projects/${p.slug}/`), changeFrequency: 'monthly', priority: .7 })),
    ...articles.map(a => ({ url: abs(`/insights/${a.slug}/`), changeFrequency: 'yearly', priority: .5 })),
  ];
}
