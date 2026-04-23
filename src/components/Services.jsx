import { motion } from "framer-motion"

const services = [
  {
    num: "/001",
    title: "Gantt de Obras",
    desc: "Cronograma visual con fases, hitos y dependencias. Detectá desvíos antes de que ocurran.",
    gradient: "from-stone-800 to-stone-700",
    accent: "#1A6B5C",
  },
  {
    num: "/002",
    title: "Gestión de Tareas",
    desc: "Asignación a equipos, responsables y prioridades. Cada tarea tiene su dueño.",
    gradient: "from-stone-900 to-stone-800",
    accent: "#2D5A4A",
  },
  {
    num: "/003",
    title: "Control de Presupuesto",
    desc: "Presupuesto planificado vs. real, con alertas automáticas ante desvíos.",
    gradient: "from-zinc-800 to-zinc-700",
    accent: "#1A6B5C",
  },
  {
    num: "/004",
    title: "App de Campo",
    desc: "El equipo en terreno accede desde el celular. Sin papeles, sin excusas.",
    gradient: "from-neutral-800 to-neutral-700",
    accent: "#2D5A4A",
  },
]

// Placeholder mockup content per service
function ServiceMockup({ index, accent }) {
  if (index === 0) {
    return (
      <div className="p-5 h-full flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="h-2 w-20 bg-white/20 rounded-pill" />
        </div>
        {["Diseño", "Permisos", "Fundación", "Estructura", "Terminación"].map((phase, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-white/30 text-[9px] w-16 shrink-0">{phase}</span>
            <div className="flex-1 h-3 bg-white/5 relative">
              <div
                className="h-full transition-all"
                style={{
                  width: `${[90, 70, 55, 30, 10][i]}%`,
                  backgroundColor: i < 2 ? accent : "rgba(255,255,255,0.2)"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="p-5 h-full flex flex-col gap-2">
        {[
          { t: "Revisar planos estructura", s: "done", u: "MG" },
          { t: "Reunión con proveedor", s: "in-progress", u: "LR" },
          { t: "Informe semanal equipo", s: "pending", u: "CV" },
          { t: "Aprobación presupuesto", s: "pending", u: "AP" },
        ].map((task, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 p-2 border border-white/5">
            <div
              className="w-3 h-3 shrink-0 border"
              style={{
                borderColor: task.s === "done" ? accent : "rgba(255,255,255,0.2)",
                backgroundColor: task.s === "done" ? accent : "transparent"
              }}
            />
            <span className="text-white/50 text-[10px] flex-1 truncate">{task.t}</span>
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[7px] font-bold shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              {task.u[0]}
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (index === 2) {
    return (
      <div className="p-5 h-full flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            { l: "Planificado", v: "$4.2M", c: "white" },
            { l: "Ejecutado", v: "$3.1M", c: accent },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-3 border border-white/10">
              <p className="text-white/30 text-[9px] mb-1">{item.l}</p>
              <p className="font-bold" style={{ color: item.c, fontSize: "14px" }}>{item.v}</p>
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-[9px] text-white/30 mb-1">
            <span>Ejecución presupuestaria</span>
            <span>74%</span>
          </div>
          <div className="h-2 bg-white/10 w-full">
            <div className="h-full w-[74%]" style={{ backgroundColor: accent }} />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="text-white/40 text-[9px]">Alerta: 3 rubros por encima del plan</span>
        </div>
      </div>
    )
  }
  if (index === 3) {
    return (
      <div className="p-5 h-full flex flex-col gap-3">
        {/* Phone mockup */}
        <div className="w-24 h-40 mx-auto bg-white/5 border border-white/15 relative overflow-hidden">
          <div className="h-2 bg-white/10 mx-4 mt-2 rounded-pill" />
          <div className="p-2 flex flex-col gap-1.5 mt-2">
            {["Check cimentación", "Foto progreso", "Reporte diario"].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white/5 p-1">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                <span className="text-white/40 text-[8px]">{item}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="w-8 h-1 bg-white/20 rounded-pill" />
          </div>
        </div>
      </div>
    )
  }
}

export default function Services() {
  return (
    <section id="funciones" className="bg-bg py-32 border-t border-black/8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-16 flex-wrap gap-4"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40 mb-3">
              Funciones
            </p>
            <h2
              className="font-heading font-bold leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
            >
              Nuestras Funciones
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-sm font-medium text-black hover:text-black/60 transition-colors flex items-center gap-1"
          >
            Empezar ahora <span aria-hidden>→</span>
          </a>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-bg p-8 flex flex-col gap-6 group cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`w-full aspect-video bg-gradient-to-br ${service.gradient} overflow-hidden`}
              >
                <ServiceMockup index={i} accent={service.accent} />
              </div>

              {/* Content */}
              <div className="flex items-start gap-6">
                <span className="text-black/20 text-sm font-mono shrink-0 mt-0.5">{service.num}</span>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black/55 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
