import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '../../data';
import { KxHero, KxHead, KxClosing } from '../../kx-ui';
import { Motion } from '../../kx-client';

export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}){const {slug}=await params;return {title:articles.find(a=>a.slug===slug)?.title||'Insight'}}

export default async function Article({params}){
  const {slug}=await params;const a=articles.find(x=>x.slug===slug);if(!a)notFound();
  const more=articles.filter(x=>x.slug!==a.slug);
  return <Motion>
    <KxHero crumb={<Link href="/insights/">Insights</Link>} tag={`${a.tag} · KEA perspectives`} title={a.title} text={a.intro} image={a.image} alt="Illustrative architectural photograph" size="detail" foot="KEA perspectives"/>

    <article className="kx-wrap kx-read" id="content">
      <aside className="kx-read-side" data-reveal>
        <p className="kx-tag"><i/>In this perspective</p>
        <ol>{a.sections.map(([h],i)=><li key={h}><span>0{i+1}</span>{h}</li>)}</ol>
        <Link href="/insights/" className="kx-link">All insights <span>→</span></Link>
      </aside>
      <div className="kx-read-body">
        <p className="kx-lead" data-reveal>{a.intro}</p>
        {a.sections.map(([h,p],i)=><section key={h} data-reveal><span className="kx-read-no">0{i+1}</span><h2>{h}</h2><p>{p}</p></section>)}
      </div>
    </article>

    <section className="kx-wrap kx-more">
      <KxHead tag="Continue reading" title="More" italic="perspectives."/>
      <div className="kx-articles two">{more.map((m,i)=><Link href={`/insights/${m.slug}/`} key={m.slug} className="kx-article" data-reveal data-cursor="view" style={{'--d':`${i*.12}s`}}>
        <div><img src={`/images/${m.image}.jpg`} alt="" loading="lazy"/></div><small>{m.tag}</small><h3>{m.title}</h3>
      </Link>)}</div>
    </section>

    <KxClosing image="dubai-marina-mall" alt="Dubai Marina waterway at night"/>
  </Motion>;
}
