import { InquiryForm } from '../ui';
import { KxHero } from '../kx-ui';
import { Motion } from '../kx-client';
export const metadata={title:'Contact us'};

const include=[['Location & intended use','Community or area in Dubai, and what the space is for.'],['Size & stage','Approximate built-up area and how far the design has progressed.'],['Scope & timeline','The work you would like to discuss and when you hope to begin.']];

export default function Contact(){return <Motion>
  <KxHero foot="Private consultations across Dubai" tag="Start a conversation" title="Every great project" italic="starts with a conversation." text="A private residence by the sea. A new development. A vision waiting to take shape." image="skyline-pool" alt="Pool deck framed by olive trees with the Dubai skyline beyond" size="short"/>

  <section className="kx-wrap kx-contact" id="content">
    <aside className="kx-contact-side">
      <div data-reveal>
        <p className="kx-tag"><i/>Let’s build together</p>
        <h2>Your vision. <em>Our next chapter.</em></h2>
        <p>Whether you are planning a bespoke private residence, a residential development or a commercial space, start by telling us what you have in mind.</p>
      </div>
      <div className="kx-place-card" data-reveal style={{'--d':'.1s'}}>
        <img src="/images/palm-from-space.jpg" alt="" loading="lazy"/>
        <div className="kx-caustics" aria-hidden="true"/>
        <div className="kx-place-card-body">
          <span className="kx-pulse" aria-hidden="true"><i/></span>
          <small>Our home</small>
          <h3>Dubai, <em>UAE</em></h3>
          <p>Serving projects across Dubai.</p>
          <span className="kx-coords">25.2048° N · 55.2708° E</span>
        </div>
      </div>
      <div className="kx-include" data-reveal style={{'--d':'.2s'}}>
        <p className="kx-tag"><i/>Helpful to include</p>
        <ol>{include.map(([t,d],i)=><li key={t}><span>0{i+1}</span><div><b>{t}</b><small>{d}</small></div></li>)}</ol>
      </div>
    </aside>
    <div className="kx-form-wrap" data-reveal style={{'--d':'.15s'}}><InquiryForm/></div>
  </section>
</Motion>}
