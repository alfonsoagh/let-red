// src/components/ui/Metrics.jsx
import React, { useEffect, useRef, useState } from 'react'
import '../../styles/anim.css' // opcional, solo si usas las clases reveal/stagger

export function Metrics({ items = [] }) {
  return (
    <div className="grid-auto reveal-stagger reveal">
      {items.map((m) => (
        <MetricCard key={m.label} label={m.label} value={m.value} />
      ))}
    </div>
  )
}

function MetricCard({ label, value }) {
  // Extrae número y sufijo. Ej: "+15,347" -> number=15347, suffix="+"
  const target = Number(String(value).replace(/[^0-9]/g, '')) || 0
  const suffix = String(value).replace(/[0-9,]/g, '') // conserva +, %, etc.

  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let raf
    let startTs

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)
    const duration = 1200

    const run = (ts) => {
      if (!startTs) startTs = ts
      const p = Math.min(1, (ts - startTs) / duration)
      const eased = easeOutCubic(p)
      setCount(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(run)
    }

    // Inicia cuando el card entra en viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            raf = requestAnimationFrame(run)
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )

    if (ref.current) io.observe(ref.current)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [target])

  return (
    <div ref={ref} className="card" style={{ textAlign: 'center' }}>
      <div className="metric-value" style={{ fontSize: 32, fontWeight: 800 }}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  )
}
