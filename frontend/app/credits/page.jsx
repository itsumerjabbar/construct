import { KxHero } from '../kx-ui';
import { Motion } from '../kx-client';
import { commonsCredits } from '../credits-data';
export const metadata={title:'Photo credits'};

export default function Credits(){return <Motion>
  <KxHero tag="Photo credits" title="The places" italic="behind the pictures." text="Photography of Dubai and Palm Jumeirah used on this website, with thanks to the photographers who share their work under open licences." image="palm-from-space" alt="Palm Jumeirah and The World islands seen from space" size="short"/>
  <section className="kx-wrap kx-credits" id="content">
    <p className="kx-tag"><i/>Wikimedia Commons</p>
    <ul className="kx-credit-list">{commonsCredits.map(c=><li key={c.file}>
      <img src={`/images/${c.file}.jpg`} alt="" loading="lazy"/>
      <div><b>{c.title}</b><span>{c.author}</span><span><a href={c.licenseUrl} target="_blank" rel="noreferrer">{c.license}</a> · <a href={c.source} target="_blank" rel="noreferrer">Source</a>{/BY/.test(c.license)&&' · Resized and cropped for display'}</span></div>
    </li>)}</ul>
    <p className="kx-tag" style={{marginTop:80}}><i/>Unsplash</p>
    <p className="kx-note" style={{marginTop:24}}>Villa, interior, lagoon and remaining Dubai photographs are from Unsplash and used under the Unsplash License. All architectural imagery is illustrative and does not depict verified KEA projects.</p>
  </section>
</Motion>}
