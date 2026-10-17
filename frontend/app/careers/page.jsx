import { InquiryForm } from '../ui';
import { KxHero, KxHead } from '../kx-ui';
import { Motion, HoverList } from '../kx-client';
import { pageMeta, JsonLd, breadcrumb } from '../seo';
export const metadata=pageMeta({title:'Construction Careers in Dubai | Jobs at KEA Building Contracting',absoluteTitle:true,description:'Construction jobs in Dubai at KEA Building Contracting: engineering, project management, planning, QA/QC and HSE roles on villa and building projects.',path:'/careers/',image:'dubai-burj-fountain-dusk-hd'});

const reasons=[
  ['Meaningful projects','Luxury mansions, signature villas, residential buildings and commercial spaces across some of Dubai’s most recognisable communities.'],
  ['Craft that matters','A culture that values precision — where the quality of a junction and the clarity of a plan are equally respected.'],
  ['One connected team','Engineering, planning, project management, QA/QC and HSE working side by side rather than in silos.'],
  ['Room to grow','The chance to broaden your experience across project types, scales and disciplines.'],
];
const disciplines=[
  {title:'Engineering',text:'Coordinating technical interfaces and translating design intent into buildable detail.',image:'villa-sunset-5'},
  {title:'Project management',text:'Connecting people, programme and responsibilities from mobilisation to handover.',image:'marina-skyline'},
  {title:'Planning',text:'Sequencing, dependencies and milestones that keep the delivery picture clear.',image:'dubai-downtown'},
  {title:'QA/QC',text:'Material reviews, inspections and close attention to workmanship at every stage.',image:'luxury-interior'},
  {title:'HSE',text:'Health, safety and environmental care built into everyday site planning.',image:'palm-villas'},
];
const steps=[['Introduce yourself','Prepare your profile with the form below.'],['Share it with us','Send it once recruitment contact details are published.'],['A conversation','We review experience against current and upcoming needs.'],['Your next chapter','Join a team building some of Dubai’s finest places.']];

export default function Careers(){return <Motion>
  <JsonLd data={[breadcrumb([['Home','/'],['Careers','/careers/']])]}/>
  <KxHero tag="Careers at KEA" h1="Construction careers in Dubai" title="Build places that matter." italic="Build a career with purpose." text="For engineers, planners and site professionals who care about the quality of their work — and the team beside them." image="dubai-burj-fountain-dusk-hd" alt="Burj Khalifa and the Dubai Fountain at dusk" size="pos-skyline" foot="Engineering · Delivery · Craft">
    <a href="#apply" className="kx-btn">Express your interest<span>→</span></a>
  </KxHero>

  <section className="kx-wrap kx-why" id="content">
    <div className="kx-why-media">
      <figure className="kx-why-main" data-reveal="clip"><img src="/images/dubai-downtown.jpg" alt="Burj Khalifa rising above Downtown Dubai" loading="lazy"/></figure>
      <figure className="kx-why-small" data-reveal="clip" style={{'--d':'.2s'}}><img src="/images/palm-atlantis.jpg" alt="Palm Jumeirah waterfront" loading="lazy"/></figure>
      <div className="kx-why-badge" data-reveal style={{'--d':'.3s'}}><b>05</b><span>Disciplines,<br/>one team</span></div>
    </div>
    <div data-reveal>
      <p className="kx-tag"><i/>Why KEA</p>
      <h2>Exceptional construction is <em>a team effort.</em></h2>
      <p className="kx-lead">We bring together engineers, project managers, planners, quality professionals and HSE specialists who share a respect for the craft of building.</p>
      <p>Our work spans private residences on the coast, residential communities and commercial spaces across Dubai. We value clear thinking, accountability and people who take pride in getting the details right.</p>
    </div>
  </section>

  <section className="kx-wrap kx-reasons">
    <div className="kx-pgrid">{reasons.map(([t,p],i)=><article key={t} data-reveal style={{'--d':`${i*.1}s`}}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
  </section>

  <section className="kx-wrap kx-team kx-careers-disc">
    <KxHead tag="Disciplines we work across" title="Find your" italic="place in the team." light><p>Hover a discipline to see where it fits into the way we build.</p></KxHead>
    <HoverList items={disciplines}/>
  </section>

  <section className="kx-wrap kx-process">
    <KxHead tag="How it works" title="Four simple" italic="steps."/>
    <ol className="kx-steps">{steps.map(([t,p],i)=><li key={t} data-reveal style={{'--d':`${i*.12}s`}}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></li>)}</ol>
  </section>

  <section className="kx-wrap kx-contact" id="apply">
    <aside className="kx-contact-side">
      <div data-reveal>
        <p className="kx-tag"><i/>Express your interest</p>
        <h2>Your next chapter <em>could begin here.</em></h2>
        <p>Introduce your experience and the contribution you would like to make. Your profile is prepared on your device so you can share it when recruitment contact details become available.</p>
      </div>
      <div className="kx-place-card" data-reveal style={{'--d':'.1s'}}>
        <img src="/images/palm-evening.jpg" alt="" loading="lazy"/>
        <div className="kx-place-card-body">
          <span className="kx-pulse" aria-hidden="true"><i/></span>
          <small>Based in</small>
          <h3>Dubai, <em>UAE</em></h3>
          <p>No specific vacancies are listed at the moment.</p>
        </div>
      </div>
    </aside>
    <div className="kx-form-wrap" data-reveal style={{'--d':'.15s'}}><InquiryForm career/></div>
  </section>
</Motion>}
