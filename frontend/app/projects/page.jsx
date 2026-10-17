import Link from 'next/link';
import { KxClosing } from '../kx-ui';
import { Motion } from '../kx-client';
import { projects } from '../data';
import Collection from './collection';
export const metadata={title:'Our projects'};

export default function Projects(){const featured=projects.find(p=>p.slug==='private-mansion');return <Motion className="pr-page">
  <section className="pr-intro">
    <div className="pr-intro-top"><p className="kx-tag"><i/>The KEA portfolio</p><span className="pr-label">Dubai, United Arab Emirates</span></div>
    <div className="pr-title-row"><h1>Places of purpose.<br/><em>Details of distinction.</em></h1><div><p>Private sanctuaries. Contemporary communities. Spaces that bring people together.</p><a href="#portfolio" className="pr-text-link">Discover the collection <span>↓</span></a></div></div>
    <Link href={`/projects/${featured.slug}/`} className="pr-cover" data-cursor="view"><img src={`/images/${featured.image}.jpg`} alt={featured.name} fetchPriority="high"/><span className="pr-cover-top">IN FOCUS <i/> {featured.category}</span><div className="pr-cover-bottom"><div><span className="pr-label">{featured.location}</span><h2>{featured.name}</h2></div><span className="pr-cover-action">Explore project <b>↗</b></span></div></Link>
    <div className="pr-intro-foot"><span>A considered approach. A distinctive result.</span><a href="#portfolio">THE COLLECTION <span>↓</span></a></div>
  </section>
  <section className="pr-section pr-portfolio" id="portfolio">
    <div className="pr-section-heading" data-reveal><div><p className="kx-tag"><i/>Selected work</p><h2>Every project,<br/><em>its own character.</em></h2></div><p>Explore our collection of mansions, villas, residential buildings and spaces for business and community. Each reflects a different brief, setting and architectural ambition.</p></div>
    <Collection/>
  </section>
  <section className="pr-perspective"><div className="pr-perspective-photo" data-reveal="clip"><img src="/images/project-beachfront-villa.jpg" alt="Beachfront Villa" loading="lazy"/><span>PRIVATE LIVING · DUBAI</span></div><div className="pr-perspective-copy" data-reveal><p className="kx-tag light"><i/>Beyond the photograph</p><h2>A vision made tangible.<br/><em>A commitment in every detail.</em></h2><p>The finished space is only part of the story. Behind it are the conversations, technical decisions and coordinated work that bring an architectural idea into focus.</p><p>From the individual character of a private residence to the demands of a larger development, our attention connects the design with the way it is built.</p><Link href="/expertise/" className="pr-text-link light">Discover our capabilities <span>↗</span></Link></div></section>
  <section className="pr-section pr-project-start"><div><p className="kx-tag"><i/>Your next project</p><h2>Have a vision<br/><em>of your own?</em></h2></div><div><p>Tell us about the location, the kind of space you want to create and where you are in the journey. A considered conversation is the first step towards a considered build.</p><Link href="/contact/" className="pr-text-link">Discuss your project <span>↗</span></Link></div></section>
  <KxClosing image="dubai-marina-night" alt="Dubai Marina towers and yachts at dusk"/>
</Motion>}
