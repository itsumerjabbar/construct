import Link from 'next/link';
import { HeroDestinations, ArchReveal, StackCards, HoverList, Motion } from './kx-client';
import { KxHead, KxClosing } from './kx-ui';
import { capabilities, companies, articles, steps, craftImages, stats } from './data';
import './home.css';

const places = [
  {image:'dubai-downtown',name:'Downtown',line:'Skyline views',text:'Residences with a front-row seat to the world’s most famous skyline.',href:'/projects/',alt:'Burj Khalifa rising above Downtown Dubai and palm trees'},
  {image:'villa-sunset-3',name:'Palm Jumeirah',line:'Island living',text:'Signature villas on the world’s most famous island, steps from the sea.',href:'/projects/',alt:'Atlantis The Palm and the beach at The Pointe, Palm Jumeirah'},
  {image:'burj-al-arab',name:'Jumeirah Coast',line:'Life by the sea',text:'Waterfront living where every room opens towards the Arabian Gulf.',href:'/projects/',alt:'Aerial view of Burj Al Arab on the Jumeirah coastline'},
  {image:'lagoon-aerial',name:'The Lagoons',line:'Turquoise retreats',text:'Lagoon-inspired living, shaped around water, light and calm.',href:'/projects/',alt:'Villas set over a turquoise lagoon'},
  {image:'marina-skyline',name:'Dubai Marina',line:'City by the water',text:'Vertical living along the marina, where the city meets the shoreline.',href:'/projects/',alt:'Dubai Marina towers rising above the sea'},
];

const residences = [
  {image:'project-signature-villa',title:'Signature Villa',place:'Mansions & villas · Dubai',href:'/projects/signature-villa/',tags:['Contemporary facade','Reflecting pools','Landscaped courtyard'],text:'A contemporary white facade with dark stone volumes, full-height glazing and a sculpted garden of olive trees and water.',alt:'Contemporary white villa with dark stone volumes and landscaped garden'},
  {image:'project-private-mansion',title:'Private Mansion',place:'Mansions & villas · Dubai',href:'/projects/private-mansion/',tags:['Stone & timber','Glass terraces','Night-lit garden'],text:'Warm stone and timber, cantilevered terraces and an illuminated entrance garden built around a sculptural olive tree.',alt:'Private mansion lit at night with terraces and olive trees'},
  {image:'project-contemporary-villa',title:'Contemporary Villa',place:'Mansions & villas · Dubai',href:'/projects/contemporary-villa/',tags:['Sun-shelf pool','Linear lighting','Sliding glass'],text:'Layered cantilevers and integrated lighting, with floor-to-ceiling glass opening onto a sun-shelf pool.',alt:'Modern villa at night with illuminated cantilevers and pool'},
  {image:'project-beachfront-villa',title:'Beachfront Villa',place:'Mansions & villas · Dubai',href:'/projects/beachfront-villa/',tags:['Infinity edge','On the beach','Sea views'],text:'An infinity-edge pool running along the shoreline, with stone terraces and glazing framing the sea.',alt:'Beachfront villa with infinity pool beside the sea'},
];

const lagoonPoints = [
  ['Marine-aware detailing','Waterproofing, materials and junctions considered for coastal and waterside conditions.'],
  ['Glass & horizon','Large-format glazing coordinated so the view becomes part of the architecture.'],
  ['Inside meets outside','Terraces, decks and pools resolved as one continuous experience.'],
];

const craft = capabilities.map(([t,p],i)=>({title:t,text:p,image:craftImages[i]}));

const developers = [
  {name:'DAMAC',sub:'Properties',image:'lagoon-villas',line:'Villa construction focus within DAMAC Lagoons, one of Dubai’s distinctive lagoon-inspired communities.',tag:'DAMAC Lagoons'},
  {name:'GUTTI',sub:'Development',image:'dubai-coast',line:'Residential building delivery across Gutti developments, connecting civil works, engineering and finishing.',tag:'Residential'},
  {name:'ZOYA',sub:'Developments',image:'marina-skyline',line:'Part of our developer landscape — every engagement begins with understanding the project vision.',tag:'Developer landscape'},
  {name:'HARKO',sub:'Development',image:'burj-sunset',line:'Part of our developer landscape — aligning construction around each project’s scope and priorities.',tag:'Developer landscape'},
];

const seaFloats = [
  {image:'dubai-palm-island',label:'Palm Jumeirah'},
  {image:'dubai-burj-al-arab-beach',label:'Jumeirah Beach'},
  {image:'lagoon-community',label:'Lagoon living'},
  {image:'dubai-burj-fountain',label:'Downtown'},
  {image:'dubai-palm-fronds',label:'Palm villas'},
  {image:'res-towers-beach',label:'Beachfront towers'},
  {image:'apt-balcony-palm',label:'Sea-view terrace'},
];

export const metadata = {
  title: { absolute: 'KEA Building Contracting | Luxury Villa & Mansion Construction in Dubai' },
  description: 'KEA Building Contracting is a Dubai construction company delivering luxury mansions, signature villas, residential buildings and commercial projects — from Palm Jumeirah and MBR City to DAMAC Lagoons.',
};

const orgSchema = {
  '@context':'https://schema.org','@type':'GeneralContractor',name:'KEA Building Contracting',
  description:'Construction company in Dubai delivering luxury mansions, signature villas, residential buildings and commercial construction.',
  areaServed:{'@type':'City',name:'Dubai'},telephone:'+97143261339',email:'info@construct.ae',address:{'@type':'PostalAddress',streetAddress:'Office 802, Iris Bay Tower, Business Bay',addressLocality:'Dubai',addressCountry:'AE'},
  knowsAbout:['Luxury villa construction','Mansion construction','Residential building construction','Commercial construction','Project management','QA/QC','HSE'],
};

export default function Home(){return <Motion>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(orgSchema)}}/>
  <div className="kx-loader" aria-hidden="true"><div className="kx-loader-word">{'KEA'.split('').map((c,i)=><span key={i} className="kx-wave-l" style={{'--i':i}}>{c}</span>)}</div><div className="kx-loader-bar"><i/></div><small>Dubai · Luxury construction</small></div>
  <HeroDestinations/>

  <section className="kx-pv kx-wrap" id="introduction">
    <div className="kx-pv-text">
      <p className="kx-tag" data-reveal><i/>01 — The KEA perspective</p>
      <h2 className="kx-pv-title kx-words" data-reveal>{'Luxury villa and mansion construction in Dubai,'.split(' ').map((w,i)=><span key={i} className="kx-w" style={{'--w':i}}><span>{w}</span></span>).reduce((a,x,i)=>i?[...a,' ',x]:[x],[])} <em>{'built with quiet precision.'.split(' ').map((w,i)=><span key={i} className="kx-w" style={{'--w':i+7}}><span>{w}</span></span>).reduce((a,x,i)=>i?[...a,' ',x]:[x],[])}</em></h2>
      <div data-reveal style={{'--d':'.12s'}}>
        <p className="kx-lead">KEA Building Contracting is a Dubai construction company for clients who expect more — more care in the detail, more clarity in the process and more confidence in the result.</p>
        <p>We build luxury mansions and signature villas, residential buildings and commercial projects across Dubai, with a focus on communities such as Palm Jumeirah, MBR City and DAMAC Lagoons, and residential work in Dubai South and Gutti developments.</p>
        <p>Every project brings engineering, project management, planning, QA/QC and HSE together under one accountable team — so architectural intent is protected from the first structural decision to the final finish.</p>
      </div>
      <ul className="kx-pv-list" data-reveal>{['Luxury mansions','Signature villas','Waterfront homes','Residential buildings','Commercial construction'].map((t,i)=><li key={t} style={{'--t':i}}>{t}</li>)}</ul>
      <div className="kx-pv-cta" data-reveal><Link href="/about/" className="kx-link">Our story <span>→</span></Link><Link href="/expertise/" className="kx-link">Our expertise <span>→</span></Link></div>
    </div>
    <div className="kx-pv-gallery">
      {[['villa-sunset-5','Luxury villas','/expertise/#villas','Luxury villa with infinity pool facing the Dubai skyline at sunset'],
        ['project-private-mansion','Mansions','/projects/private-mansion/','Private mansion lit at night with olive trees'],
        ['apt-balcony-burj-al-arab','Waterfront residences','/expertise/#residential','Residence balcony overlooking Burj Al Arab and the Dubai coastline'],
        ['res-towers-beach','Residential buildings','/expertise/#residential','Residential towers along the beach at sunset'],
        ['project-como','Commercial buildings','/projects/como/','COMO industrial business park building']].map(([img,label,href,alt],i)=>
        <Link key={label} href={href} className={`kx-pc p${i}`} data-reveal="clip" data-cursor="view" style={{'--d':`${i*.08}s`}}>
          <img src={`/images/${img}.jpg`} alt={alt} loading="lazy"/>
          <span className="kx-pc-cap"><small>0{i+1}</small><b>{label}</b><i>→</i></span>
        </Link>)}
    </div>
  </section>

  <section className="kx-numbers" aria-label="KEA in numbers">
    <div className="kx-numbers-head" data-reveal><p className="kx-tag light"><i/>KEA in numbers</p><h2>Built on experience. <em>Measured in trust.</em></h2></div>
    <div className="kx-numbers-grid">{stats.map((s,i)=><div className={`kx-num ${i<2?'big':''}`} key={s.label} data-reveal style={{'--d':`${i*.1}s`}}>
      <b><span data-count={s.n}>{String(s.n).padStart(2,'0')}</span>{s.plus&&<i>+</i>}</b>
      <h3>{s.label}</h3><p>{s.text}</p><span className="kx-num-bar" aria-hidden="true"/>
    </div>)}</div>
  </section>

  <ArchReveal image="villa-sunset-4" alt="Luxury villa terrace and infinity pool overlooking the sea and Dubai skyline at sunset" floats={seaFloats}
    intro={<><p className="kx-tag"><i/>Sea view living</p><h2>Life, framed <em>by the sea.</em></h2></>}
    caption={<><span className="kx-tag light"><i/>Palm Jumeirah · Dubai Marina · Jumeirah Coast</span><b>Every residence should <em>frame a view.</em></b><span className="kx-arch-chips"><Link href="/projects/beachfront-villa/">Beachfront villas</Link><Link href="/projects/">Marina residences</Link><Link href="/expertise/#villas">Waterfront expertise</Link></span></>}/>

  <section className="kx-places" id="destinations">
    <div className="kx-wrap"><KxHead tag="02 — Dubai, our canvas" title="A city of" italic="extraordinary addresses."><p>From the skyline to the shoreline, each setting asks for a different kind of home — and a builder who understands it.</p></KxHead></div>
    <div className="kx-places-row" data-reveal>{places.map((p,i)=><Link key={p.name} href={p.href} className="kx-place" data-cursor="view">
      <img src={`/images/${p.image}.jpg`} alt={p.alt} loading="lazy"/>
      <span className="kx-place-no">0{i+1}</span>
      <span className="kx-place-v">{p.name}</span>
      <div className="kx-place-body"><small>{p.line}</small><h3>{p.name}</h3><p>{p.text}</p></div>
    </Link>)}</div>
  </section>

  <section className="kx-residences kx-wrap" id="residences">
    <KxHead tag="03 — Signature residences" title="Homes that" italic="hold the horizon." light><Link href="/projects/" className="kx-link light">All projects <span>→</span></Link></KxHead>
    <StackCards items={residences}/>
  </section>

  <section className="kx-lagoon" id="lagoon">
    <div className="kx-lagoon-top kx-wrap">
      <p className="kx-tag light" data-reveal><i/>04 — Water as architecture</p>
      <h2 className="kx-water-word" aria-label="Lagoon"><span>Lagoon</span></h2>
      <p className="kx-lagoon-sub" data-reveal>Island-inspired living <i/> Turquoise water <i/> Private shores</p>
    </div>
    <div className="kx-lagoon-stage kx-wrap">
      <figure className="kx-lagoon-img" data-reveal="clip"><img src="/images/lagoon-aerial.jpg" alt="Island villas set over a turquoise lagoon" loading="lazy"/><figcaption>Inspired by DAMAC Islands · Illustrative</figcaption></figure>
      <div className="kx-glass" data-reveal style={{'--d':'.2s'}}>
        <h3>Turquoise calm, <em>carefully built.</em></h3>
        <p>Island-inspired communities — from DAMAC Lagoons to the new DAMAC Islands — bring water into everyday life. Waterside homes carry their own technical demands, and we bring the engineering discipline that lets the setting take centre stage.</p>
        <Link href="/projects/beachfront-villa/" className="kx-link light">Waterfront villas <span>→</span></Link>
      </div>
      <figure className="kx-lagoon-thumb" data-reveal="clip" style={{'--d':'.3s'}}><img src="/images/lagoon-suite.jpg" alt="Suite opening onto a turquoise lagoon" loading="lazy"/></figure>
    </div>
    <ul className="kx-lagoon-points kx-wrap">{lagoonPoints.map(([t,p],i)=><li key={t} data-reveal style={{'--d':`${i*.12}s`}}><span className="kx-drop" aria-hidden="true"/><h4>{t}</h4><p>{p}</p></li>)}</ul>
  </section>

  <section className="kx-craft kx-wrap">
    <KxHead tag="05 — The capability behind the craft" title="Precision at" italic="every stage."><p>Behind every remarkable space is a team that knows how to bring it together.</p></KxHead>
    <HoverList items={craft}/>
  </section>

  <section className="kx-process kx-wrap">
    <KxHead tag="06 — From vision to handover" title="A clear path." italic="A considered process."><Link href="/contact/" className="kx-link">Start your project <span>→</span></Link></KxHead>
    <ol className="kx-steps">{steps.map(([t,p],i)=><li key={t} data-reveal style={{'--d':`${i*.12}s`}}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></li>)}</ol>
  </section>

  <section className="kx-devs kx-wrap" id="developers" aria-labelledby="devs-title">
    <div className="kx-devs-head" data-reveal>
      <p className="kx-tag light"><i/>07 — Building relationships. Creating value.</p>
      <h2 id="devs-title">Alongside those shaping <em>what’s next.</em></h2>
      <p>Our developer landscape includes some of the names shaping Dubai’s communities. Each relationship begins with understanding the vision and aligning construction around its scope, priorities and design requirements.</p>
    </div>
    <div className="kx-devs-grid">{developers.map((d,i)=><article className="kx-dev" key={d.name} data-reveal style={{'--d':`${i*.1}s`}}>
      <img src={`/images/${d.image}.jpg`} alt="" loading="lazy"/>
      <span className="kx-dev-no">0{i+1}</span>
      <div className="kx-dev-mark"><b>{d.name}</b><small>{d.sub}</small></div>
      <div className="kx-dev-body"><span>{d.tag}</span><p>{d.line}</p></div>
    </article>)}</div>
    <div className="kx-network" data-reveal>
      <p className="kx-tag light"><i/>Our business network</p>
      <ul>{companies.map(([n,d],i)=><li key={n}><span>0{i+1}</span><b>{n}</b><small>{d}</small></li>)}</ul>
    </div>
  </section>

  <section className="kx-insights kx-wrap">
    <KxHead tag="08 — Journal" title="A closer" italic="perspective."><Link href="/insights/" className="kx-link">All insights <span>→</span></Link></KxHead>
    <div className="kx-articles">{articles.map((a,i)=><Link href={`/insights/${a.slug}/`} key={a.slug} className="kx-article" data-reveal data-cursor="view" style={{'--d':`${i*.12}s`}}><div><img src={`/images/${a.image}.jpg`} alt="" loading="lazy"/></div><small>{a.tag}</small><h3>{a.title}</h3></Link>)}</div>
    <p className="kx-note">Photography is illustrative architectural and Dubai imagery and does not depict verified KEA projects.</p>
  </section>

  <KxClosing image="dubai-night-reflection" alt="Downtown Dubai and Burj Khalifa reflected in the water at night"/>
</Motion>}
