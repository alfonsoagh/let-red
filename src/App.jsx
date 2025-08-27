import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import ServiciosIndex from './pages/Servicios/Index'
import VisaAmericana from './pages/Servicios/VisaAmericana'
import ViajesInternacionales from './pages/Servicios/ViajesInternacionales'
import Promociones from './pages/Servicios/Promociones'
import Despedidas from './pages/Servicios/Despedidas'
import Comunidad from './pages/Comunidad'
import Contacto from './pages/Contacto'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/servicios' element={<ServiciosIndex />} />
          <Route path='/servicios/visa-americana' element={<VisaAmericana />} />
          <Route path='/servicios/viajes-internacionales' element={<ViajesInternacionales />} />
          <Route path='/servicios/promociones' element={<Promociones />} />
          <Route path='/servicios/despedidas-de-solteros' element={<Despedidas />} />
          <Route path='/comunidad' element={<Comunidad />} />
          <Route path='/contacto' element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}