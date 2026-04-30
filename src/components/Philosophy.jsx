import { useEffect, useRef, useState, useCallback } from "react"

const titles = [
  "Entregado a Tiempo.",
  "Cero Defectos.",
  "Transparencia Total.",
]

function ScrollRevealText({ text }) {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const startOffset = windowHeight * 0.8
      const endOffset = windowHeight * 0.2
      const totalDistance = startOffset - endOffset
      const currentPosition = startOffset - rect.top
      setProgress(Math.max(0, Math.min(1, currentPosition / totalDistance)))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const words = text.split(" ")

  return (
    <p ref={containerRef} className="mt-8 leading-relaxed text-muted-foreground text-xl md:text-2xl lg:text-3xl text-center">
      {words.map((word, index) => {
        const wordProgress = Math.max(0, Math.min(1, progress * words.length - index))
        return (
          <span
            key={index}
            style={{
              opacity: wordProgress,
              filter: `blur(${(1 - wordProgress) * 40}px)`,
              transition: "opacity 0.3s ease, filter 0.3s ease",
            }}
          >
            {word}{index < words.length - 1 ? " " : ""}
          </span>
        )
      })}
    </p>
  )
}

export default function Philosophy() {
  const sectionRef = useRef(null)
  const descriptionRef = useRef(null)
  const [titleOpacity, setTitleOpacity] = useState(0)
  const rafRef = useRef(null)

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const sectionHeight = sectionRef.current.offsetHeight
    const scrollableRange = sectionHeight - windowHeight
    const scrolled = -rect.top
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange))
    setTitleOpacity(progress)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateTransforms)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    updateTransforms()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateTransforms])

  return (
    <section id="products" className="bg-background">
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl px-4">
            <div
              className="flex items-center justify-center pointer-events-none"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full" style={{ transformStyle: "preserve-3d", minHeight: "150px" }}>
                {titles.map((title, index) => {
                  const isLastText = index === titles.length - 1
                  const segmentSize = 1 / titles.length
                  const startProgress = index * segmentSize
                  const endProgress = (index + 1) * segmentSize

                  let rotateX = 0
                  let opacity = 0

                  if (titleOpacity >= startProgress && titleOpacity < endProgress) {
                    const localProgress = (titleOpacity - startProgress) / segmentSize
                    rotateX = (1 - localProgress) * 90
                    opacity = localProgress
                  } else if (titleOpacity >= endProgress) {
                    if (isLastText) { rotateX = 0; opacity = 1 }
                    else { rotateX = -90; opacity = 0 }
                  } else {
                    rotateX = 90; opacity = 0
                  }

                  return (
                    <h2
                      key={index}
                      className="absolute inset-0 flex items-center justify-center font-medium leading-tight tracking-tighter text-foreground text-center px-4"
                      style={{
                        fontSize: "clamp(1.8rem, 6vw, 5.5rem)",
                        transform: `rotateX(${rotateX}deg) translateZ(0)`,
                        opacity,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        willChange: "transform, opacity",
                      }}
                    >
                      {title}
                    </h2>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={descriptionRef} className="px-6 pt-8 pb-20 md:px-12 md:pt-12 md:pb-28 lg:px-20 lg:pt-16 lg:pb-36">
        <div className="text-center">
          <ScrollRevealText text="Una constructora que combina excelencia técnica con transparencia absoluta — diseñada para clientes que exigen resultados, no excusas. Cada proyecto es una promesa que cumplimos." />
        </div>
      </div>
    </section>
  )
}
