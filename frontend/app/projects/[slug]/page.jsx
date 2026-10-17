import Link from 'next/link';
import { notFound } from 'next/navigation';
import { narratives } from '../../editorial';
import { projects } from '../../data';
import { KxHero, KxHead, KxClosing, KxProjectCard } from '../../kx-ui';
import { Motion } from '../../kx-client';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params;return {title:projects.find(p=>p.slug===slug)?.title||'Project'}}

const moods={
  'Mansions & villas':['luxury-interior','villa-sunset-4','master-suite'],
  'Residential':['project-residential-building','project-gutti','interior'],
  'Commercial':['project-mosque','project-como','dubai-downtown'],
};

export default async function Project({params}){
  const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();
  const n=narratives[p.narrative]||narratives[p.slug];const index=projects.indexOf(p);
  const related=projects.filter(x=>x.slug!==p.slug).sort((a,b)=>Number(b.category===p.category)-Number(a.category===p.category)).slice(0,2);
  return <Motion>
    <KxHero crumb={<Link href="/projects/">Projects</Link>} tag={`${p.category} · ${p.location}`} title={p.title} italic={{'Mansions & villas':'A private residence.','Residential':'A place to call home.','Commercial':'Built for purpose.'}[p.category]} image={p.image} alt="Illustrative architectural reference" size="detail"/>

    <section className="kx-wrap kx-detail" id="content">
      <div className="kx-facts" data-reveal>
        <div><small>Location</small><b>{p.location}</b></div>
        <div><small>Sector</small><b>{p.category}</b></div>
        <div><small>Project</small><b>0{index+1} / 0{projects.length}</b></div>
        <div><small>Disciplines</small><b>Engineering · PM · QA/QC · HSE</b></div>
      </div>
      <div className="kx-detail-grid">
        <div data-reveal><p className="kx-tag"><i/>The project perspective</p><h2>{p.name}</h2></div>
        <div className="kx-prose" data-reveal style={{'--d':'.15s'}}>
          <p className="kx-lead">{p.text}</p>
          <p>Our delivery capabilities bring together engineering, project management, planning, QA/QC and HSE to support a considered construction process.</p>
          <Link href="/contact/" className="kx-link">Talk to us about a similar project <span>→</span></Link>
        </div>
      </div>
    </section>

    <section className="kx-narrative">
      <figure className="kx-narrative-img" data-reveal="clip"><img src={`/images/${n.image}.jpg`} alt="Illustrative architectural detail" loading="lazy"/></figure>
      <div className="kx-narrative-copy" data-reveal style={{'--d':'.15s'}}>
        <p className="kx-tag light"><i/>Design intent & construction thinking</p>
        <h2>{n.heading}</h2>
        <p>{n.body}</p>
      </div>
    </section>

    <section className="kx-wrap kx-focus">
      <KxHead tag="Where attention makes a difference" title="A closer look at" italic="the priorities."/>
      <div className="focus-grid kx-pgrid three">{n.focus.map(([t,d],i)=><article key={t} data-reveal style={{'--d':`${i*.12}s`}}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="kx-mood" aria-label="Mood and materials">{moods[p.category].map((img,i)=><figure key={img} data-reveal="clip" style={{'--d':`${i*.12}s`}}><img src={`/images/${img}.jpg`} alt="" loading="lazy"/></figure>)}</section>

    <section className="kx-wrap related-work">
      <KxHead tag="Continue exploring" title="Another place." italic="A different perspective."><Link href="/projects/" className="kx-link">View the collection <span>→</span></Link></KxHead>
      <div className="kx-gallery two">{related.map(r=><KxProjectCard key={r.slug} project={r} index={projects.indexOf(r)}/>)}</div>
      <p className="kx-note">Imagery is illustrative. Detailed project photography, scope and delivery information will be added when approved.</p>
    </section>

    <KxClosing image="palm-jumeirah-fronds-dusk" alt="Palm Jumeirah villas at sunset"/>
  </Motion>;
}
