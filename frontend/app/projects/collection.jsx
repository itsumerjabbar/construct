'use client';
import { useState } from 'react';
import Link from 'next/link';
import { projects } from '../data';

export function CollectionCard({project:p,index=0,order=0}){return <Link href={`/projects/${p.slug}/`} className="pr-card" data-cursor="view" style={{'--n':order}}><div className="pr-card-image"><span className="pr-card-frame" aria-hidden="true"/><img src={`/images/${p.image}.jpg`} alt={p.name} loading="lazy"/><span className="pr-image-tag">{p.category}</span><span className="pr-card-arrow" aria-hidden="true">↗</span></div><div className="pr-card-caption"><div><span className="pr-label">{p.location}</span><h3>{p.name}</h3></div><span className="pr-number">{String(index+1).padStart(2,'0')}</span></div><p className="pr-card-description">{p.text}</p></Link>}

export default function Collection(){const [filter,setFilter]=useState('All projects');const visible=projects.filter(p=>filter==='All projects'||p.category===filter);return <><div className="pr-toolbar"><div className="pr-filters" role="group" aria-label="Filter projects">{['All projects','Mansions & villas','Residential','Commercial'].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}<sup>{String(f==='All projects'?projects.length:projects.filter(p=>p.category===f).length).padStart(2,'0')}</sup></button>)}</div><p className="pr-result" role="status">{String(visible.length).padStart(2,'0')} projects</p></div><div className="pr-collection-grid" key={filter}>{visible.map((p,i)=><CollectionCard key={p.slug} project={p} index={projects.indexOf(p)} order={i}/>)}</div></>}
