import Link from 'next/link';
import { KxHero, KxHead, KxClosing } from '../kx-ui';
import { Motion, HoverList } from '../kx-client';
import { companies } from '../data';
export const metadata={title:'About us'};

const principles=[
  ['Integrity in the conversation','Trust grows through clarity. We value direct communication, realistic discussions about scope and responsibilities, and a shared understanding of what a project needs.'],
  ['Precision in the work','Small details influence the whole. Technical coordination, considered sequencing and attention to workmanship help protect the intent of a design as it becomes a building.'],
  ['Respect for people','Construction is a collective effort. Respect for colleagues, consultants, specialist partners and the people around a site belongs at the centre of how a project is approached.'],
  ['A long view of quality','A place should continue to serve people beyond its opening day. We value decisions that consider function, durability and the experience of using a building over time.'],
];
const disciplines=[
  ['Engineering','Understanding the design, coordinating technical interfaces and translating intent into buildable detail.','⌑'],
  ['Project management','Connecting responsibilities, communication and construction activity around the agreed requirements.','↗'],
  ['Planning','Thinking through sequence, dependencies and milestones so the wider delivery picture stays visible.','≋'],
  ['QA/QC','Attention to material requirements, inspections and workmanship throughout the construction process.','◇'],
  ['HSE','Health, safety and environmental considerations as part of everyday site planning and execution.','⊕'],
];
const networkImages=['villa-sunset-3','luxury-interior','palm-villas','master-suite','dubai-downtown'];

export default function About(){return <Motion>
  <KxHero foot="Vision · Integrity · Craft" tag="Our story" title="Built on conviction." italic="Defined by craft." text="A construction partner for ambitious visions and places that stand the test of time — from private shoreline villas to the developments shaping Dubai." image="dubai-skyline-reflection-hd" alt="Dubai skyline and Burj Khalifa reflected in the water at dusk" size="pos-skyline"/>

  <section className="kx-wrap kx-story" id="content">
    <KxHead tag="01 — The company" title="A considered approach." italic="A lasting commitment."/>
    <div className="kx-story-grid">
      <div className="kx-collage">
        <figure className="kx-collage-a" data-reveal="clip"><img src="/images/palm-jumeirah-fronds-dusk.jpg" alt="Palm Jumeirah villas and Atlantis at sunset" loading="lazy"/></figure>
        <figure className="kx-collage-b" data-reveal="clip" style={{'--d':'.2s'}}><img src="/images/dubai-burj-al-arab-beach.jpg" alt="Burj Al Arab seen from Jumeirah beach at sunset" loading="lazy"/></figure>
        <div className="kx-spin-badge" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="kx-c2" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs><text><textPath href="#kx-c2">VISION · INTEGRITY · CRAFT · </textPath></text></svg><span>K.</span></div>
      </div>
      <div className="kx-prose" data-reveal>
        <p className="kx-lead">KEA Building Contracting brings together engineering, project management and construction delivery across Dubai.</p>
        <p>Our work spans luxury mansions and signature villas in MBR City, Palm Jumeirah and DAMAC Lagoons, residential buildings in Dubai South and Gutti developments, and large corporate and office projects.</p>
        <p>We believe the strength of a building begins with the way a team works: clear responsibilities, careful coordination and respect for the details. For a private client, that means understanding the personal ambition behind a home. For a developer, it means recognising how each decision sits within a wider programme.</p>
        <div className="kx-mini-stats">{[[3,'Sectors'],[5,'Disciplines'],[10,'Companies',true]].map(([n,l,plus])=><div key={l}><b><span data-count={n}>{String(n).padStart(2,'0')}</span>{plus&&<i>+</i>}</b><span>{l}</span></div>)}</div>
        <Link href="/expertise/" className="kx-link">Explore our expertise <span>→</span></Link>
      </div>
    </div>
  </section>


  <section className="kx-ceo kx-wrap">
    <figure className="kx-arch-frame is-empty" data-reveal aria-hidden="true"><span className="kx-ceo-ph"><b>K.</b><small>Portrait coming soon</small></span></figure>
    <div className="kx-ceo-copy" data-reveal style={{'--d':'.15s'}}>
      <p className="kx-tag light"><i/>A message from the CEO</p>
      <span className="kx-quote-mark" aria-hidden="true">“</span>
      <blockquote>Our responsibility is more than building well. <em>It is earning trust, every step of the way.</em></blockquote>
      <p>We see every project as an opportunity to translate a client’s ambition into something lasting. That responsibility calls for thoughtful planning, clear communication and care in execution.</p>
      <p>As Dubai continues to evolve, the opportunities to create meaningful places are extraordinary. Our vision is to build relationships as carefully as we build spaces.</p>
      <div className="kx-sign"><b>The CEO’s office</b><span>KEA Building Contracting</span></div>
      <small className="kx-draft">Proposed message for CEO approval.</small>
    </div>
  </section>

  <section className="kx-wrap kx-duo">
    {[['02 — Our vision','To shape places of','lasting value.','To be a trusted construction partner for distinctive homes, thriving communities and purposeful commercial spaces across Dubai — buildings that feel right for their setting and reflect the care invested in them.','vision',['Trusted partnerships','Distinctive homes','Lasting value']],
      ['03 — Our mission','To bring ambition','beautifully to life.','To connect engineering discipline, responsible project management and attentive craftsmanship in every project — asking the right questions and respecting the decisions that determine quality.','mission',['Engineering discipline','Responsible delivery','Attentive craft']]].map(([tag,t,it,p,icon,points],i)=>
      <article className={`kx-vm ${icon}`} key={tag} data-reveal style={{'--d':`${i*.15}s`}}>
        <div className="kx-vm-icon" aria-hidden="true">
          <svg className="kx-vm-ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="56"/></svg>
          {icon==='vision'
            ?<svg className="kx-vm-glyph" viewBox="0 0 64 64"><path className="draw" d="M4 32c7-12 17-19 28-19s21 7 28 19c-7 12-17 19-28 19S11 44 4 32z"/><circle className="draw" cx="32" cy="32" r="10"/><circle className="pupil" cx="32" cy="32" r="4"/><path className="draw" d="M32 4v6M32 54v6M4 32H0M64 32h-4"/></svg>
            :<svg className="kx-vm-glyph" viewBox="0 0 64 64"><circle className="draw" cx="32" cy="32" r="26"/><circle className="draw" cx="32" cy="32" r="16"/><circle className="pupil" cx="32" cy="32" r="5"/><path className="draw arrow" d="M58 6L34 30M58 6h-10M58 6v10"/></svg>}
        </div>
        <p className="kx-tag"><i/>{tag}</p>
        <h3>{t} <em>{it}</em></h3>
        <p>{p}</p>
        <ul>{points.map(x=><li key={x}>{x}</li>)}</ul>
        <span className="kx-vm-no" aria-hidden="true">0{i+1}</span>
      </article>)}
  </section>

  <section className="kx-wrap kx-principles">
    <KxHead tag="04 — The principles that guide us" title="Our character." italic="In every decision."><p>Buildings are the visible result of countless choices. These are the qualities we want those choices to reflect.</p></KxHead>
    <div className="kx-pgrid">{principles.map(([t,p],i)=><article key={t} data-reveal style={{'--d':`${i*.1}s`}}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
  </section>

  <section className="kx-wrap kx-team">
    <KxHead tag="05 — The people behind the process" title="Different disciplines." italic="One shared purpose." light><Link href="/careers/" className="kx-link light">Discover careers <span>→</span></Link></KxHead>
    <div className="kx-disc">{disciplines.map(([t,p,s],i)=><article key={t} data-reveal style={{'--d':`${i*.08}s`}}><span className="kx-disc-sym" aria-hidden="true">{s}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
  </section>

  <section className="kx-wrap kx-network">
    <KxHead tag="06 — Our business network" title="A wider world of" italic="expertise."><p>A network of 10+ associated businesses, including these companies spanning construction, architecture and interiors, real estate, joinery and technology.</p></KxHead>
    <HoverList items={companies.map(([n,d],i)=>({title:n,text:d,image:networkImages[i]}))}/>
    <p className="kx-note">Associated companies retain their individual legal identities and contractual responsibilities.</p>
  </section>

  <KxClosing image="dubai-burj-fountain" alt="Burj Khalifa and the Dubai Fountain at sunset" tag="The next chapter starts with you" title="Let’s build something" italic="extraordinary."/>
</Motion>}
