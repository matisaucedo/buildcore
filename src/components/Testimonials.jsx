import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "El equipo de BuildCore transformó cómo gestionamos nuestras obras. Pasamos de hojas de Excel a tener todo centralizado en minutos.",
    name: "Mateo García",
    role: "Director de Obras",
    company: "Constructora Norte",
    initials: "MG",
    color: "#1A3A2E",
  },
  {
    quote: "Ahorramos 30% en costos operativos en el primer trimestre. El control de presupuesto en tiempo real fue un cambio de juego.",
    name: "Laura Rivas",
    role: "CFO",
    company: "Edifica S.A.",
    initials: "LR",
    color: "#2D4739",
  },
  {
    quote: "El app de campo cambió todo. El equipo en terreno ahora es autónomo y los reportes llegan solos al final del día.",
    name: "Carlos Vidal",
    role: "Capataz",
    company: "Grupo Vidal Construcciones",
    initials: "CV",
    color: "#1A6B5C",
  },
  {
    quote: "Implementamos BuildCore en 48 horas y ya en la primera semana teníamos visibilidad completa de las 5 obras activas.",
    name: "Ana Peralta",
    role: "Gerente de Proyectos",
    company: "Peralta Desarrollos",
    initials: "AP",
    color: "#0F2E21",
  },
  {
    quote: "Por primera vez nuestros clientes pueden ver el avance en tiempo real. Eso generó una confianza que antes era imposible.",
    name: "Roberto Méndez",
    role: "Socio Fundador",
    company: "Méndez & Asociados",
    initials: "RM",
    color: "#1A3A2E",
  },
  {
    quote: "La gestión de tareas entre oficina y campo era un caos. BuildCore lo resolvió de forma elegante y sin complejidad.",
    name: "Sofía Torres",
    role: "Coordinadora de Obra",
    company: "Torres Construcciones",
    initials: "ST",
    color: "#2D4739",
  },
]

function TestimonialCard({ t }) {
  return (
    <div className="shrink-0 w-[380px] bg-white border border-black/8 p-8 flex flex-col gap-6 hover:border-black/20 transition-colors duration-300 group">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-black/80" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
        ))}
      </div>

      <blockquote className="text-sm text-black/65 leading-relaxed flex-1">
        "{t.quote}"
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-black/8">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-medium text-sm">{t.name}</p>
          <p className="text-xs text-black/45">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="obras" className="bg-bg py-32 border-t border-black/8 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40 mb-3">
              Testimonios
            </p>
            <h2
              className="font-heading font-bold leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
            >
              Clientes
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-black/50">200+ Reseñas verificadas</p>
            <a
              href="#contacto"
              className="text-sm font-medium text-black hover:text-black/60 transition-colors flex items-center gap-1"
            >
              Sumarte <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="flex gap-5 animate-marquee w-max">
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </section>
  )
}
