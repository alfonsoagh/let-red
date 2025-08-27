import { Section } from '../../components/ui/Section'
import { SubnavSticky } from '../../components/ui/SubnavSticky'

export default function VisaAmericana(){
  const items = [
    { href:'#resumen', label:'Resumen' },
    { href:'#requisitos', label:'Requisitos' },
    { href:'#proceso', label:'Proceso' },
    { href:'#costos', label:'Costos' },
    { href:'#faqs', label:'FAQs' },
  ]
  return (
    <>
      <SubnavSticky items={items} />
      <Section id='resumen' title='Visa Americana – Resumen'>
        <p className='text-muted' style={{maxWidth:720}}>Qué incluye el servicio y a quién va dirigido…</p>
      </Section>
      <Section id='requisitos' title='Requisitos'>
        <ul className='text-muted' style={{maxWidth:720}}>
          <li>Pasaporte vigente</li>
          <li>Comprobante de ingresos</li>
          <li>Formulario DS-160</li>
        </ul>
      </Section>
      <Section id='proceso' title='Proceso paso a paso'>
        <ol className='text-muted' style={{maxWidth:720}}>
          <li>Evaluación inicial</li>
          <li>Llenado de formularios</li>
          <li>Agendado de citas</li>
          <li>Preparación de entrevista</li>
        </ol>
      </Section>
      <Section id='costos' title='Costos y tiempos'>
        <p className='text-muted' style={{maxWidth:720}}>Tabla comparativa y notas…</p>
      </Section>
      <Section id='faqs' title='Preguntas frecuentes'>
        <details className='card'>
          <summary style={{fontWeight:600}}>¿Cuánto tarda el proceso?</summary>
          <p className='text-muted'>Depende de la disponibilidad de citas y perfil del solicitante…</p>
        </details>
      </Section>
    </>
  )
}
