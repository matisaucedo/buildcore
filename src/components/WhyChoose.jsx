import { motion } from "framer-motion"

const reasons = [
  {
    title: "Creando Obras que Duran",
    desc: "Espacios de calidad con materiales certificados y procesos auditados en cada etapa de la construcción.",
    num: "01",
  },
  {
    title: "Entrega End-to-End",
    desc: "Gestión completa desde la planificación hasta la entrega final. Un solo interlocutor, toda la responsabilidad.",
    num: "02",
  },
  {
    title: "Comunicación Transparente",
    desc: "Cronogramas realistas, presupuestos claros, actualizaciones regulares. Sin sorpresas, sin letras chicas.",
    num: "03",
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-bg py-32 border-t border-black/8">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40 mb-6">
              Por qué elegirnos
            </p>
            <h2
              className="font-heading font-bold leading-[1.1]"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Combinamos diseño, construcción confiable y comunicación clara.
            </h2>

            <div className="mt-10">
              <a
                href="#contacto"
                className="bg-black text-white font-medium px-6 py-3 rounded-pill hover:bg-black/80 transition-colors duration-200 text-sm inline-block"
              >
                Solicitar Demo
              </a>
            </div>
          </motion.div>

          {/* Right — reasons */}
          <div className="flex flex-col">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-8 border-b border-black/10 flex gap-6 group"
              >
                <span className="text-black/20 text-sm font-mono mt-1 shrink-0">{reason.num}</span>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-accent transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-black/55 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
