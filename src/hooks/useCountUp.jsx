// =============================
// src/hooks/useCountUp.js
// =============================
import { useEffect, useRef, useState } from 'react'


export function useCountUp({ from=0, to=100, duration=1200, easing='easeOutCubic', whenInView=true }){
const ref = useRef(null)
const [value, setValue] = useState(from)


useEffect(() => {
let raf, start


const ease = {
linear: t=>t,
easeOutCubic: t=>1-Math.pow(1-t,3)
}[easing] || (t=>t)


const animate = ts => {
if (!start) start = ts
const p = Math.min(1, (ts-start)/duration)
setValue(Math.floor(from + (to-from)*ease(p)))
if (p < 1) raf = requestAnimationFrame(animate)
}


const startAnim = () => { raf = requestAnimationFrame(animate) }


if (!whenInView){ startAnim(); return () => cancelAnimationFrame(raf) }


// vincular a intersección
const io = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting){ startAnim(); io.disconnect() }
})
}, { threshold: 0.4 })


if (ref.current) io.observe(ref.current)
return () => { cancelAnimationFrame(raf); io.disconnect() }
}, [from, to, duration, easing, whenInView])


return { ref, value }
}