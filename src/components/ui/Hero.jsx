export function Hero({ title, subtitle, ctaPrimary, ctaSecondary, image }){
  return (
    <div className='hero'>
      <div className='container hero-grid' style={{padding:'48px 0'}}>
        <div>
          <h1 style={{fontSize:40,lineHeight:1.15,margin:0}}>{title}</h1>
          {subtitle && <p className='mt-2' style={{fontSize:18,color:'var(--muted)'}}>{subtitle}</p>}
          <div className='mt-3' style={{display:'flex',gap:12}}>
            {ctaPrimary}
            {ctaSecondary}
          </div>
        </div>
        {image && (
          <div style={{position:'relative',aspectRatio:'4/3',borderRadius:16,overflow:'hidden',boxShadow:'0 8px 24px rgba(0,0,0,.08)'}}>
            <img src={image} alt='' style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
        )}
      </div>
    </div>
  )}