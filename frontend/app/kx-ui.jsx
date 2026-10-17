import Link from 'next/link';

const wave = (y, a) => `M0 ${y} Q 360 ${y - a} 720 ${y} T 1440 ${y} T 2160 ${y} T 2880 ${y} V 160 H 0 Z`;

/* Three drifting wave layers; the last one is solid so it melts into the next section */
export function Waves({ className = '' }) {
  return <div className={`kx-waves ${className}`} aria-hidden="true">
    <svg viewBox="0 0 2880 160" preserveAspectRatio="none" className="w1"><path d={wave(70, 46)}/></svg>
    <svg viewBox="0 0 2880 160" preserveAspectRatio="none" className="w2"><path d={wave(92, -34)}/></svg>
    <svg viewBox="0 0 2880 160" preserveAspectRatio="none" className="w3"><path d={wave(112, 22)}/></svg>
  </div>;
}

export function KxHero({ tag, h1, title, italic, text, image, alt = '', crumb, size = '', foot = 'Luxury construction · Dubai', children }) {
  const Title = h1 ? 'p' : 'h1';
  return <section className={`kx-ph ${size}`}>
    <div className="kx-ph-top">
      <div className="kx-ph-head">
        {crumb && <nav className="kx-crumb kx-in" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span>{crumb}</nav>}
        {h1 ? <h1 className="kx-tag kx-h1 kx-in"><i/>{h1}</h1> : <p className="kx-tag kx-in"><i/>{tag}</p>}
        <Title className="kx-ph-title"><span className="kx-mask"><span style={{ '--d': '.1s' }}>{title}</span></span>{italic && <span className="kx-mask"><em style={{ '--d': '.25s' }}>{italic}</em></span>}</Title>
      </div>
      <div className="kx-ph-side kx-in" style={{ '--d': '.4s' }}>
        {text && <p className="kx-ph-text">{text}</p>}
        {children}
      </div>
    </div>
    <div className="kx-ph-frame kx-in" style={{ '--d': '.3s' }} data-shift>
      <img src={`/images/${image}.jpg`} alt={alt} fetchPriority="high"/>
      <span className="kx-ph-chip"><i/>Dubai · United Arab Emirates</span>
      <span className="kx-ph-chip right">{foot}</span>
      <a href="#content" className="kx-ph-scroll" aria-label="Scroll to content">↓</a>
    </div>
  </section>;
}

export function KxHead({ tag, title, italic, light = false, children }) {
  return <div className="kx-head" data-reveal>
    <div><p className={`kx-tag ${light ? 'light' : ''}`}><i/>{tag}</p><h2>{title} {italic && <em>{italic}</em>}</h2></div>
    {children}
  </div>;
}

export function KxClosing({ image = 'dubai-night', alt = '', tag = 'Your vision. Our next chapter.', title = 'Let’s build your', italic = 'landmark.', href = '/contact/', label = <>Start the<br/>conversation</> }) {
  return <section className="kx-closing" data-shift>
    <img src={`/images/${image}.jpg`} alt={alt} loading="lazy"/>
    <div className="kx-closing-inner" data-reveal>
      <p className="kx-tag light"><i/>{tag}</p>
      <h2>{title} <em>{italic}</em></h2>
      <Link href={href} className="kx-orb" data-cursor="view"><span>{label}</span><b>→</b></Link>
    </div>
  </section>;
}

export function KxProjectCard({ project: p, index = 0 }) {
  return <Link href={`/projects/${p.slug}/`} className="project-card kx-pcard" data-cursor="view" style={{ '--n': index }}>
    <img src={`/images/${p.image}.jpg`} alt={`${p.category} architectural inspiration`} loading="lazy"/>
    <span className="kx-pcard-cat">{p.category}</span>
    <span className="kx-pcard-no">0{index + 1}</span>
    <div className="kx-pcard-body"><small>{p.location}</small><h3>{p.name}</h3><span className="kx-pcard-go">View project <b>→</b></span></div>
  </Link>;
}
