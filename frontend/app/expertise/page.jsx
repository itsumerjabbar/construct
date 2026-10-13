import Link from 'next/link';
import { KxHero, KxHead, KxClosing, Waves } from '../kx-ui';
import { Motion, HoverList } from '../kx-client';
import { capabilities, steps, craftImages } from '../data';
export const metadata={title:'Our expertise'};

const sectors=[
  {id:'villas',title:'Luxury mansions',italic:'& signature villas',sub:'Distinctive homes, crafted around the way you live.',text:'From MBR City to Palm Jumeirah and DAMAC Lagoons, our approach to private residences combines technical coordination with close attention to architectural detail, materials and workmanship — including the particular demands of sea-view and waterside homes.',image:'palm-villas',inset:'villa-al-barari',tags:['Bespoke residences','Sea-view & lagoon homes','Specialist finishes'],alt:'Villas along the water on a frond of Palm Jumeirah'},
  {id:'residential',title:'Residential',italic:'buildings',sub:'Building the fabric of everyday life.',text:'Residential projects in Dubai South and Gutti developments call for coordinated engineering, disciplined planning and careful execution across structural, civil and finishing works — with consistency carried from one floor to the next.',image:'tower-night',inset:'skyline-pool',tags:['Structural & civil works','Coordinated delivery','Consistent quality'],alt:'Residential towers along Dubai Marina'},
  {id:'commercial',title:'Commercial',italic:'construction',sub:'Spaces that move business forward.',text:'Large corporate and office projects demand an understanding of how buildings serve people. We align project management, technical interfaces and construction delivery around each project’s requirements.',image:'dubai-downtown',inset:'burj-sunset',tags:['Corporate environments','Office projects','Technical coordination'],alt:'Downtown Dubai towers and Burj Khalifa'},
];
const craft=capabilities.map(([t,p],i)=>({title:t,text:p,image:craftImages[i]}));

export default function Expertise(){return <Motion>
  <KxHero foot="Mansions · Residential · Commercial" tag="Our expertise" title="The vision is yours." italic="The commitment is ours." text="Three areas of expertise. One considered approach to construction — from the shoreline to the skyline." image="mansion-infinity" alt="Contemporary mansion with infinity pool">
    <nav className="kx-pills" aria-label="Jump to an area of expertise">{sectors.map((s,i)=><a key={s.id} href={`#${s.id}`}><span>0{i+1}</span>{s.title} {s.italic}</a>)}</nav>
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

  <KxClosing image="sheikh-zayed-mosque" alt="Sheikh Zayed Grand Mosque silhouetted at sunset" tag="The next chapter starts with you" title="Let’s build something" italic="extraordinary."/>
</Motion>}
