import { Section } from '../../components/ui/Section'
import { CardsGrid, Card } from '../../components/ui/Card'

export default function ServiciosIndex(){
  return (
    <>
      <Section title='Servicios' subtitle='Explora a detalle'>
        <CardsGrid>
          <Card title='Visa Americana' description='Requisitos, tiempos, costos, FAQs.' to='/servicios/visa-americana' />
          <Card title='Viajes Internacionales' description='Paquetes, destinos, asesoría.' to='/servicios/viajes-internacionales' />
          <Card title='Promociones' description='Temporadas y condiciones.' to='/servicios/promociones' />
          <Card title='Despedidas de Solteros' description='Experiencias y paquetes.' to='/servicios/despedidas-de-solteros' />
        </CardsGrid>
      </Section>
    </>
  )
}