import { useEffect, useRef, useState, useCallback } from "react"

const stats = [
  { label: "Proyectos Completados", value: "150+" },
  { label: "Años de Experiencia", value: "12" },
  { label: "Entrega a Tiempo", value: "98%" },
  { label: "Valor Construido", value: "$2B+" },
]

export default function StatsBar() {
  const videoRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef(null)

  const updateParallax = useCallback(() => {
    if (!videoRef.current) return
    const rect = videoRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const videoBottom = rect.bottom

    if (videoBottom > 0 && rect.top < windowHeight) {
      const progress = 1 - (rect.top + rect.height / 2) / (windowHeight + rect.height)
      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateParallax)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    updateParallax()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateParallax])

  const parallaxY = (scrollProgress - 0.5) * 30

  return (
    <section className="bg-background">
      <div ref={videoRef} className="relative aspect-[16/9] w-full md:aspect-[21/9] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
          alt="Torre de oficinas moderna"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            backfaceVisibility: "hidden",
            willChange: "transform",
          }}
        />
      </div>

      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`border-border p-6 md:p-8 text-center border-b border-r ${i % 2 === 1 ? "border-r-0" : ""} md:border-b-0 ${i < 3 ? "md:border-r" : "md:border-r-0"}`}
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            <p className="font-medium text-foreground text-3xl md:text-5xl">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
