import { InquiryForm } from '../ui';
import { KxHero } from '../kx-ui';
import { Motion } from '../kx-client';
import { contact } from '../data';
import { pageMeta, JsonLd, breadcrumb, orgRef, abs } from '../seo';
export const metadata=pageMeta({title:'Contact KEA Building Contracting | Construction Company in Business Bay, Dubai',absoluteTitle:true,description:'Contact KEA Building Contracting, Office 802, Iris Bay Tower, Business Bay, Dubai. Call 04 326 1339 or email info@construct.ae about your project.',path:'/contact/',image:'villa-sunset-2-hd'});


export default function Contact(){return <Motion>
  <JsonLd data={[{'@type':'ContactPage',url:abs('/contact/'),name:'Contact KEA Building Contracting',about:orgRef},breadcrumb([['Home','/'],['Contact','/contact/']])]}/>
  <KxHero foot="Private consultations across Dubai" tag="Start a conversation" h1="Contact our construction team in Dubai" title="Every great project" italic="starts with a conversation." text="A private residence by the sea. A new development. A vision waiting to take shape." image="villa-sunset-2-hd" alt="Luxury villa terrace and pool overlooking the sea and Dubai skyline at sunset" size="short"/>

  <section className="kx-wrap kx-contact" id="content">
    <aside className="kx-contact-side">
      <div data-reveal>
        <p className="kx-tag"><i/>Let’s build together</p>
        <h2>Your vision. <em>Our next chapter.</em></h2>
        <p>Whether you are planning a bespoke private residence, a residential development or a commercial space, start by telling us what you have in mind.</p>
      </div>
      <div className="kx-cinfo" data-reveal style={{'--d':'.1s'}}>
        <div className="kx-cinfo-map">
          <img src="/images/dubai-downtown.jpg" alt="" loading="lazy"/>
          <span className="kx-pulse" aria-hidden="true"><i/></span>
          <div><small>Head office</small><h3>Business Bay, <em>Dubai</em></h3></div>
        </div>
        <a className="kx-cinfo-row" href={contact.mapUrl} target="_blank" rel="noreferrer">
          <span className="kx-cinfo-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></svg></span>
          <div><small>Visit us</small><b>{contact.address.map(l=><span key={l}>{l}</span>)}</b></div><i aria-hidden="true">↗</i>
        </a>
        <a className="kx-cinfo-row" href={contact.phoneHref}>
          <span className="kx-cinfo-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg></span>
          <div><small>Call us</small><b>{contact.phone}</b><em>{contact.phoneIntl}</em></div><i aria-hidden="true">↗</i>
        </a>
        <a className="kx-cinfo-row" href={`mailto:${contact.email}`}>
          <span className="kx-cinfo-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>
          <div><small>Email us</small><b>{contact.email}</b></div><i aria-hidden="true">↗</i>
        </a>
      </div>
    </aside>
    <div className="kx-form-wrap" data-reveal style={{'--d':'.15s'}}><InquiryForm/></div>
  </section>
</Motion>}
