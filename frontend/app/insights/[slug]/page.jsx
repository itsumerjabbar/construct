import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '../../data';
import { KxHero, KxHead, KxClosing } from '../../kx-ui';
import { Motion } from '../../kx-client';
import { pageMeta, JsonLd, breadcrumb, faqSchema, orgRef, abs } from '../../seo';

export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const a=articles.find(x=>x.slug===slug);if(!a)return {};return pageMeta({title:a.seoTitle||a.title,absoluteTitle:!!a.keyword,description:a.description||(a.intro+' '+a.sections[0][1]).slice(0,150).replace(/\s\S*$/,'')+'…',path:`/insights/${a.slug}/`,image:a.image,type:'article'})}

export default async function Article({params}){
  const {slug}=await params;const a=articles.find(x=>x.slug===slug);if(!a)notFound();
  const more=articles.filter(x=>x.slug!==a.slug).slice(0,4);
  return <Motion>
    <JsonLd data={[{'@type':'BlogPosting',headline:a.title,description:a.intro,image:abs(`/images/${a.image}.jpg`),url:abs(`/insights/${a.slug}/`),mainEntityOfPage:abs(`/insights/${a.slug}/`),author:orgRef,publisher:orgRef,articleSection:a.tag,keywords:a.keyword,inLanguage:'en'},...(a.faqs?[faqSchema(a.faqs)]:[]),breadcrumb([['Home','/'],['Insights','/insights/'],[a.title,`/insights/${a.slug}/`]])]}/>
    <KxHero crumb={<Link href="/insights/">Insights</Link>} tag={`${a.tag} · KEA perspectives`} h1={a.keyword} title={a.title} text={a.intro} image={a.image} alt={a.title} size="detail" foot="KEA perspectives"/>

    <article className="kx-wrap kx-read" id="content">
      <aside className="kx-read-side" data-reveal>
        <p className="kx-tag"><i/>In this guide</p>
        <ol>{a.sections.map(([h],i)=><li key={h}><span>0{i+1}</span>{h}</li>)}</ol>
        <Link href="/insights/" className="kx-link">All insights <span>→</span></Link>
      </aside>
      <div className="kx-read-body">
        <p className="kx-lead" data-reveal>{a.intro}</p>
        {a.sections.map(([h,p],i)=><section key={h} data-reveal><span className="kx-read-no">0{i+1}</span><h2>{h}</h2><p>{p}</p></section>)}
      </div>
    </article>

    {a.faqs&&<section className="kx-wrap kx-faq pd-faq" id="faq">
      <div className="kx-faq-head" data-reveal>
        <p className="kx-tag"><i/>{a.keyword} — FAQ</p>
        <h2>Frequently asked <em>questions.</em></h2>
        <p>Quick answers to what people most often search about this topic.</p>
        <Link href="/contact/" className="kx-link">Ask our team <span>→</span></Link>
      </div>
      <div className="kx-accordion">{a.faqs.map(([q,ans],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span><h3>{q}</h3><i aria-hidden="true"/></summary><p>{ans}</p></details>)}</div>
    </section>}

    <section className="kx-wrap kx-more">
      <KxHead tag="Continue reading" title="More" italic="perspectives."/>
      <div className="kx-articles two">{more.map((m,i)=><Link href={`/insights/${m.slug}/`} key={m.slug} className="kx-article" data-reveal data-cursor="view" style={{'--d':`${i*.12}s`}}>
        <div><img src={`/images/${m.image}.jpg`} alt={m.title} loading="lazy"/></div><small>{m.tag}</small><h3>{m.title}</h3>
      </Link>)}</div>
    </section>

    <KxClosing image="dubai-marina-mall" alt="Dubai Marina waterway at night"/>
  </Motion>;
}
