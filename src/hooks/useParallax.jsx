// =============================
// src/hooks/useParallax.js
// =============================
import { useEffect } from 'react'


export function useParallax(selector='[data-parallax]', strength=20){
useEffect(() => {
const elms = Array.from(document.querySelectorAll(selector))
if (!elms.length) return
let raf
const onScroll = () => {
if (raf) return
raf = requestAnimationFrame(() => {
const y = window.scrollY
elms.forEach(el => {
const s = Number(el.getAttribute('data-parallax')) || strength
el.style.transform = `translate3d(0, ${y * (s/100)}px, 0)`
})
raf = null
})
}
window.addEventListener('scroll', onScroll, { passive:true })
onScroll()
return () => window.removeEventListener('scroll', onScroll)
}, [selector, strength])
}