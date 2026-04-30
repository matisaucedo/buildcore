import { useEffect, useRef, useState } from "react"

function ScrollRevealText({ text }) {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const startOffset = windowHeight * 0.9
      const endOffset = windowHeight * 0.1
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
    <p
      ref={containerRef}
      className="text-xl font-semibold leading-snug text-white md:text-3xl lg:text-5xl"
    >
      {words.map((word, index) => {
        const appearProgress = progress * (words.length + 1)
        const wordAppearProgress = Math.max(0, Math.min(1, appearProgress - index))
        return (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: wordAppearProgress,
              filter: `blur(${(1 - wordAppearProgress) * 40}px)`,
              transition: "opacity 0.1s linear, filter 0.1s linear",
              marginRight: "0.3em",
            }}
          >
            {word}
          </span>
        )
      })}
    </p>
  )
}

const sideImages = [
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    alt: "Obra en progreso",
    position: "left",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    alt: "Fachada industrial",
    position: "right",
  },
]

const textCycles = [
  "Gestión de Proyectos.",
  "Excelencia Estructural.",
  "Entrega Inteligente.",
]

const mainImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
]

const descriptionText = "Nuestra metodología de construcción integra tecnología BIM, gestión lean y equipos especializados para garantizar proyectos sin sorpresas. Desde los cimientos hasta la entrega final, cada etapa es controlada con precisión milimétrica para maximizar calidad, eficiencia y seguridad."

export default function TechSection() {
  const sectionRef = useRef(null)
  const textSectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollableHeight = window.innerHeight * 4
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight))
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const titleOpacity = Math.max(0, 1 - scrollProgress / 0.2)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8))

  const centerWidth = 100 - imageProgress * 58
  const centerHeight = 100 - imageProgress * 30
  const sideWidth = imageProgress * 22
  const sideOpacity = imageProgress
  const sideTranslateLeft = -100 + imageProgress * 100
  const sideTranslateRight = 100 - imageProgress * 100
  const gap = imageProgress * 16

  return (
    <section ref={sectionRef} className="relative bg-foreground">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
          >
            {/* Left */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${sideWidth}%`,
                height: "100%",
                transform: `translateX(${sideTranslateLeft}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <img key={idx} src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
              ))}
            </div>

            {/* Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{ width: `${centerWidth}%`, height: "100%", flex: "0 0 auto" }}
            >
              {mainImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Construcción ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: i === 0 ? 1 : Math.max(0, Math.min(1, (scrollProgress - (i * 0.3 - 0.2)) / 0.2)),
                    transition: "opacity 0.3s ease",
                  }}
                />
              ))}

              <div className="absolute inset-0 bg-foreground/40" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                {textCycles.map((text, cycleIndex) => {
                  const cycleStart = cycleIndex / textCycles.length
                  const cycleEnd = (cycleIndex + 1) / textCycles.length
                  const words = text.split(" ")

                  return (
                    <h2
                      key={cycleIndex}
                      className="absolute max-w-3xl font-medium leading-tight tracking-tight text-white text-3xl md:text-5xl lg:text-7xl"
                    >
                      {words.map((word, wordIndex) => {
                        let wordOpacity = 0
                        let wordBlur = 40

                        if (scrollProgress >= cycleStart && scrollProgress < cycleEnd) {
                          const localProgress = (scrollProgress - cycleStart) / (cycleEnd - cycleStart)
                          if (localProgress < 0.5) {
                            const ap = (localProgress / 0.5) * (words.length + 1)
                            const wap = Math.max(0, Math.min(1, ap - wordIndex))
                            wordOpacity = wap
                            wordBlur = (1 - wap) * 40
                          } else {
                            const dp = ((localProgress - 0.5) / 0.5) * (words.length + 1)
                            const wdp = Math.max(0, Math.min(1, dp - wordIndex))
                            wordOpacity = 1 - wdp
                            wordBlur = wdp * 40
                          }
                        }

                        return (
                          <span
                            key={wordIndex}
                            className="inline-block"
                            style={{
                              opacity: wordOpacity,
                              filter: `blur(${wordBlur}px)`,
                              transition: "opacity 0.1s linear, filter 0.1s linear",
                              marginRight: "0.3em",
                            }}
                          >
                            {word}
                          </span>
                        )
                      })}
                    </h2>
                  )
                })}
              </div>
            </div>

            {/* Right */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${sideWidth}%`,
                height: "100%",
                transform: `translateX(${sideTranslateRight}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <img key={idx} src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400vh]" />

      <div
        ref={textSectionRef}
        className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 bg-black"
      >
        <div
          className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
          style={{ height: "150px", background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <ScrollRevealText text={descriptionText} />
        </div>
      </div>
    </section>
  )
}
