import { useState } from 'react'
import { motion } from 'framer-motion'
import client from '../api/client'

interface FormData {
  tipo: string
  radicacion: string
  nombre: string
  cc: string
  email: string
  telefono: string
  direccion: string
  relacionado: string
  otroRelacionado: string
  descripcion: string
}

export default function Quejas() {
  const [form, setForm] = useState<FormData>({
    tipo: '',
    radicacion: '',
    nombre: '',
    cc: '',
    email: '',
    telefono: '',
    direccion: '',
    relacionado: '',
    otroRelacionado: '',
    descripcion: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await client.post('/complaint', {
        tipo: form.tipo as 'queja' | 'apelacion',
        radicacion: form.radicacion,
        nombre: form.nombre,
        email: form.email,
        telefono: form.telefono,
        descripcion: form.descripcion,
      })
      setSent(true)
    } catch {
      setError('Error al enviar. Intente nuevamente.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Mensaje Enviado</h1>
        <p className="text-gray-600">Su queja o apelación ha sido recibida. Le daremos respuesta a la brevedad.</p>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Queja o Apelación</h1>
          <p className="text-gray-200 max-w-3xl">
            Con el objetivo de ofrecer un buen servicio y atención, ponemos a su disposición el presente formato
            para poder registrar, atender y solucionar toda queja o apelación que requiera exponer.
          </p>
        </div>
      </section>

      <motion.section
        className="max-w-2xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Código único de radicación</label>
            <input
              type="text"
              value={form.radicacion}
              onChange={(e) => update('radicacion', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de comunicación *</label>
            <select
              required
              value={form.tipo}
              onChange={(e) => update('tipo', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Seleccione una opción</option>
              <option value="queja">Queja - Expresión de insatisfacción sobre el desarrollo de las actividades</option>
              <option value="apelacion">Apelación - Solicitud de revisión en relación a una certificación</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
              <input
                required
                type="text"
                value={form.nombre}
                onChange={(e) => update('nombre', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">C.C. o NIT *</label>
              <input
                required
                type="text"
                value={form.cc}
                onChange={(e) => update('cc', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
              <input
                required
                type="tel"
                value={form.telefono}
                onChange={(e) => update('telefono', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dirección y Ciudad *</label>
            <input
              required
              type="text"
              value={form.direccion}
              onChange={(e) => update('direccion', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Relacionada con</label>
            <select
              value={form.relacionado}
              onChange={(e) => update('relacionado', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Seleccione una opción</option>
              <option value="personas">Certificación de personas</option>
              <option value="equipos">Certificación de equipos</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          {form.relacionado === 'otros' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Indique cual</label>
              <input
                type="text"
                value={form.otroRelacionado}
                onChange={(e) => update('otroRelacionado', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción detallada *</label>
            <textarea
              required
              rows={6}
              value={form.descripcion}
              onChange={(e) => update('descripcion', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-y"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={sending}
            className="bg-secondary text-primary font-semibold px-8 py-3 rounded hover:bg-secondary-light transition-colors disabled:opacity-50"
          >
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.section>
    </div>
  )
}
