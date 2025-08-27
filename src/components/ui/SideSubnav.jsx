// src/components/ui/SideSubnav.jsx
import React, { useEffect, useRef, useState } from 'react'

export function SideSubnav({ items = [], offset = 80, title = 'Secciones' }) {
  const [active, setActive] = useState(items?.[0]?.href || null)
  const observerRef = useRef(null)

  useEffect(() => {
    const sections = items
      .map(i => document.querySelector(i.href))
      .filter(Boolean)

    // Observa cuando una sección entra al viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Escoge la que tenga mayor intersección
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(`#${visible.target.id}`)
      },
      {
        root: null,
        // top offset para no quedar debajo del navbar
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: [0.15, 0.3, 0.6]
      }
    )

    sections.forEach(sec => observerRef.current.observe(sec))
    return () => observerRef.current?.disconnect()
  }, [items, offset])

  const onClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
    setActive(href)
    // Cierra el drawer si está abierto en móvil
    document.documentElement.classList.remove('sl-nav-open')
  }

  return (
    <>
      {/* Toggle móvil */}
      <button
        className="sl-toggle"
        aria-label="Abrir índice de la página"
        onClick={() => document.documentElement.classList.toggle('sl-nav-open')}
      >
        Índice
      </button>

      {/* Backdrop móvil */}
      <div className="sl-backdrop" onClick={() => document.documentElement.classList.remove('sl-nav-open')} />

      <aside className="sl-nav" aria-label="Índice de la página">
        <div className="sl-nav__inner">
          <div className="sl-nav__title">{title}</div>
          <nav>
            <ul className="sl-list">
              {items.map((it) => (
                <li key={it.href}>
                  <a
                    href={it.href}
                    className={`sl-link ${active === it.href ? 'is-active' : ''}`}
                    onClick={(e) => onClick(e, it.href)}
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
