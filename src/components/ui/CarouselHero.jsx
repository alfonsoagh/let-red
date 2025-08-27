// src/components/ui/CarouselHero.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

export function CarouselHero({
  slides = [],
  interval = 6000,
}) {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0); // 0..100

  const rafRef = useRef(null);
  const startRef = useRef(0);

  const count = slides.length;
  const currDuration = slides[idx]?.duration ?? interval;

  const go = (n) => {
    const to = (n + count) % count;
    setIdx(to);
    setProgress(0);
    startRef.current = performance.now();
  };
  const next = () => go(idx + 1);

  // autoplay + progreso con rAF
  useEffect(() => {
    if (count <= 1) return;

    const tick = (t) => {
      if (!startRef.current) startRef.current = t;

      const elapsed = t - startRef.current;
      const pct = Math.min(100, (elapsed / currDuration) * 100);
      setProgress(pct);

      if (pct >= 100) {
        startRef.current = t;
        next();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, currDuration, count]);

  const active = useMemo(() => slides[idx] ?? null, [slides, idx]);

  return (
    <section
      className="hero hero-carousel"
      aria-roledescription="carousel"
      aria-label="Promociones y noticias"
    >
      <div className="hero-carousel__viewport">
        {slides.map((s, i) => (
          <Slide key={i} slide={s} active={i === idx} aria-hidden={i !== idx} />
        ))}
      </div>

      {/* solo tabs con barra de progreso */}
      {count > 1 && (
        <div className="hero-tabs" role="tablist" aria-label="Paginación del carrusel">
          {slides.map((s, i) => {
            const isActive = i === idx;
            const pct = isActive ? progress : 0;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={isActive}
                aria-controls={`hero-slide-${i}`}
                title={s?.title || `Slide ${i + 1}`}
                className={`hero-tab ${isActive ? "is-active" : ""}`}
                onClick={() => go(i)}
              >
                <span className="hero-tab__bar">
                  <span
                    className="hero-tab__fill"
                    style={{ transform: `scaleX(${pct / 100})` }}
                  />
                </span>
                <span className="hero-tab__label">{s?.badge ?? s?.kind ?? i + 1}</span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

function Slide({ slide, active, ...a11y }) {
  const { kind = "hero", title, subtitle, image, badge, primary, secondary, link, date } = slide || {};
  return (
    <article
      id={a11y["aria-hidden"] ? undefined : `hero-slide-active`}
      className={`hero-slide ${active ? "is-active" : ""} ${kind === "news" ? "is-news" : ""}`}
      {...a11y}
    >
      {image && (
        <div className="hero-slide__bg" aria-hidden="true">
          <img src={image} alt="" />
          <div className="hero-slide__overlay" />
        </div>
      )}

      <div className="container hero-slide__content">
        {badge && <span className="hero-badge">{badge}{date ? ` · ${date}` : ""}</span>}
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        <div className="hero-ctas">
          {primary?.href && <a className="btn btn-primary" href={primary.href}>{primary.label}</a>}
          {secondary?.href && <a className="btn btn-ghost" href={secondary.href}>{secondary.label}</a>}
          {kind === "news" && link?.href && <a className="btn" href={link.href}>Leer más</a>}
        </div>
      </div>
    </article>
  );
}
