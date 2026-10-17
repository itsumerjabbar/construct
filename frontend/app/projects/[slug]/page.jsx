import Link from 'next/link';
import { notFound } from 'next/navigation';
import { narratives } from '../../editorial';
import { projects } from '../../data';
import { KxClosing } from '../../kx-ui';
import { Motion } from '../../kx-client';
import { CollectionCard } from '../collection';
import { pageMeta, JsonLd, breadcrumb, orgRef, abs } from '../../seo';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
const kind={'Mansions & villas':'Luxury villa construction','Residential':'Residential building construction','Commercial':'Commercial building construction'};
export async function generateMetadata({params}){const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)return {};return pageMeta({title:`${p.title} | ${kind[p.category]} Dubai | KEA`,absoluteTitle:true,description:`${p.title} by KEA Building Contracting, ${p.location}. ${p.text}`.slice(0,158).replace(/\s\S*$/,'')+'…',path:`/projects/${p.slug}/`,image:p.image})}

export default async function Project({params}){
  const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();
  const n=narratives[p.narrative]||narratives[p.slug];const index=projects.indexOf(p);
  const related=projects.filter(x=>x.slug!==p.slug).sort((a,b)=>Number(b.category===p.category)-Number(a.category===p.category)).slice(0,2);
  const next=projects[(index+1)%projects.length];
  return <Motion className="pr-page pr-detail-page">
    <JsonLd data={[{'@type':'CreativeWork',name:p.title,description:p.text,image:abs(`/images/${p.image}.jpg`),url:abs(`/projects/${p.slug}/`),genre:kind[p.category],creator:orgRef,locationCreated:{'@type':'Place',name:p.location}},breadcrumb([['Home','/'],['Projects','/projects/'],[p.title,`/projects/${p.slug}/`]])]}/>
    <section className="pr-detail-header"><nav aria-label="Breadcrumb" className="pr-breadcrumb"><Link href="/projects/">← All projects</Link><span>{String(index+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></nav><div className="pr-detail-title"><div><p className="kx-tag"><i/>{p.category}</p><h1>{p.title}</h1></div><span className="pr-label">{p.location}</span></div></section>
    <figure className="pr-detail-hero"><img src={`/images/${p.image}.jpg`} alt={p.name} fetchPriority="high"/><figcaption><span>{p.name}</span><a href="#project-story">THE PROJECT STORY <span>↓</span></a></figcaption></figure>
    <section className="pr-section pr-story" id="project-story"><aside className="pr-facts"><span className="pr-label">PROJECT AT A GLANCE</span><dl><div><dt>Project</dt><dd>{p.name}</dd></div><div><dt>Location</dt><dd>{p.location}</dd></div><div><dt>Sector</dt><dd>{p.category}</dd></div><div><dt>Our capabilities</dt><dd>Engineering · Project management · Planning · QA/QC · HSE</dd></div></dl><Link href="/contact/" className="pr-text-link">Make an inquiry <span>↗</span></Link></aside><div className="pr-story-copy" data-reveal><p className="kx-tag"><i/>The project perspective</p><h2>{p.name}.<br/><em>Considered in every detail.</em></h2><p className="pr-lead">{p.text}</p><p>Our delivery capabilities bring together engineering, project management, planning, QA/QC and HSE to support a considered construction process.</p></div></section>
    <section className="pr-design-story"><div className="pr-design-photo" data-reveal="clip"><img src={`/images/${n.image}.jpg`} alt="Illustrative architectural context" loading="lazy"/><span>DESIGN & MATERIAL PERSPECTIVE</span></div><div className="pr-design-copy" data-reveal><p className="kx-tag light"><i/>The thinking behind the work</p><h2>{n.heading}</h2><p>{n.body}</p><span className="pr-design-rule"/><p className="pr-design-note">The construction approach is shaped around the specific brief, scope and requirements of each project.</p></div></section>
    <section className="pr-section pr-priorities"><div className="pr-section-heading" data-reveal><div><p className="kx-tag"><i/>Where attention makes a difference</p><h2>Built around<br/><em>what matters.</em></h2></div><p>Good construction connects the wider vision with the individual decisions that define the result.</p></div><div className="pr-priority-grid">{n.focus.map(([title,text],i)=><article key={title} data-reveal style={{'--d':`${i*.1}s`}}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="pr-next-project"><Link href={`/projects/${next.slug}/`}><div><span className="pr-label">NEXT IN THE COLLECTION</span><h2>{next.name}</h2><p>{next.category} · {next.location}</p></div><img src={`/images/${next.image}.jpg`} alt={next.name} loading="lazy"/><span className="pr-next-arrow">↗</span></Link></section>
    <section className="pr-section pr-related"><div className="pr-section-heading"><div><p className="kx-tag"><i/>Continue exploring</p><h2>More to <em>discover.</em></h2></div><Link href="/projects/#portfolio" className="pr-text-link">View the collection <span>↗</span></Link></div><div className="pr-collection-grid">{related.map(r=><CollectionCard key={r.slug} project={r} index={projects.indexOf(r)}/>)}</div></section>
    <KxClosing image="palm-jumeirah-fronds-dusk" alt="Palm Jumeirah villas at sunset"/>
  </Motion>;
}
