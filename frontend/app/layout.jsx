import './globals.css';
import './editorial.css';
import './kx.css';
import { Header, Footer } from './ui';
import { display, sans, mark } from './fonts';

export const metadata = {
  metadataBase: new URL('https://kea-building-contracting.opalpike6.chatgpt.site'),
  title: { default: 'KEA Building Contracting | Built with purpose. Made to endure.', template: '%s | KEA Building Contracting' },
  description: 'Luxury mansions, signature villas, residential buildings and commercial construction in Dubai. Discover KEA Building Contracting.',
};
export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable} ${mark.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
