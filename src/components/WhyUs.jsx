import { motion } from "framer-motion"

const cards = [
  {
    title: "Seguimiento en tiempo real",
    desc: "Cada tarea, cada partida presupuestaria, cada hito — visible en tiempo real desde cualquier dispositivo.",
    icon: "⬡",
  },
  {
    title: "Entrega end-to-end",
    desc: "Desde la planificación inicial hasta la entrega de llaves. Un solo sistema, sin fricciones.",
    icon: "⬡",
  },
  {
    title: "Comunicación clara",
    desc: "Reportes automáticos para el cliente, alertas para el equipo, historial completo de cada decisión.",
    icon: "⬡",
  },
  {
    title: "Calidad garantizada",
    desc: "Checklists de calidad integrados, inspecciones fotográficas y trazabilidad completa de materiales.",
    icon: "⬡",
  },
]

export default function WhyUs() {
  return (
    <section className="bg-bgDark py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-white leading-[1.1] mb-16 max-w-3xl"
          style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
        >
          Combinamos tecnología, procesos y comunicación para entregar obras{" "}
          <span className="text-white/30">sin sorpresas.</span>
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#1A1A1A] p-8 flex flex-col gap-4 border border-white/5 cursor-pointer group"
            >
              {/* Accent line */}
              <div className="w-8 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />

              <h3 className="font-heading font-semibold text-white text-lg leading-tight">
                {card.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
