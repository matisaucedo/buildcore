import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "¿Para qué tipo de obras es BuildCore?",
    a: "BuildCore está diseñado para constructoras de todos los tamaños — desde proyectos residenciales medianos hasta desarrollos comerciales e industriales a gran escala. Funciona para obras en Argentina, Chile, Uruguay y más países de Latinoamérica.",
  },
  {
    q: "¿Tienen app móvil?",
    a: "Sí. La App de Campo está disponible para iOS y Android. El equipo en terreno puede registrar avances, subir fotos, completar checklists y recibir tareas directamente desde el celular, sin necesidad de conexión permanente.",
  },
  {
    q: "¿Cuánto tiempo lleva implementarlo?",
    a: "La mayoría de los equipos están operativos en menos de 48 horas. Incluimos onboarding personalizado, migración de datos existentes y capacitación para tu equipo sin costo adicional.",
  },
  {
    q: "¿Puedo probar antes de contratar?",
    a: "Sí. Ofrecemos una demo guiada de 30 minutos con tu equipo donde recorremos el sistema con datos de una obra real. También disponemos de un período de prueba de 14 días sin necesidad de tarjeta de crédito.",
  },
  {
    q: "¿Ofrecen soporte técnico?",
    a: "Todos los planes incluyen soporte por email y chat con tiempos de respuesta garantizados. Los planes Business y Enterprise incluyen un Customer Success Manager dedicado y línea telefónica directa.",
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-black/10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-medium text-base pr-4 group-hover:text-accent transition-colors duration-200">
          {item.q}
        </span>
        <span
          className="shrink-0 w-6 h-6 border border-black/20 flex items-center justify-center text-black/50 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-black/55 leading-relaxed pb-6 pr-10">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-bg py-32 border-t border-black/8">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40 mb-6">
              FAQ
            </p>
            <h2
              className="font-heading font-bold leading-[1.1]"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Preguntas Frecuentes
            </h2>
            <p className="text-base text-black/55 mt-6 leading-relaxed">
              ¿Tenés más preguntas? Escribinos a{" "}
              <a href="mailto:hola@buildcore.app" className="text-black underline hover:text-accent transition-colors">
                hola@buildcore.app
              </a>
            </p>
          </motion.div>

          {/* Right — accordions */}
          <div>
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
