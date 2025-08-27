// src/pages/Nosotros.jsx
import { Section } from '../components/ui/Section'
import { SideSubnav } from '../components/ui/SideSubnav'
// import { MapEmbed } from '../components/maps/MapEmbed'

export default function Nosotros(){
  const items = [
    { href:'#historia', label:'Historia' },
    { href:'#mision', label:'Misión' },
    { href:'#vision', label:'Visión' },
    { href:'#valores', label:'Valores' },
    { href:'#equipo', label:'Equipo' },
    { href:'#oficinas', label:'Oficinas' },
  ]

  return (
    <>
      {/* En móvil verás el botón "Índice" para abrir el drawer */}
      <div className="page-with-side">
        <SideSubnav items={items} offset={96} title="Nosotros" />
        <main>
          <Section id='historia' title='Nuestra historia'>
            <p className='text-muted' style={{maxWidth:720}}>
              Somos una empresa mexicana–canadiense, especializada en turismo educativo y de placer, fundada en 2005.
            </p>
          </Section>

          <Section id='mision' title='Misión'>
            <p className='text-muted' style={{maxWidth:720}}>
              Acompañar a nuestros clientes en sus metas de viaje y estudio con transparencia, calidad y servicio.
            </p>
          </Section>

          <Section id='vision' title='Visión'>
            <p className='text-muted' style={{maxWidth:720}}>
              Ser referentes en servicios de movilidad internacional, simplificando procesos y creando experiencias memorables.
            </p>
          </Section>

          <Section id='valores' title='Valores'>
            <ul style={{maxWidth:720}}>
              <li>Transparencia</li>
              <li>Calidad</li>
              <li>Servicio</li>
              <li>Responsabilidad</li>
            </ul>
          </Section>

          <Section id='equipo' title='Equipo'>
            <div className='grid-auto'>
              {[1,2,3].map(i=> (
                <div key={i} className='card'>
                  <div style={{aspectRatio:'1',borderRadius:12,background:'#f3f4f6',marginBottom:8}}/>
                  <h3 style={{margin:0}}>Nombre {i}</h3>
                  <p className='text-sm text-muted'>Puesto</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id='oficinas' title='Oficinas'>
            <p className='text-muted' style={{marginBottom:12}}>Direcciones, horarios y mapa embebido.</p>
            {/* <MapEmbed query='Grupo LET' /> */}
          </Section>
        </main>
      </div>
    </>
  )
}
