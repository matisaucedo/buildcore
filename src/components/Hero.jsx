import { useEffect, useRef, useState } from "react"

const word = "BUILDCORE"

const sideImages = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    alt: "Detalle de estructura de acero",
    position: "left",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Equipo trabajando en obra",
    position: "left",
  },
  {
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    alt: "Edificio residencial moderno",
    position: "right",
  },
  {
    src: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&q=80",
    alt: "Torre corporativa al atardecer",
    position: "right",
  },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollableHeight = window.innerHeight * 2
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight))
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textOpacity = Math.max(0, 1 - scrollProgress / 0.2)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8))

  const centerWidth = 100 - imageProgress * 80
  const sideWidth = imageProgress * 40
  const sideOpacity = imageProgress
  const sideTranslateLeft = -100 + imageProgress * 100
  const sideTranslateRight = 100 - imageProgress * 100
  const gap = imageProgress * 8
  const sideTranslateY = -(imageProgress * 15)

  return (
    <section ref={sectionRef} id="hero" className="relative bg-background">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >
            {/* Left Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div key={idx} className="relative h-full overflow-hidden will-change-transform flex-1">
                  <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{ width: `${centerWidth}%`, height: "100%", flex: "0 0 auto" }}
            >
              <div
                className="absolute inset-0 z-0 flex items-center justify-center"
                style={{ opacity: textOpacity, transform: "translateY(-200px)" }}
              >
                <h1 className="whitespace-nowrap font-bold leading-[0.8] tracking-tighter text-black"
                  style={{ fontSize: "20vw" }}>
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.06}s`,
                        transition: "all 1.5s",
                        transitionTimingFunction: "cubic-bezier(0.86,0,0.07,1)",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>

              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
                alt="Estructura de construcción moderna"
                className="absolute inset-0 z-10 w-full h-full object-cover"
              />
            </div>

            {/* Right Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div key={idx} className="relative h-full overflow-hidden will-change-transform flex-1">
                  <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20"
        style={{ opacity: textOpacity }}
      >
        <p className="mx-auto max-w-2xl text-center text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Construimos con precisión,<br />entregamos con certeza.
        </p>
      </div>

      <div className="h-[200vh]" />
    </section>
  )
}
