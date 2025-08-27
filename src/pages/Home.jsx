// src/pages/Home.jsx
import { Section } from '../components/ui/Section'
import { Metrics } from '../components/ui/Metrics'
import { CardsGrid, Card } from '../components/ui/Card'
import { Testimonial } from '../components/ui/Testimonial'
import { CTA } from '../components/ui/CTA'
import { CarouselHero } from '../components/ui/CarouselHero'

const metrics = [
  { label: 'Clientes satisfechos', value: '+15,347' },
  { label: 'Años de experiencia', value: '19+' },
  { label: 'Trámites exitosos', value: '+8,500' },
  { label: 'Países de destino', value: '30+' },
]

const heroSlides = [
  {
    kind: 'hero',
    badge: 'LET',
    title: 'Trámites y viajes sin complicaciones',
    subtitle: 'Te acompañamos en cada paso…',
    image: '/home.png',
    primary: { href:'/contacto', label:'Contáctanos' },
    secondary: { href:'/servicios', label:'Ver servicios' },
    duration: 7000,
  },
  {
    kind: 'news',
    badge: 'Noticias',
    date: 'Ago 2025',
    title: 'Nuevas citas disponibles para Visa',
    subtitle: 'Cupos adicionales para CDMX y GDL.',
    image: '/news/visa-citas.jpg',
    link: { href:'/noticias/visa-citas-agosto-2025', label:'Leer más' },
    primary: { href:'/contacto', label:'Agendar' },
    duration: 6000,
  },
  {
    kind: 'news',
    badge: 'Promociones',
    date: 'Ago 2025',
    title: 'Europa otoño: 15% OFF',
    subtitle: 'Rutas sugeridas y cancelación flexible.',
    image: '/news/europa-otono.jpg',
    link: { href:'/noticias/europa-otono-2025', label:'Detalles' },
    duration: 6000,
  },
]

export default function Home(){
  return (
    <>
      <CarouselHero slides={heroSlides} interval={6000} />

      <Section title='Nuestras métricas' subtitle='Confianza en números'>
        <Metrics items={metrics} />
      </Section>

      <Section title='Servicios' subtitle='Lo esencial'>
        <CardsGrid>
          <Card title='Visa Americana' description='Asesoría completa para tu trámite.' to='/servicios/visa-americana' />
          <Card title='Viajes Internacionales' description='Planeación de rutas y paquetes.' to='/servicios/viajes-internacionales' />
          <Card title='Promociones' description='Ofertas por temporada.' to='/servicios/promociones' />
          <Card title='Viajes Educativos' description='Experiencias personalizadas.' to='/servicios/despedidas-de-solteros' />
        </CardsGrid>
      </Section>

      <Section id='comunidad' title='Comunidad' subtitle='Historias reales'>
        <div className='grid-auto'>
          <Testimonial quote='El proceso de visa fue facilísimo con LET.' author='María G.' />
          <Testimonial quote='Nos armaron un viaje perfecto a Europa.' author='Luis P.' />
          <Testimonial quote='Atención clara y honesta siempre.' author='Daniela R.' />
        </div>
        <div className='mt-3'>
          <a href='/comunidad' className='btn'>Ver más testimonios y recursos</a>
        </div>
      </Section>

      <Section title='Listos para ayudarte'>
        <CTA
          title='Agenda una asesoría gratuita'
          subtitle='Cuéntanos tu caso y te guiamos paso a paso.'
          primary={<a href='/contacto' className='btn btn-white'>Hablar con un asesor</a>}
          secondary={<a href='https://wa.me/5215555555555' className='btn btn-outline-white' target='_blank' rel='noreferrer'>WhatsApp</a>}
        />
      </Section>
    </>
  )
}
