import React, { useEffect, useState } from 'react'
import './brand-loader.css'

const LOGO_URL = '/logo.png' // en /public

export default function BrandLoader({ duration = 1400, onFinish }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      onFinish && onFinish()
    }, duration + 300) // margen para fade-out
    return () => clearTimeout(t)
  }, [duration, onFinish])

  if (!visible) return null

  return (
    <div className="let-loader" role="status" aria-live="polite" style={{'--let-dur': `${duration}ms`}}>
      <div className="let-loader__center">
        <img src={LOGO_URL} alt="LET" className="let-logo reveal" />
        <div className="let-sweep" />
      </div>
      <span className="sr-only">Cargando…</span>
    </div>
  )
}
