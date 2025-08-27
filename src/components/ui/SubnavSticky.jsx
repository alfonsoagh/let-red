// src/components/ui/SubnavSticky.jsx
import React from 'react'

export function SubnavSticky({ items = [] }) {
  return (
    <nav className="subnav subnav--sticky subnav--fullbleed">
      <div className="subnav__container">
        <ul className="subnav__list" role="tablist" aria-label="Subsecciones">
          {items.map(it => (
            <li key={it.href}>
              <a className="subnav__link" href={it.href}>{it.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
