import Link from 'next/link';
import { KxClosing } from '../kx-ui';
import { Motion } from '../kx-client';
import Collection from './collection';
import { projects } from '../data';
import { pageMeta, JsonLd, breadcrumb, faqSchema, abs } from '../seo';
import { InquiryForm } from '../ui';
import { projectInquiryFaqs } from '../faqs';
export const metadata=pageMeta({title:'Construction Projects in Dubai | Villas, Mansions & Buildings by KEA',absoluteTitle:true,description:'Construction projects by KEA Building Contracting in Dubai: luxury villas, private mansions, waterfront homes, residential and commercial buildings.',path:'/projects/',image:'project-signature-villa'});

export default function Projects(){return <Motion className="pr-page">
  <JsonLd data={[{'@type':'CollectionPage',url:abs('/projects/'),name:'Construction projects in Dubai',mainEntity:{'@type':'ItemList',itemListElement:projects.map((p,i)=>({'@type':'ListItem',position:i+1,url:abs(`/projects/${p.slug}/`),name:p.name}))}},faqSchema(projectInquiryFaqs),breadcrumb([['Home','/'],['Projects','/projects/']])]}/>
  <section className="pr-intro">
    <div className="pr-intro-top"><h1 className="kx-tag kx-h1"><i/>Construction projects in Dubai</h1><span className="pr-label">Dubai, United Arab Emirates</span></div>
    <div className="pr-title-row"><p className="pr-display-title">Places of purpose.<br/><em>Details of distinction.</em></p><div><p>Private sanctuaries. Contemporary communities. Spaces that bring people together.</p><a href="#portfolio" className="pr-text-link">Discover the collection <span>↓</span></a></div></div>
    
    <div className="pr-intro-foot"><span>A considered approach. A distinctive result.</span><a href="#portfolio">THE COLLECTION <span>↓</span></a></div>
  </section>
  <section className="pr-section pr-portfolio" id="portfolio">
    <div className="pr-section-heading" data-reveal><div><p className="kx-tag"><i/>Selected work</p><h2>Every project,<br/><em>its own character.</em></h2></div><p>Explore our collection of mansions, villas, residential buildings and spaces for business and community. Each reflects a different brief, setting and architectural ambition.</p></div>
    <Collection/>
  </section>
  <section className="pd-inquiry pr-inquiry" id="inquiry">
    <div className="pd-inquiry-bg"><img src="/images/project-beachfront-villa.jpg" alt="" loading="lazy"/></div>
    <div className="kx-wrap pd-inquiry-grid">
      <div className="pd-inquiry-copy" data-reveal>
        <p className="kx-tag light"><i/>Start your construction project in Dubai</p>
        <h2>Have a vision <em>of your own?</em></h2>
        <p>Whether you are planning a luxury villa, a private mansion, a waterfront home, a residential building or a commercial building in Dubai, KEA Building Contracting is ready to discuss your project. Tell us about the location, the space you want to create and where you are in the journey.</p>
        <ul className="pr-inq-types">{['Luxury villa construction','Mansion construction','Waterfront & sea-view homes','Residential buildings','Commercial buildings'].map(t=><li key={t}>{t}</li>)}</ul>
        <ol className="pr-inq-steps">
          <li><span>01</span><div><b>Share your brief</b><small>Location, intended use, approximate size, design stage and timeline.</small></div></li>
          <li><span>02</span><div><b>Discuss the scope</b><small>We review the requirements, responsibilities and coordination your project needs.</small></div></li>
          <li><span>03</span><div><b>Agree in writing</b><small>Scope, programme and terms are confirmed in a written project agreement.</small></div></li>
        </ol>
        <ul className="pd-contact">
          <li><small>Call</small><a href="tel:+97143261339">04 326 1339</a></li>
          <li><small>Email</small><a href="mailto:info@construct.ae">info@construct.ae</a></li>
          <li><small>Visit</small><span>Office 802, Iris Bay Tower, Business Bay, Dubai</span></li>
        </ul>
      </div>
      <div className="pd-form" data-reveal style={{'--d':'.15s'}}><InquiryForm/></div>
    </div>
  </section>
  <section className="kx-wrap kx-faq pd-faq" id="project-faq">
    <div className="kx-faq-head" data-reveal>
      <p className="kx-tag"><i/>Construction inquiry — FAQ</p>
      <h2>Before you <em>start your project.</em></h2>
      <p>Answers to the questions clients ask most when choosing a construction company in Dubai.</p>
      <a href="#inquiry" className="kx-link">Prepare your inquiry <span>→</span></a>
    </div>
    <div className="kx-accordion">{projectInquiryFaqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span><h3>{q}</h3><i aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
  </section>
  <KxClosing image="dubai-marina-night" alt="Dubai Marina towers and yachts at dusk"/>
</Motion>}
