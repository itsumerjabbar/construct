'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { KxProjectCard } from './kx-ui';
import { projects } from './data';

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Home hero: destinations switch the backdrop with a circular wipe */
const destinations = [
  {image:'dubai-skyline',label:'Downtown',line:'Skyline living',alt:'Dubai skyline with Burj Khalifa at sunset'},
  {image:'palm-evening',label:'Palm Jumeirah',line:'Island living',alt:'Palm Jumeirah and Dubai Marina from above at dusk'},
  {image:'burj-al-arab',label:'Jumeirah Coast',line:'Life by the sea',alt:'Aerial view of Burj Al Arab surrounded by the Arabian Gulf'},
  {image:'marina-skyline',label:'Dubai Marina',line:'City by the water',alt:'Dubai Marina towers rising above the sea',bright:true},
];
const HERO_MS = 6500;

export function HeroDestinations({children}){
  const [active,setActive]=useState(0);const [prev,setPrev]=useState(-1);const [hold,setHold]=useState(false);
  function go(i){if(i===active)return;setPrev(active);setActive(i)}
  useEffect(()=>{if(hold||reduced())return;const t=setTimeout(()=>go((active+1)%destinations.length),HERO_MS);return()=>clearTimeout(t)});
  const d=destinations[active];
  return <section className={`kx-hero ${d.bright?'is-bright':''}`} aria-label="Luxury construction in Dubai">
    <div className="kx-hero-media">{destinations.map((x,i)=><img key={x.image} className={i===active?'is-active':i===prev?'is-prev':''} src={`/images/${x.image}.jpg`} alt={i===active?x.alt:''} aria-hidden={i!==active} fetchPriority={i===0?'high':'auto'} loading={i===0?'eager':'lazy'}/>)}</div>
    <div className="kx-hero-shade"/>
    <div className="kx-hero-inner">
      <p className="kx-tag kx-in" style={{'--d':'0s'}}><i/>Luxury villas · Mansions · Dubai</p>
      <h1 className="kx-hero-title"><span className="kx-mask"><span style={{'--d':'.1s'}}>Where the city</span></span><span className="kx-mask"><em style={{'--d':'.25s'}}>meets the sea.</em></span></h1>
      <p className="kx-hero-lead kx-in" style={{'--d':'.45s'}}>Sea-view villas, waterfront residences and private mansions — engineered with precision and finished with the quiet confidence true luxury demands.</p>
      <div className="kx-hero-cta kx-in" style={{'--d':'.6s'}}><Link href="/projects/" className="kx-btn" data-cursor="view">Explore residences<span>→</span></Link><Link href="/contact/" className="kx-btn line">Private consultation</Link></div>
    </div>
    <div className="kx-hero-foot kx-in" style={{'--d':'.85s'}}>
      <span>Dubai · United Arab Emirates</span>
      <span className="kx-hero-foot-mid">Mansions <i/> Signature villas <i/> Developments</span>
      <a href="#introduction">Scroll to explore <b aria-hidden="true"/></a>
    </div>
    <nav className="kx-dest kx-in" style={{'--d':'.7s'}} aria-label="Choose a Dubai destination" onMouseLeave={()=>setHold(false)}>
      <p className="kx-dest-title">Explore Dubai</p>
      {destinations.map((x,i)=><button key={x.image} className={i===active?'is-active':''} aria-pressed={i===active} onMouseEnter={()=>{setHold(true);go(i)}} onFocus={()=>go(i)} onClick={()=>go(i)} style={{'--ms':`${HERO_MS}ms`}}>
        <span>0{i+1}</span><b>{x.label}</b><small>{x.line}</small><i className={hold?'hold':''}/>
      </button>)}
    </nav>
    <p className="kx-sr" aria-live="polite">{d.label} — {d.line}</p>
    {children}
  </section>;
}

/* Arched window that opens to a full-bleed view as you scroll, with photos that drift away */
export function ArchReveal({image,alt,intro,floats=[],caption}){
  const wrap=useRef(null);
  useEffect(()=>{
    const el=wrap.current;let frame=0;
    function update(){frame=0;const r=el.getBoundingClientRect();const span=r.height-innerHeight;const p=span>0?Math.min(1,Math.max(0,-r.top/span)):1;el.style.setProperty('--p',p.toFixed(4))}
    function schedule(){if(!frame)frame=requestAnimationFrame(update)}
    const on=!reduced();el.classList.toggle('is-live',on);if(on)update();
    addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
    return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule)};
  },[]);
  return <section className="kx-arch" ref={wrap}>
    <div className="kx-arch-stage">
      {intro&&<div className="kx-arch-intro">{intro}</div>}
      {floats.map((f,i)=><figure key={f.image} className={`kx-arch-float f${i}`} aria-hidden="true"><img src={`/images/${f.image}.jpg`} alt="" loading="lazy"/><figcaption>{f.label}</figcaption></figure>)}
      <figure className="kx-arch-window"><img src={`/images/${image}.jpg`} alt={alt} loading="lazy"/><figcaption>{caption}</figcaption></figure>
    </div>
  </section>;
}

/* Cards that stack and recede as the next one arrives */
export function StackCards({items}){
  const list=useRef(null);
  useEffect(()=>{
    const cards=[...list.current.children];let frame=0;
    function update(){frame=0;if(reduced())return;
      cards.forEach((c,i)=>{const next=cards[i+1];if(!next){c.style.setProperty('--k','0');return}const a=c.getBoundingClientRect(),b=next.getBoundingClientRect();c.style.setProperty('--k',Math.min(1,Math.max(0,1-(b.top-a.top)/a.height)).toFixed(3))})}
    function schedule(){if(!frame)frame=requestAnimationFrame(update)}
    update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
    return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule)};
  },[]);
  return <div className="kx-stack" ref={list}>{items.map((r,i)=><article className="kx-card" key={r.image+i} style={{'--i':i}}>
    <Link href={r.href} className="kx-card-media" data-cursor="view"><img src={`/images/${r.image}.jpg`} alt={r.alt} loading="lazy"/></Link>
    <div className="kx-card-body">
      <span className="kx-card-no">0{i+1}<small>/0{items.length}</small></span>
      <p className="kx-tag"><i/>{r.place}</p>
      <h3>{r.title}</h3>
      <p>{r.text}</p>
      <ul>{r.tags.map(t=><li key={t}>{t}</li>)}</ul>
      <Link href={r.href} className="kx-link">Discover <span>→</span></Link>
    </div>
  </article>)}</div>;
}

/* Rows with an image that follows the pointer; rows become links when given an href */
export function HoverList({items,className=''}){
  const box=useRef(null);const [on,setOn]=useState(-1);
  function move(e){const r=box.current.getBoundingClientRect();box.current.style.setProperty('--mx',`${e.clientX-r.left}px`);box.current.style.setProperty('--my',`${e.clientY-r.top}px`)}
  return <div className={`kx-hlist ${className} ${on>=0?'has-on':''}`} ref={box} onMouseMove={move} onMouseLeave={()=>setOn(-1)}>
    {items.map((it,i)=>{const inner=<><span className="kx-hlist-no">0{i+1}</span><h3>{it.title}</h3><p>{it.text}</p>{it.href&&<b className="kx-hlist-go">→</b>}</>;
      const props={className:`kx-hlist-row ${on===i?'is-on':''}`,onMouseEnter:()=>setOn(i)};
      return it.href?<Link key={it.title} href={it.href} {...props}>{inner}</Link>:<div key={it.title} {...props}>{inner}</div>})}
    <div className="kx-follow" aria-hidden="true">{items.map((it,i)=><img key={it.title} src={`/images/${it.image}.jpg`} alt="" loading="lazy" className={on===i?'is-on':''}/>)}</div>
  </div>;
}

/* Project collection with category filters */
export function ProjectGallery(){
  const [filter,setFilter]=useState('All projects');
  const list=projects.filter(p=>filter==='All projects'||p.category===filter);
  return <>
    <div className="kx-filters" aria-label="Filter projects">{['All projects','Mansions & villas','Residential','Commercial'].map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={f===filter} className={f===filter?'is-on':''}>{f}<span>{f==='All projects'?'06':`0${projects.filter(p=>p.category===f).length}`}</span></button>)}</div>
    <div className="kx-gallery" aria-live="polite" key={filter}>{list.map(p=><KxProjectCard key={p.slug} project={p} index={projects.indexOf(p)}/>)}</div>
  </>;
}

/* Soft gold cursor ring for precise pointers */
function Cursor(){
  const ring=useRef(null);
  useEffect(()=>{
    if(!matchMedia('(hover: hover) and (pointer: fine)').matches||reduced())return;
    const el=ring.current;let x=-100,y=-100,tx=-100,ty=-100,frame=0;
    el.classList.add('is-ready');
    function loop(){x+=(tx-x)*.18;y+=(ty-y)*.18;el.style.transform=`translate3d(${x}px,${y}px,0)`;frame=requestAnimationFrame(loop)}
    function move(e){tx=e.clientX;ty=e.clientY;const t=e.target.closest?.('a,button,summary,input,select,textarea,[data-cursor]');el.classList.toggle('is-link',!!t);el.classList.toggle('is-view',!!e.target.closest?.('[data-cursor="view"]'))}
    function leave(){tx=ty=-100}
    addEventListener('mousemove',move);document.addEventListener('mouseleave',leave);loop();
    return()=>{cancelAnimationFrame(frame);removeEventListener('mousemove',move);document.removeEventListener('mouseleave',leave)};
  },[]);
  return <div className="kx-cursor" ref={ring} aria-hidden="true"><span>View</span></div>;
}

/* SVG filter that makes water-like surfaces gently ripple */
function RippleDefs(){
  return <svg className="kx-defs" width="0" height="0" aria-hidden="true" focusable="false">
    <filter id="kx-ripple" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.006 0.018" numOctaves="2" seed="4" result="noise">
        <animate attributeName="baseFrequency" dur="16s" values="0.006 0.018;0.009 0.026;0.006 0.018" repeatCount="indefinite"/>
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>;
}

/* Page wrapper: scroll reveals, counters, scroll-linked shifts, cursor and water filter */
export function Motion({children,className=''}){
  const root=useRef(null);
  useEffect(()=>{
    const el=root.current;const media=matchMedia('(prefers-reduced-motion: reduce)');
    let io,counter,frame=0;
    const reveals=el.querySelectorAll('[data-reveal]');const counts=el.querySelectorAll('[data-count]');const shifts=el.querySelectorAll('[data-shift]');
    function update(){frame=0;const vh=innerHeight;shifts.forEach(s=>{const r=s.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)return;s.style.setProperty('--s',(((r.top+r.height/2)-vh/2)/vh).toFixed(4))})}
    function schedule(){if(!frame)frame=requestAnimationFrame(update)}
    function countUp(n){const target=+n.dataset.count;const t0=performance.now();(function step(t){const k=Math.min(1,(t-t0)/1800);n.textContent=String(Math.round(target*(1-Math.pow(1-k,4)))).padStart(2,'0');if(k<1)requestAnimationFrame(step)})(t0)}
    function teardown(){io?.disconnect();counter?.disconnect();removeEventListener('scroll',schedule);removeEventListener('resize',schedule);cancelAnimationFrame(frame);el.classList.remove('kx-motion');shifts.forEach(s=>s.style.removeProperty('--s'));counts.forEach(n=>{n.textContent=String(n.dataset.count).padStart(2,'0')})}
    function setup(){teardown();if(media.matches)return;el.classList.add('kx-motion');
      io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});reveals.forEach(r=>io.observe(r));
      counter=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){countUp(e.target);counter.unobserve(e.target)}}),{threshold:.7});counts.forEach(n=>{n.textContent='00';counter.observe(n)});
      addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);update()}
    setup();media.addEventListener('change',setup);
    return()=>{teardown();media.removeEventListener('change',setup)};
  },[]);
  return <div ref={root} className={`kx ${className}`}><RippleDefs/><Cursor/>{children}</div>;
}
