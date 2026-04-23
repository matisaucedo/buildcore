import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="bg-bg py-32 border-t border-black/8">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40 mb-8">
              Sobre BuildCore
            </p>
            <blockquote
              className="font-heading font-bold text-black leading-[1.1] mb-8"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              "Un proceso fluido,{" "}
              <span className="text-black/30">de inicio a fin."</span>
            </blockquote>
            <p className="text-base text-black/60 leading-relaxed max-w-md">
              Colaboramos con constructoras para que cada obra cumpla plazos,
              presupuesto y calidad. Nuestra plataforma centraliza la información
              y elimina la fricción entre oficina y campo.
            </p>

            <div className="mt-10 pt-10 border-t border-black/10 flex gap-8">
              {[
                { n: "6+", l: "Años en el mercado" },
                { n: "50+", l: "Equipo especializado" },
                { n: "3", l: "Países de operación" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-heading font-bold text-2xl">{item.n}</p>
                  <p className="text-xs text-black/50 mt-0.5">{item.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 relative overflow-hidden">
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
              {/* Blueprint-style accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-white/20 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-accent/60" />
                  </div>
                  <p className="text-white/30 text-xs uppercase tracking-widest">BuildCore Platform</p>
                </div>
              </div>
            </div>

            {/* Corner detail */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-black/15 bg-bg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
