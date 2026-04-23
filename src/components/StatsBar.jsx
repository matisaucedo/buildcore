import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

function Counter({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = 0
    const end = target
    const duration = 1800
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { value: 120, suffix: "+", label: "Obras gestionadas" },
  { value: 98, suffix: "%", label: "Satisfacción de clientes" },
  { value: 2019, suffix: "", label: "Fundado · 6 años de experiencia" },
]

export default function StatsBar() {
  return (
    <section className="bg-bgDark py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-bgDark px-10 py-12 flex flex-col gap-2"
            >
              <p className="font-heading font-extrabold text-white leading-none"
                 style={{ fontSize: "clamp(48px, 5vw, 72px)" }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/30 text-sm uppercase tracking-[0.2em] mt-10 text-center"
        >
          Built with experience and craft
        </motion.p>
      </div>
    </section>
  )
}
