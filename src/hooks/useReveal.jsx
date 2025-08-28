// =============================
// src/hooks/useReveal.js
// =============================
import { useEffect } from 'react'


export function useReveal(selector = '.reveal', options = {}){
useEffect(() => {
if (typeof window === 'undefined') return
const elms = Array.from(document.querySelectorAll(selector))
if (!('IntersectionObserver' in window)){
elms.forEach(el => el.classList.add('is-in'))
return
}
const rootMargin = options.rootMargin || '0px 0px -10% 0px'
const threshold = options.threshold || 0.1
const io = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting){
entry.target.classList.add('is-in')
if (!options.repeat) io.unobserve(entry.target)
} else if (options.repeat){
entry.target.classList.remove('is-in')
}
})
}, { root: null, rootMargin, threshold })


elms.forEach(el => io.observe(el))
return () => io.disconnect()
}, [selector, options.rootMargin, options.threshold, options.repeat])
}

// Helper React wrapper (opcional)
// Uso: <Reveal className="reveal-up">...</Reveal>
import React from 'react'
export function Reveal({ as:Tag='div', className='', children, ...rest }){
return <Tag className={`reveal ${className}`} {...rest}>{children}</Tag>
}