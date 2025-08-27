export function Card({ title, description, to, icon, children }){
  return (
    <a href={to} className='card' style={{display:'block',textDecoration:'none',color:'inherit'}}>
      {icon && <div className='mb-2'>{icon}</div>}
      <h3 style={{margin:'4px 0'}}>{title}</h3>
      {description && <p className='text-sm text-muted'>{description}</p>}
      {children}
      <div className='mt-2 text-sm' style={{color:'var(--let-red-600)'}}>Ver más →</div>
    </a>
  )}

export function CardsGrid({ children }){ return (<div className='grid-auto'>{children}</div>) }