import Link from 'next/link';
import { KxHero, KxHead, KxClosing } from '../kx-ui';
import { Motion } from '../kx-client';
import { articles } from '../data';
import { pageMeta, JsonLd, breadcrumb, faqSchema, orgRef, abs } from '../seo';
import { insightsFaqs } from '../guides';
export const metadata=pageMeta({title:'Construction Insights & News | KEA Building Contracting Dubai',absoluteTitle:true,description:'Guides on villa construction cost, building a villa in Dubai, choosing a construction company, mansions, waterfront homes and Dubai construction trends.',path:'/insights/',image:'dubai-burj-al-arab-beach-hd'});

export default function Insights(){const [lead,...rest]=articles;return <Motion>
  <JsonLd data={[{'@type':'Blog',url:abs('/insights/'),name:'KEA Building Contracting insights',publisher:orgRef,blogPost:articles.map(a=>({'@type':'BlogPosting',headline:a.title,url:abs(`/insights/${a.slug}/`)}))},faqSchema(insightsFaqs),breadcrumb([['Home','/'],['Insights','/insights/']])]}/>
  <KxHero tag="News & insights" h1="Construction insights from Dubai" title="Ideas worth building on." italic="Perspectives worth sharing." text="Thoughts on craftsmanship, engineering and the everyday decisions that shape exceptional places across Dubai." image="dubai-burj-al-arab-beach-hd" alt="Burj Al Arab seen from Jumeirah beach at sunset" foot="Craft · Engineering · On site"/>

  <section className="kx-wrap kx-journal" id="content">
    <KxHead tag="Guides & insights" title="Building in Dubai," italic="explained."><p>Practical guides on villa and mansion construction, choosing a contractor, costs, approvals and the trends shaping construction in Dubai.</p></KxHead>
    <Link href={`/insights/${lead.slug}/`} className="kx-feature" data-reveal data-cursor="view">
      <div className="kx-feature-img"><img src={`/images/${lead.image}.jpg`} alt={lead.title} loading="lazy"/></div>
      <div className="kx-feature-body">
        <p className="kx-tag"><i/>{lead.tag} · Featured</p>
        <h2>{lead.title}</h2>
        <p>{lead.intro}</p>
        <span className="kx-link">Read the guide <span>→</span></span>
      </div>
    </Link>
    <div className="kx-articles two">{rest.map((a,i)=><Link href={`/insights/${a.slug}/`} key={a.slug} className="kx-article" data-reveal data-cursor="view" style={{'--d':`${i*.12}s`}}>
      <div><img src={`/images/${a.image}.jpg`} alt={a.title} loading="lazy"/></div>
      <small>{a.tag}</small><h3>{a.title}</h3><p>{a.intro}</p>
    </Link>)}</div>
    <p className="kx-note">Guides are general information, not professional or legal advice. Requirements vary by project and location. Photography is illustrative.</p>
  </section>

  <section className="kx-wrap kx-faq pd-faq" id="faq">
    <div className="kx-faq-head" data-reveal>
      <p className="kx-tag"><i/>Building in Dubai — FAQ</p>
      <h2>Top questions about <em>villas & construction.</em></h2>
      <p>The ten questions people search most when planning a villa, mansion or building project in Dubai.</p>
      <a href="#content" className="kx-link">Browse the guides <span>→</span></a>
    </div>
    <div className="kx-accordion">{insightsFaqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span><h3>{q}</h3><i aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
  </section>

  <KxClosing image="dubai-burj-al-arab-beach" alt="Burj Al Arab seen from Jumeirah beach at sunset" tag="Have a project in mind?" title="Let’s talk about" italic="your vision."/>
</Motion>}
