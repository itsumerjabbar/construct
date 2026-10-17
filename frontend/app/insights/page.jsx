import Link from 'next/link';
import { KxHero, KxHead, KxClosing } from '../kx-ui';
import { Motion } from '../kx-client';
import { articles } from '../data';
export const metadata={title:'News & insights'};

export default function Insights(){const [lead,...rest]=articles;return <Motion>
  <KxHero tag="News & insights" title="Ideas worth building on." italic="Perspectives worth sharing." text="Thoughts on craftsmanship, engineering and the everyday decisions that shape exceptional places across Dubai." image="dubai-burj-al-arab-beach" alt="Burj Al Arab seen from Jumeirah beach at sunset" foot="Craft · Engineering · On site"/>

  <section className="kx-wrap kx-journal" id="content">
    <KxHead tag="The journal" title="A closer" italic="perspective."><p>Editorial perspectives from the KEA team on what it takes to build well.</p></KxHead>
    <Link href={`/insights/${lead.slug}/`} className="kx-feature" data-reveal data-cursor="view">
      <div className="kx-feature-img"><img src={`/images/${lead.image}.jpg`} alt="" loading="lazy"/></div>
      <div className="kx-feature-body">
        <p className="kx-tag"><i/>{lead.tag} · Featured</p>
        <h2>{lead.title}</h2>
        <p>{lead.intro}</p>
        <span className="kx-link">Read the perspective <span>→</span></span>
      </div>
    </Link>
    <div className="kx-articles two">{rest.map((a,i)=><Link href={`/insights/${a.slug}/`} key={a.slug} className="kx-article" data-reveal data-cursor="view" style={{'--d':`${i*.12}s`}}>
      <div><img src={`/images/${a.image}.jpg`} alt="" loading="lazy"/></div>
      <small>{a.tag}</small><h3>{a.title}</h3><p>{a.intro}</p>
    </Link>)}</div>
    <p className="kx-note">Insights are editorial perspectives, not news announcements. Photography is illustrative.</p>
  </section>

  <KxClosing image="marina-sunset" alt="Dubai Marina at sunset" tag="Have a project in mind?" title="Let’s talk about" italic="your vision."/>
</Motion>}
