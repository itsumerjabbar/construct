import Link from 'next/link';
import { notFound } from 'next/navigation';
import { narratives } from '../../editorial';
import { projects } from '../../data';
import { InquiryForm } from '../../ui';
import { Motion } from '../../kx-client';
import { sectorContent } from '../../project-content';
import { pageMeta, JsonLd, breadcrumb, faqSchema, orgRef, abs } from '../../seo';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}){
  const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)return {};
  const c=sectorContent[p.category];
  const kw={'Mansions & villas':'Villa Construction Dubai','Residential':'Residential Construction Dubai','Commercial':'Commercial Construction Dubai'}[p.category];const base=`${p.title} | ${kw}`;
  return pageMeta({title:base.length<=54?`${base} | KEA`:base,absoluteTitle:true,description:`${p.title} by KEA Building Contracting — ${c.keyword.toLowerCase()}. ${p.text}`.slice(0,150).replace(/\s\S*$/,'')+'…',path:`/projects/${p.slug}/`,image:p.image});
}

export default async function Project({params}){
  const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();
  const c=sectorContent[p.category];
  const n=narratives[p.narrative]||narratives[p.slug];
  const index=projects.indexOf(p);
  const next=projects[(index+1)%projects.length];
  const related=projects.filter(x=>x.slug!==p.slug).sort((a,b)=>Number(b.category===p.category)-Number(a.category===p.category)).slice(0,3);
  const gallery=[n.image,...related.filter(r=>r.category===p.category).map(r=>r.image)].filter(x=>x!==p.image).slice(0,2);
  const url=abs(`/projects/${p.slug}/`);

  return <Motion className="pd-page">
    <JsonLd data={[
      {'@type':'CreativeWork','@id':`${url}#project`,name:p.title,headline:`${p.title} — ${c.keyword}`,description:p.text,image:abs(`/images/${p.image}.jpg`),url,genre:c.keyword,creator:orgRef,locationCreated:{'@type':'Place',name:p.location,address:{'@type':'PostalAddress',addressLocality:'Dubai',addressCountry:'AE'}},about:{'@type':'Service',name:c.keyword,provider:orgRef,areaServed:{'@type':'City',name:'Dubai'}}},
      faqSchema(c.faqs),
      breadcrumb([['Home','/'],['Projects','/projects/'],[p.title,`/projects/${p.slug}/`]]),
    ]}/>

    {/* Hero */}
    <section className="pd-hero">
      <div className="pd-hero-media"><img src={`/images/${p.image}.jpg`} alt={`${p.title} — ${c.keyword}`} fetchPriority="high"/></div>
      <div className="pd-hero-shade"/>
      <div className="pd-hero-inner">
        <nav className="pd-crumb kx-in" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects/">Projects</Link><span>/</span><b>{p.name}</b></nav>
        <p className="kx-tag kx-in" style={{'--d':'.05s'}}><i/>{c.keyword}</p>
        <h1 className="pd-title kx-in" style={{'--d':'.15s'}}>{p.title}</h1>
        <p className="pd-hero-text kx-in" style={{'--d':'.3s'}}>{p.text}</p>
        <div className="pd-hero-cta kx-in" style={{'--d':'.45s'}}><a href="#inquiry" className="kx-btn">Discuss a similar project<span>→</span></a><a href="#overview" className="kx-btn line">Explore the project</a></div>
      </div>
      <dl className="pd-facts kx-in" style={{'--d':'.6s'}}>
        <div><dt>Project</dt><dd>{p.name}</dd></div>
        <div><dt>Location</dt><dd>{p.location}</dd></div>
        <div><dt>Sector</dt><dd>{p.category}</dd></div>
        <div><dt>Delivered by</dt><dd>KEA Building Contracting</dd></div>
        <span className="pd-count">{String(index+1).padStart(2,'0')}<small>/{String(projects.length).padStart(2,'0')}</small></span>
      </dl>
    </section>

    {/* Overview */}
    <section className="kx-wrap pd-overview" id="overview">
      <div className="pd-overview-main" data-reveal>
        <p className="kx-tag"><i/>Project overview</p>
        <h2>{p.name}: <em>{c.short.toLowerCase()} in Dubai.</em></h2>
        <p className="kx-lead">{p.text}</p>
        {c.overview.map(t=><p key={t.slice(0,20)}>{t}</p>)}
      </div>
      <aside className="pd-card" data-reveal style={{'--d':'.15s'}}>
        <span className="pd-card-k">K.</span>
        <p className="kx-tag light"><i/>At a glance</p>
        <ul>
          <li><small>Project</small><b>{p.title}</b></li>
          <li><small>Location</small><b>{p.location}</b></li>
          <li><small>Sector</small><b>{p.category}</b></li>
          <li><small>Capabilities</small><b>Engineering · Project management · Planning · QA/QC · HSE</b></li>
        </ul>
        <a href="#inquiry" className="kx-link light">Start a conversation <span>→</span></a>
      </aside>
    </section>

    {/* Scope */}
    <section className="kx-wrap pd-scope">
      <div className="kx-head" data-reveal><div><p className="kx-tag light"><i/>Scope & capabilities</p><h2>What goes into <em>{c.short.toLowerCase()}.</em></h2></div><p>The disciplines and decisions behind a project like {p.name}. The exact scope is agreed in writing for every project.</p></div>
      <ol className="pd-scope-grid">{c.scope.map(([t,d],i)=><li key={t} data-reveal style={{'--d':`${i*.07}s`}}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </section>

    {/* Design story */}
    <section className="pd-story">
      <figure className="pd-story-img" data-reveal="clip"><img src={`/images/${gallery[0]||n.image}.jpg`} alt={`Design perspective for ${p.category.toLowerCase()} construction`} loading="lazy"/></figure>
      <div className="pd-story-copy" data-reveal style={{'--d':'.15s'}}>
        <p className="kx-tag"><i/>Design intent & construction thinking</p>
        <h2>{n.heading}</h2>
        <p>{n.body}</p>
        <ul className="pd-focus">{n.focus.map(([t,d],i)=><li key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ul>
      </div>
    </section>

    {/* FAQ */}
    <section className="kx-wrap kx-faq pd-faq" id="faq">
      <div className="kx-faq-head" data-reveal>
        <p className="kx-tag"><i/>{c.short} — FAQ</p>
        <h2>Questions about <em>{c.short.toLowerCase()}.</em></h2>
        <p>Common questions from clients planning a project like {p.name} in Dubai.</p>
        <a href="#inquiry" className="kx-link">Ask about your project <span>→</span></a>
      </div>
      <div className="kx-accordion">{c.faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span><h3>{q}</h3><i aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
    </section>

    {/* Inquiry form */}
    <section className="pd-inquiry" id="inquiry">
      <div className="pd-inquiry-bg"><img src={`/images/${p.image}.jpg`} alt="" loading="lazy"/></div>
      <div className="kx-wrap pd-inquiry-grid">
        <div className="pd-inquiry-copy" data-reveal>
          <p className="kx-tag light"><i/>Planning a similar project?</p>
          <h2>Let’s talk about <em>your {p.category==='Mansions & villas'?'home':'building'}.</em></h2>
          <p>Share the location, intended use, approximate size and timeline. Prepare your project brief with the form, or call or email our team directly to discuss the next steps.</p>
          <ul className="pd-contact">
            <li><small>Call</small><a href="tel:+97143261339">04 326 1339</a></li>
            <li><small>Email</small><a href="mailto:info@construct.ae">info@construct.ae</a></li>
            <li><small>Visit</small><span>Office 802, Iris Bay Tower, Business Bay, Dubai</span></li>
          </ul>
        </div>
        <div className="pd-form" data-reveal style={{'--d':'.15s'}}><InquiryForm/></div>
      </div>
    </section>

    {/* Next + related */}
    <section className="kx-wrap pd-more">
      <Link href={`/projects/${next.slug}/`} className="pd-next" data-cursor="view">
        <img src={`/images/${next.image}.jpg`} alt={next.title} loading="lazy"/>
        <div><span className="kx-tag light"><i/>Next project</span><h2>{next.title}</h2><p>{next.category} · {next.location}</p></div>
        <b aria-hidden="true">→</b>
      </Link>
      <div className="kx-head pd-more-head" data-reveal><div><p className="kx-tag"><i/>Continue exploring</p><h2>More construction <em>projects in Dubai.</em></h2></div><Link href="/projects/" className="kx-link">View all projects <span>→</span></Link></div>
      <div className="pd-related">{related.map((r,i)=><Link key={r.slug} href={`/projects/${r.slug}/`} className="pd-rel" data-reveal data-cursor="view" style={{'--d':`${i*.1}s`}}>
        <span className="pd-rel-img"><img src={`/images/${r.image}.jpg`} alt={r.title} loading="lazy"/></span>
        <small>{r.category}</small><h3>{r.title}</h3>
      </Link>)}</div>
    </section>
  </Motion>;
}
