export function Section({ id, title, subtitle, children, className='' }){
  return (
    <section id={id} className={`section ${className}`}>
      <div className='container'>
        {(title || subtitle) && (
          <header className='mb-6'>
            {subtitle && <p className='text-sm' style={{textTransform:'uppercase',letterSpacing:'.08em',color:'var(--muted)'}}>{subtitle}</p>}
            {title && <h2 style={{fontSize:28,margin:'4px 0 0 0'}}>{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  )}