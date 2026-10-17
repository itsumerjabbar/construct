import Link from 'next/link';
import { KxHero, KxHead, KxClosing, Waves } from '../kx-ui';
import { Motion, HoverList } from '../kx-client';
import { capabilities, steps, craftImages } from '../data';
import { pageMeta, JsonLd, breadcrumb, faqSchema, orgRef, abs } from '../seo';
import { expertiseFaqs } from '../faqs';
export const metadata=pageMeta({title:'Construction Services in Dubai | Villas, Mansions, Residential & Commercial',absoluteTitle:true,description:'Construction services in Dubai: luxury villa and mansion construction, waterfront homes, residential buildings and commercial buildings by KEA.',path:'/expertise/',image:'dubai-palm-aerial-hd'});

const sectors=[
  {id:'villas',pill:'Luxury villas',seo:'Luxury villa construction in Dubai',title:'Luxury villa',italic:'construction',sub:'Sea-view homes, crafted around the way you live.',text:'From Palm Jumeirah to MBR City and DAMAC Lagoons, we build contemporary villas with infinity pools, full-height glazing and terraces that open onto the view — combining technical coordination with close attention to architectural detail, materials and workmanship.',image:'villa-sunset-5',inset:'project-signature-villa',tags:['Sea-view villas','Infinity pools','Specialist finishes'],alt:'Luxury villa with infinity pool facing the Dubai skyline at sunset'},
  {id:'mansions',pill:'Mansions',seo:'Mansion construction in Dubai',title:'Mansion',italic:'construction',sub:'Private estates, built with quiet precision.',text:'Bespoke mansions call for structural ambition and meticulous finishing in equal measure. We coordinate stone, timber, glass and landscape into one complete estate — from grand entrance halls to illuminated gardens.',image:'project-private-mansion',inset:'mansion-waterfront-2',tags:['Bespoke estates','Stone & timber','Landscaped grounds'],alt:'Private mansion lit at night with terraces and olive trees'},
  {id:'waterfront',pill:'Waterfront homes',seo:'Waterfront and sea-view home construction',title:'Waterfront home',italic:'construction',sub:'Living on the water, engineered for the coast.',text:'Beachfront and waterfront homes bring their own technical demands — marine conditions, waterproofing, glazing and the meeting of indoor and outdoor. We bring the engineering discipline that lets the setting take centre stage.',image:'mansion-waterfront-1',inset:'apt-balcony-burj-al-arab',tags:['Coastal detailing','Private moorings','Panoramic glazing'],alt:'Waterfront mansion with infinity pool and private boat dock at sunset'},
  {id:'residential',pill:'Residential buildings',seo:'Residential building construction in Dubai',title:'Residential building',italic:'construction',sub:'Building the fabric of everyday life.',text:'Residential projects in Dubai South, Gutti developments and DAMAC communities call for coordinated engineering, disciplined planning and careful execution across structural, civil and finishing works — with consistency carried from one floor to the next.',image:'res-towers-beach',inset:'project-gutti',tags:['Structural & civil works','Coordinated delivery','Consistent quality'],alt:'Luxury residential towers along the beach at sunset'},
  {id:'commercial',pill:'Commercial buildings',seo:'Commercial building construction in Dubai',title:'Commercial building',italic:'construction',sub:'Spaces that move business forward.',text:'Corporate, industrial and community projects demand an understanding of how buildings serve people. We align project management, technical interfaces and construction delivery around each project’s requirements.',image:'project-como',inset:'project-mosque',tags:['Corporate environments','Industrial facilities','Community buildings'],alt:'COMO industrial business park building'},
];
const craft=capabilities.map(([t,p],i)=>({title:t,text:p,image:craftImages[i]}));

export default function Expertise(){return <Motion>
  <JsonLd data={[...sectors.map(s=>({'@type':'Service','@id':abs(`/expertise/#${s.id}`),name:s.seo,serviceType:s.seo,description:s.text,provider:orgRef,areaServed:{'@type':'City',name:'Dubai'},url:abs(`/expertise/#${s.id}`)})),faqSchema(expertiseFaqs),breadcrumb([['Home','/'],['Expertise','/expertise/']])]}/>
  <KxHero foot="Mansions · Residential · Commercial" tag="Our expertise" h1="Construction services in Dubai" title="The vision is yours." italic="The commitment is ours." text="Five areas of expertise. One considered approach to construction — from the shoreline to the skyline." image="dubai-palm-aerial-hd" alt="Aerial view of Palm Jumeirah and Atlantis at sunset">
    <nav className="kx-pills" aria-label="Jump to an area of expertise">{sectors.map((s,i)=><a key={s.id} href={`#${s.id}`}><span>0{i+1}</span>{s.pill}</a>)}</nav>
  </KxHero>

  <section className="kx-wrap kx-statement" id="content">
    <p className="kx-tag" data-reveal><i/>What we build</p>
    <p className="kx-big" data-reveal>A private home, a residential community, a place of business. <em>Each begins with a different brief</em> — and deserves an approach shaped around it.</p>
  </section>

  {sectors.map((s,i)=><section className={`kx-sector ${i%2?'flip':''}`} id={s.id} key={s.id}>
    <div className="kx-sector-media">
      <figure className="kx-sector-img" data-reveal="clip"><img src={`/images/${s.image}.jpg`} alt={s.alt} loading="lazy"/></figure>
      <figure className="kx-sector-inset" data-reveal="clip" style={{'--d':'.25s'}}><img src={`/images/${s.inset}.jpg`} alt="" loading="lazy"/></figure>
    </div>
    <div className="kx-sector-copy" data-reveal style={{'--d':'.1s'}}>
      <span className="kx-sector-no" aria-hidden="true">0{i+1}</span>
      <p className="kx-tag"><i/>0{i+1} — What we build</p>
      <h2>{s.title} <em>{s.italic}</em></h2>
      <p className="kx-lead">{s.sub}</p>
      <p>{s.text}</p>
      <ul className="kx-chips">{s.tags.map(t=><li key={t}>{t}</li>)}</ul>
      <Link href="/contact/" className="kx-link">Discuss your project <span>→</span></Link>
    </div>
  </section>)}

  <section className="kx-water-band" data-shift>
    <img src="/images/lagoon-aerial.jpg" alt="" loading="lazy"/>
    <div className="kx-caustics" aria-hidden="true"/>
    <div className="kx-water-band-copy" data-reveal>
      <p className="kx-tag light"><i/>Waterfront living</p>
      <h2>From the shoreline <em>to the skyline.</em></h2>
      <p>Sea views, lagoons and infinity edges bring beauty — and technical responsibility. We plan for both.</p>
    </div>
    <Waves className="to-pearl"/>
  </section>

  <section className="kx-wrap kx-craft">
    <KxHead tag="How we deliver" title="The discipline behind" italic="the difference."><p>Connected capabilities, from technical planning to the details of handover.</p></KxHead>
    <HoverList items={craft}/>
  </section>

  <section className="kx-wrap kx-process">
    <KxHead tag="From vision to handover" title="A clear path." italic="A considered process."/>
    <ol className="kx-steps">{steps.map(([t,p],i)=><li key={t} data-reveal style={{'--d':`${i*.12}s`}}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></li>)}</ol>
  </section>

  <section className="kx-wrap kx-faq" id="faq">
    <div className="kx-faq-head" data-reveal>
      <p className="kx-tag"><i/>Construction in Dubai — FAQ</p>
      <h2>Questions about <em>building with KEA.</em></h2>
      <p>Straight answers about our construction services, from luxury villas to residential and commercial buildings.</p>
      <Link href="/contact/" className="kx-link">Ask us anything <span>→</span></Link>
    </div>
    <div className="kx-accordion">{expertiseFaqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span><h3>{q}</h3><i aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
  </section>

  <KxClosing image="villa-sunset-3" alt="Luxury villa terrace with infinity pool facing the Dubai skyline" tag="The next chapter starts with you" title="Let’s build something" italic="extraordinary."/>
</Motion>}
