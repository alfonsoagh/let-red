export function Metrics({ items=[] }){
  return (
    <div className='grid-auto'>
      {items.map(m=> (
        <div key={m.label} className='card' style={{textAlign:'center'}}>
          <div style={{fontSize:32,fontWeight:800}}>{m.value}</div>
          <div className='mt-1 text-sm text-muted'>{m.label}</div>
        </div>
      ))}
    </div>
  )}