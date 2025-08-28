// src/pages/Home.jsx
import React, { useEffect } from 'react'
import { Section } from '../components/ui/Section'
import { Metrics } from '../components/ui/Metrics'
import { CardsGrid, Card } from '../components/ui/Card'
import { Testimonial } from '../components/ui/Testimonial'
import { CTA } from '../components/ui/CTA'
import { CarouselHero } from '../components/ui/CarouselHero'

// Animaciones (asegúrate de tener estos archivos)
import { useReveal } from '../hooks/useReveal'
import { useParallax } from '../hooks/useParallax'
import '../styles/anim.css'

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
    image: '/fondo-let.png',
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
    image: '/fondo-let.png',
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
    image: '/fondo-let.png',
    link: { href:'/noticias/europa-otono-2025', label:'Detalles' },
    duration: 6000,
  },
]

export default function Home(){
  // Activa reveal global para elementos con clase .reveal
  useReveal('.reveal', { threshold: 0.12 })

  // Parallax suave (si tu CarouselHero expone una imagen con data-parallax)
  useParallax('[data-parallax]', 14)

  // (Opcional) si quieres forzar foco arriba al montar la página
  useEffect(() => { window.scrollTo(0,0) }, [])

  return (
    <>
      {/* HERO */}
      <div className="reveal reveal-up">
        {/* Si dentro de CarouselHero puedes agregar data-parallax a la imagen, mejor.
           Ej: <img src="/fondo-let.png" data-parallax="12" ... /> */}
        <CarouselHero slides={heroSlides} interval={6000} parallax={12}/>
      </div>

      {/* MÉTRICAS */}
      <Section title='Nuestras métricas' subtitle='Confianza en números'>
        {/* Stagger para que entren una por una */}
        <div className="reveal reveal-stagger">
          <Metrics items={metrics} />
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section title='Servicios' subtitle='Lo esencial'>
        <div className="reveal reveal-stagger">
          <CardsGrid>
            <Card className="card" title='Visa Americana' description='Asesoría completa para tu trámite.' to='/servicios/visa-americana' />
            <Card className="card" title='Viajes Internacionales' description='Planeación de rutas y paquetes.' to='/servicios/viajes-internacionales' />
            <Card className="card" title='Promociones' description='Ofertas por temporada.' to='/servicios/promociones' />
            <Card className="card" title='Viajes Educativos' description='Experiencias personalizadas.' to='/servicios/despedidas-de-solteros' />
          </CardsGrid>
        </div>
      </Section>

      {/* COMUNIDAD */}
      <Section id='comunidad' title='Comunidad' subtitle='Historias reales'>
        <div className='grid-auto reveal reveal-stagger'>
          <Testimonial quote='El proceso de visa fue facilísimo con LET.' author='María G.' />
          <Testimonial quote='Nos armaron un viaje perfecto a Europa.' author='Luis P.' />
          <Testimonial quote='Atención clara y honesta siempre.' author='Daniela R.' />
        </div>
        <div className='mt-3 reveal reveal-up'>
          <a href='/comunidad' className='btn'>Ver más testimonios y recursos</a>
        </div>
      </Section>

      {/* CTA FINAL */}
      <div className="reveal reveal-zoom">
        <Section title='Listos para ayudarte'>
          <CTA
            title='Agenda una asesoría gratuita'
            subtitle='Cuéntanos tu caso y te guiamos paso a paso.'
            primary={<a href='/contacto' className='btn btn-white'>Hablar con un asesor</a>}
            secondary={<a href='https://wa.me/5215555555555' className='btn btn-outline-white' target='_blank' rel='noreferrer'>WhatsApp</a>}
          />
        </Section>
      </div>
    </>
  )
}
