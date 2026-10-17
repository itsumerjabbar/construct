import Link from 'next/link';
import { KxClosing } from '../kx-ui';
import { Motion } from '../kx-client';
import Collection from './collection';
import { projects } from '../data';
import { pageMeta, JsonLd, breadcrumb, abs } from '../seo';
export const metadata=pageMeta({title:'Construction Projects in Dubai | Villas, Mansions & Buildings by KEA',absoluteTitle:true,description:'Construction projects by KEA Building Contracting in Dubai: luxury villas, private mansions, waterfront homes, residential and commercial buildings.',path:'/projects/',image:'project-signature-villa'});

export default function Projects(){return <Motion className="pr-page">
  <JsonLd data={[{'@type':'CollectionPage',url:abs('/projects/'),name:'Construction projects in Dubai',mainEntity:{'@type':'ItemList',itemListElement:projects.map((p,i)=>({'@type':'ListItem',position:i+1,url:abs(`/projects/${p.slug}/`),name:p.name}))}},breadcrumb([['Home','/'],['Projects','/projects/']])]}/>
  <section className="pr-intro">
    <div className="pr-intro-top"><h1 className="kx-tag kx-h1"><i/>Construction projects in Dubai</h1><span className="pr-label">Dubai, United Arab Emirates</span></div>
    <div className="pr-title-row"><p className="pr-display-title">Places of purpose.<br/><em>Details of distinction.</em></p><div><p>Private sanctuaries. Contemporary communities. Spaces that bring people together.</p><a href="#portfolio" className="pr-text-link">Discover the collection <span>↓</span></a></div></div>
    
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
