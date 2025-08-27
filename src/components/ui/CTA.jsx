export function CTA({ title, subtitle, primary, secondary }){
  return (
    <div className='card' style={{background:'linear-gradient(90deg,var(--let-red),#BD0007)',color:'#fff'}}>
      <h3 style={{fontSize:24,margin:0}}>{title}</h3>
      {subtitle && <p style={{opacity:.9}}>{subtitle}</p>}
      <div className='mt-2' style={{display:'flex',gap:12}}>
        {primary}
        {secondary}
      </div>
    </div>
  )}