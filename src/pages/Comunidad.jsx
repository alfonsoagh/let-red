import { Section } from '../components/ui/Section'
import { Testimonial } from '../components/ui/Testimonial'

export default function Comunidad(){
  return (
    <>
      <Section id='testimonios' title='Testimonios'>
        <div className='grid-auto'>
          {[1,2,3,4,5,6].map(i => (
            <Testimonial key={i} quote={`Comentario ${i}`} author={`Cliente ${i}`} />
          ))}
        </div>
      </Section>
      <Section id='casos' title='Casos de éxito'>
        <div className='grid-auto'>
          {[1,2,3,4].map(i => (
            <article key={i} className='card'>
              <h3 style={{margin:0}}>Caso {i}</h3>
              <p className='text-sm text-muted'>Contexto, reto, solución y resultados.</p>
              <a href='#' className='text-sm' style={{color:'var(--let-red-600)'}}>Leer más →</a>
            </article>
          ))}
        </div>
      </Section>
      <Section id='recursos' title='Recursos: podcast, webinars, blog'>
        <ul className='grid-auto' style={{listStyle:'none',padding:0,margin:0}}>
          {['Podcast','Webinar','Blog'].map(t => (
            <li key={t} className='card'>
              <h4 style={{margin:0}}>{t} destacado</h4>
              <p className='text-sm text-muted'>Descripción corta y enlace.</p>
              <a href='#' className='text-sm' style={{color:'var(--let-red-600)'}}>Ver más →</a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
