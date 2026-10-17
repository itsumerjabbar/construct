import './globals.css';
import './editorial.css';
import './kx.css';
import { Header, Footer } from './ui';
import { display, sans, mark } from './fonts';
import { SITE_URL, SITE_NAME, siteSchema, JsonLd } from './seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Construction Company in Dubai`, template: `%s | ${SITE_NAME}` },
  description: 'KEA Building Contracting is a construction company in Dubai building luxury villas, mansions, residential buildings and commercial projects.',
  applicationName: SITE_NAME,
  keywords: ['construction company Dubai', 'building contracting company Dubai', 'villa construction Dubai', 'luxury villa contractor Dubai', 'mansion construction Dubai', 'residential building contractor Dubai', 'commercial construction company Dubai', 'building contractors UAE'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Construction',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_AE' },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({ children }) {
  return <html lang="en-AE"><body className={`${display.variable} ${sans.variable} ${mark.variable}`}><JsonLd data={siteSchema['@graph']}/><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
