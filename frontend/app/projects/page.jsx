import Link from 'next/link';
import { KxHero, KxHead, KxClosing } from '../kx-ui';
import { Motion, HoverList, ProjectGallery } from '../kx-client';
export const metadata={title:'Our projects'};

const locations=[
  {title:'MBR City',text:'Bespoke private residences with an emphasis on architectural intent, proportion and the individual brief.',href:'/projects/mbr-city/',image:'mansion-infinity'},
  {title:'Palm Jumeirah',text:'Signature waterfront living, where interior spaces open towards the sea.',href:'/projects/palm-jumeirah/',image:'palm-atlantis'},
  {title:'DAMAC Lagoons',text:'Villa construction within a lagoon community, balancing individual homes with a consistent approach to delivery.',href:'/projects/damac-lagoons/',image:'lagoon-villas'},
  {title:'Dubai South',text:'Residential buildings that bring together shared spaces, private living and coordination at building scale.',href:'/projects/dubai-south/',image:'marina-skyline'},
  {title:'Gutti developments',text:'A residential focus with attention to civil works, technical interfaces and the finishing sequence.',href:'/projects/gutti/',image:'villa-al-barari'},
];
const questions=[
  ['What should I include in a project inquiry?','Share the location, intended use, approximate built-up area if known, design stage and the scope you would like to discuss. A proposed timeline and any important site or access constraints also help frame the conversation.'],
  ['Can I explore a project before every detail is resolved?','You can prepare an inquiry at an early stage. Explain which decisions have been made and which remain open, so the next discussion can focus on the information and coordination your project needs.'],
  ['Which construction sectors does KEA focus on?','The portfolio covers luxury mansions and signature villas, residential buildings, and large corporate and office projects across Dubai. Engineering, project management, planning, QA/QC and HSE support these areas of work.'],
  ['Are the photographs of completed KEA projects?','The current website uses illustrative architectural and Dubai photography to communicate the design direction. Approved project photographs and verified delivery details will be added when available.'],
  ['How is a project scope confirmed?','A website inquiry is a starting point. Scope, responsibilities, programme and commercial terms need to be discussed and set out in a separate written project agreement with the relevant legal entity.'],
];

export default function Projects(){return <Motion>
  <KxHero foot="Palm Jumeirah · MBR City · DAMAC Lagoons" tag="Our project landscape" title="Places with purpose." italic="Work with distinction." text="Explore our construction focus across Dubai’s extraordinary homes, residential communities and commercial spaces." image="tower-night" alt="Contemporary residential tower lit at dusk with the Dubai skyline behind">
    <nav className="kx-pills" aria-label="Explore the portfolio"><a href="#portfolio"><span>01</span>The collection</a><a href="#locations"><span>02</span>Locations & contexts</a><a href="#project-questions"><span>03</span>Planning your project</a></nav>
  </KxHero>

  <section className="kx-wrap kx-statement" id="content">
    <p className="kx-tag" data-reveal><i/>A broader view of our work</p>
    <p className="kx-big" data-reveal>Our project landscape connects the personal scale of a private home <em>with the wider ambition of a growing city.</em></p>
  </section>

  <section className="kx-wrap kx-portfolio" id="portfolio">
    <KxHead tag="The collection" title="Explore the" italic="possibilities."><p>Filter by sector, then discover the priorities that shape each project.</p></KxHead>
    <ProjectGallery/>
    <p className="kx-note">Imagery is illustrative. These pages introduce the supplied project locations and work categories; they do not represent verified completion records.</p>
  </section>

  <section className="kx-wrap kx-locations" id="locations">
    <KxHead tag="A sense of place" title="Distinct addresses." italic="Individual perspectives." light><p>The setting informs the conversation. Hover a location to see its character.</p></KxHead>
    <HoverList className="location-rows" items={locations}/>
  </section>

  <section className="kx-wrap kx-faq" id="project-questions">
    <div className="kx-faq-head" data-reveal>
      <p className="kx-tag"><i/>Before we begin</p>
      <h2>A little clarity. <em>A stronger start.</em></h2>
      <p>A first conversation does not need a finished brief. It needs an understanding of your ambition and where the project stands today.</p>
      <Link href="/contact/" className="kx-link">Prepare your inquiry <span>→</span></Link>
    </div>
    <div className="kx-accordion">{questions.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span><h3>{q}</h3><i aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
  </section>

  <KxClosing image="marina-skyline" alt="Dubai Marina towers rising above the sea"/>
</Motion>}
