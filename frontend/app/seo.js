// Central SEO configuration: site address, page metadata helper and structured data (schema.org).
// Set NEXT_PUBLIC_SITE_URL to the live domain before building for production.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://construct.ae').replace(/\/$/, '');
export const SITE_NAME = 'KEA Building Contracting';
const ORG_ID = `${SITE_URL}/#organization`;

export const abs = (path = '/') => `${SITE_URL}${path}`;

/* Page metadata with canonical URL, Open Graph and Twitter card */
export function pageMeta({ title, description, path = '/', image = 'dubai-skyline-reflection-hd', absoluteTitle = false, type = 'website' }) {
  const img = abs(`/images/${image}.jpg`);
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type, url: path, siteName: SITE_NAME, locale: 'en_AE', title: ogTitle, description, images: [{ url: img, alt: title }] },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: [img] },
  };
}

/* Site-wide entity: the company, its website and its office (used on every page) */
export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['GeneralContractor', 'Organization'],
      '@id': ORG_ID,
      name: SITE_NAME,
      alternateName: 'KEA',
      url: abs('/'),
      logo: abs('/icon.svg'),
      image: abs('/images/dubai-skyline-reflection-hd.jpg'),
      description: 'KEA Building Contracting is a construction company in Dubai, UAE, building luxury villas, private mansions, waterfront residences, residential buildings and commercial buildings, with in-house engineering, project management, planning, QA/QC and HSE.',
      telephone: '+971 4 326 1339',
      email: 'info@construct.ae',
      address: { '@type': 'PostalAddress', streetAddress: 'Office 802, Iris Bay Tower', addressLocality: 'Business Bay, Dubai', addressRegion: 'Dubai', addressCountry: 'AE' },
      hasMap: 'https://www.google.com/maps/search/?api=1&query=Iris+Bay+Tower+Business+Bay+Dubai',
      areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'Country', name: 'United Arab Emirates' }],
      knowsAbout: ['Villa construction', 'Luxury mansion construction', 'Waterfront home construction', 'Residential building construction', 'Commercial building construction', 'Construction project management', 'Construction engineering', 'Construction planning', 'QA/QC', 'Health, safety and environment (HSE)'],
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+971 4 326 1339', email: 'info@construct.ae', areaServed: 'AE', availableLanguage: 'English' },
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: abs('/'), name: SITE_NAME, publisher: { '@id': ORG_ID }, inLanguage: 'en' },
  ],
};

export const orgRef = { '@id': ORG_ID };

export function breadcrumb(items) {
  return { '@type': 'BreadcrumbList', itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })) };
}

export function faqSchema(faqs) {
  return { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

export function JsonLd({ data }) {
  const json = Array.isArray(data) ? { '@context': 'https://schema.org', '@graph': data } : { '@context': 'https://schema.org', ...data };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, '\\u003c') }} />;
}
