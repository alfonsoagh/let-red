import { useState } from 'react'
import { Section } from '../components/ui/Section'

export default function Contacto(){
  const [sending, setSending] = useState(false)
  const [ok, setOk] = useState(false)
  const [errors, setErrors] = useState({})

  function handleSubmit(e){
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = Object.fromEntries(data.entries())

    // Validación mínima
    const nextErrors = {}
    if(!payload.nombre) nextErrors.nombre = 'Escribe tu nombre'
    if(!payload.email || !/.+@.+\..+/.test(payload.email)) nextErrors.email = 'Correo inválido'
    if(!payload.mensaje) nextErrors.mensaje = 'Cuéntanos tu caso'
    setErrors(nextErrors)
    if(Object.keys(nextErrors).length) return

    setSending(true)
    setOk(false)
    // Simulación de envío
    setTimeout(()=>{
      setSending(false)
      setOk(true)
      e.currentTarget.reset()
    }, 900)
  }

  return (
    <>
      <Section title='Contacto' subtitle='Hablemos'>
        <div className='contact-grid'>
          {/* FORM */}
          <form className='card card--elevated form-modern' onSubmit={handleSubmit} noValidate>
            <header className='form-hero'>
              <div className='form-hero__body'>
                <h3>Agenda una asesoría gratuita</h3>
                <p className='text-sm'>Déjanos tus datos y un asesor te contacta hoy mismo.</p>
              </div>
            </header>

            {ok && (
              <div className='alert alert--success'>
                ✅ ¡Gracias! Recibimos tu mensaje. Te contactaremos muy pronto.
              </div>
            )}

            <div className='form-row'>
              {/* Nombre */}
              <div className='input-group'>
                <label className='label' htmlFor='nombre'>Nombre</label>
                <div className='input-wrap'>
                  <span className='input-leading'>👤</span>
                  <input id='nombre' name='nombre' className='input input--lg' placeholder='Tu nombre'
                         aria-invalid={!!errors.nombre} />
                </div>
                {errors.nombre && <p className='field-msg'>{errors.nombre}</p>}
              </div>

              {/* Email */}
              <div className='input-group'>
                <label className='label' htmlFor='email'>Correo</label>
                <div className='input-wrap'>
                  <span className='input-leading'>✉️</span>
                  <input id='email' name='email' type='email' className='input input--lg' placeholder='tucorreo@ejemplo.com'
                         aria-invalid={!!errors.email} />
                </div>
                {errors.email && <p className='field-msg'>{errors.email}</p>}
              </div>

              {/* Teléfono */}
              <div className='input-group'>
                <label className='label' htmlFor='telefono'>Teléfono</label>
                <div className='input-wrap'>
                  <span className='input-leading'>📞</span>
                  <input id='telefono' name='telefono' className='input input--lg' placeholder='+52…' />
                </div>
              </div>

              {/* Mensaje */}
              <div className='input-group input-group--full'>
                <label className='label' htmlFor='mensaje'>Mensaje</label>
                <div className='input-wrap input-wrap--textarea'>
                  <span className='input-leading'>💬</span>
                  <textarea id='mensaje' name='mensaje' className='input input--lg' rows={5} placeholder='Cuéntanos tu caso'
                            aria-invalid={!!errors.mensaje} />
                </div>
                {errors.mensaje && <p className='field-msg'>{errors.mensaje}</p>}
              </div>

              {/* Consent / acciones */}
              <div className='form-actions input-group--full'>
                <label className='check'>
                  <input type='checkbox' defaultChecked />
                  <span>Quiero recibir tips y promociones de viajes.</span>
                </label>

                <div className='form-buttons'>
                  <button className='btn btn-primary btn--xl' type='submit' disabled={sending}>
                    {sending ? 'Enviando…' : 'Enviar mensaje'}
                  </button>
                  <a className='btn btn-ghost btn--xl' href='https://wa.me/5215555555555' target='_blank' rel='noreferrer'>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </form>

         {/* ASIDE */}
<aside className='contact-aside'>
  <div className='card card--elevated'>
    <h4 className='card-title'>Datos de contacto</h4>
    <ul className='contact-list text-sm text-muted'>
      <li>📞 <a href='tel:+525555555555'>+52 55 5555 5555</a></li>
      <li>✉️ <a href='mailto:hola@grupo-let.com'>hola@grupo-let.com</a></li>
      <li>💬 <a href='https://wa.me/5215555555555' target='_blank' rel='noreferrer'>WhatsApp</a></li>
    </ul>
  </div>

  <div className='card card--elevated'>
    <h4 className='card-title'>Oficinas</h4>
    <p className='text-sm text-muted'>Toluca • Metepec • Puebla • Monterrey • Guadalajara • Canadá • Madrid</p>
  </div>
</aside>

        </div>
      </Section>
    </>
  )
}
