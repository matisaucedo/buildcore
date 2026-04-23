import { useState } from "react"
import { motion } from "framer-motion"

export default function CtaSection() {
  const [form, setForm] = useState({ name: "", email: "", desc: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-bgDark py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-6">
              Contacto
            </p>
            <h2
              className="font-heading font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              ¿Tenés una obra?{" "}
              <span className="text-white/30">Hablemos.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Respondemos en menos de 24 horas. Contanos sobre tu obra y te
              armamos una demo personalizada.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-white/15 flex items-center justify-center shrink-0">
                  <span className="text-white/50 text-xs">@</span>
                </div>
                <a
                  href="mailto:hola@buildcore.app"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  hola@buildcore.app
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-white/15 flex items-center justify-center shrink-0">
                  <span className="text-white/50 text-xs">↗</span>
                </div>
                <span className="text-white/40 text-sm">Córdoba, Argentina · Remoto en LATAM</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="border border-white/10 p-10 text-center">
                <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-xl">✓</span>
                </div>
                <h3 className="font-heading font-semibold text-white text-xl mb-2">
                  Mensaje enviado
                </h3>
                <p className="text-white/40 text-sm">
                  Te respondemos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.14em] text-white/35 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.14em] text-white/35 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@empresa.com"
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.14em] text-white/35 mb-2">
                    Descripción del proyecto
                  </label>
                  <textarea
                    name="desc"
                    value={form.desc}
                    onChange={handleChange}
                    required
                    placeholder="Contanos brevemente sobre tu obra..."
                    rows={4}
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white text-black font-medium px-6 py-3.5 rounded-pill hover:bg-white/90 transition-colors duration-200 text-sm mt-2"
                >
                  Enviar
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
