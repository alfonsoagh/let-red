import React, { useEffect, useMemo, useState } from 'react'
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
import BrandLoader from './components/Loader/BrandLoader'
import './App.css'

const LOADER_KEY = 'LET_LOADER_SEEN_v1' // ⇠ cambia el sufijo (v1→v2) si algún día quieres que se muestre de nuevo

export default function App(){
  // 1) Decidir si hay que mostrar loader ANTES de renderizar
  const shouldShowInitially = useMemo(() => {
    if (typeof window === 'undefined') return false
    return !localStorage.getItem(LOADER_KEY) // ← localStorage = persiste entre visitas
  }, [])

  // 2) Estado
  const [loading, setLoading] = useState(shouldShowInitially)

  // 3) Si vamos a mostrar el loader, MARCA el flag de inmediato (evita que F5 lo repita)
  useEffect(() => {
    if (loading && typeof window !== 'undefined') {
      localStorage.setItem(LOADER_KEY, '1')
    }
  }, [loading])

  return (
    <>
      {loading && (
        <BrandLoader
          duration={1400}
          onFinish={() => setLoading(false)}
        />
      )}

      {!loading && (
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
      )}
    </>
  )
}
