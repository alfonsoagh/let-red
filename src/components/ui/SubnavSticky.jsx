import { useEffect, useMemo, useRef, useState } from "react";

export function SubnavSticky({
  items = [],       // [{ href:'#id', label:'Texto' }]
  top = 64,         // offset por altura de la navbar
  fullbleed = false // por defecto: contenido (NO full-bleed)
}) {
  const [active, setActive] = useState(items?.[0]?.href || null);
  const observersRef = useRef([]);
  const listRef = useRef(null);

  const ids = useMemo(
    () => items.map(i => i.href?.startsWith('#') ? i.href.slice(1) : i.href),
    [items]
  );

  // Observa secciones y marca activo
  useEffect(() => {
    observersRef.current.forEach(o => o.disconnect?.());
    observersRef.current = [];

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, { root: null, rootMargin: `-${top + 8}px 0px -60% 0px`, threshold: 0 });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    observersRef.current.push(io);

    return () => observersRef.current.forEach(o => o.disconnect?.());
  }, [ids, top]);

  // Scroll suave con compensación de navbar
  const smoothGo = (href) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (!el) return;
    const y = window.scrollY + el.getBoundingClientRect().top - top - 8;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActive(`#${id}`);
    history.replaceState(null, '', `#${id}`);
  };

  const onChipClick = (e, href) => { e.preventDefault(); smoothGo(href); };

  // Mantener visible/centrado el chip activo (útil en móvil con overflow-x)
  useEffect(() => {
    if (!listRef.current || !active) return;
    const link = listRef.current.querySelector(`a[href="${active}"]`);
    if (link) link.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [active]);

  return (
    <div className={`subnav--sticky ${fullbleed ? 'subnav--fullbleed' : ''}`} style={{ top }}>
      <div className="subnav__container">
        <ul className="subnav__list" ref={listRef}>
          {items.map(it => {
            const isActive = active === it.href;
            return (
              <li key={it.href}>
                <a
                  href={it.href}
                  onClick={(e) => onChipClick(e, it.href)}
                  className="subnav__link"
                  aria-current={isActive ? 'page' : undefined}
                  style={isActive ? { background: 'var(--let-gray-200)', fontWeight: 600 } : undefined}
                >
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
