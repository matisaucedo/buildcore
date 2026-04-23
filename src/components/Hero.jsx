import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="bg-bg min-h-screen pt-32 pb-24 flex items-center">
      <div className="max-w-[1320px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/50 mb-6"
            >
              Gestión de obras moderna
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-extrabold leading-[1.05] mb-6"
              style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
            >
              Gestioná tus obras.{" "}
              <span className="text-black/25">Sin el caos.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-black/60 leading-relaxed mb-10 max-w-md"
            >
              Gantt, tareas, presupuestos y equipo de campo. Todo en un solo lugar.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#contacto"
                className="bg-black text-white font-medium px-6 py-3 rounded-pill hover:bg-black/80 transition-colors duration-200 text-sm"
              >
                Solicitar Demo
              </a>
              <a
                href="#funciones"
                className="border border-black text-black font-medium px-6 py-3 rounded-pill hover:bg-black/5 transition-colors duration-200 text-sm"
              >
                Ver funciones
              </a>
            </motion.div>

            {/* Trust signal */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              {/* Avatars */}
              <div className="flex -space-x-2">
                {["#2D4739", "#1A3A2E", "#3D6B56", "#0F2E21"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-bg flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {["MG", "LR", "CV", "AP"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-black/60">
                Usado por <span className="font-semibold text-black">120+ constructoras</span>
              </p>
            </motion.div>
          </div>

          {/* Right — app screenshot placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Main mockup */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-stone-800 to-stone-700 overflow-hidden relative">
              {/* Inner UI simulation */}
              <div className="absolute inset-0 p-6 flex flex-col gap-4">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 bg-white/20 rounded-pill" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-accent/80 rounded-pill" />
                    <div className="h-6 w-6 bg-white/10 rounded-pill" />
                  </div>
                </div>
                {/* Gantt rows */}
                <div className="flex flex-col gap-2 mt-2">
                  {[
                    { w: "75%", label: "Cimentación", done: true },
                    { w: "50%", label: "Estructura", done: false },
                    { w: "30%", label: "Cerramientos", done: false },
                    { w: "15%", label: "Instalaciones", done: false },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-white/50 text-[10px] w-20 shrink-0">{row.label}</span>
                      <div className="flex-1 h-4 bg-white/10 relative overflow-hidden">
                        <div
                          className={`h-full ${row.done ? "bg-accent" : "bg-white/30"}`}
                          style={{ width: row.w }}
                        />
                      </div>
                      <span className="text-white/30 text-[10px] w-8">{row.w}</span>
                    </div>
                  ))}
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                  {[
                    { n: "12", l: "Tareas activas" },
                    { n: "87%", l: "Progreso" },
                    { n: "$2.4M", l: "Presupuesto" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 p-3 border border-white/10">
                      <p className="text-white font-bold text-lg">{s.n}</p>
                      <p className="text-white/40 text-[10px] mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-white border border-black/10 px-4 py-3 shadow-lg"
            >
              <p className="text-[10px] text-black/40 uppercase tracking-wider mb-0.5">Progreso semanal</p>
              <p className="font-heading font-bold text-sm">+12% vs semana anterior</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
