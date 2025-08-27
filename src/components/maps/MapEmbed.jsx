export function MapEmbed({ query='Grupo LET', className='' }){
const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
return (
<div className={className} style={{borderRadius:16,overflow:'hidden',border:'1px solid var(--line)'}}>
<iframe title='Mapa' src={src} style={{width:'100%',height:300,border:0}} loading='lazy' />
</div>
)}