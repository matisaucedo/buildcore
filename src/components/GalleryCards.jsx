import { useEffect, useRef, useState, useCallback } from "react"

const images = [
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80", alt: "Obra residencial en altura" },
  { src: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1600&q=80", alt: "Proyecto comercial finalizado" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80", alt: "Estructura industrial" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80", alt: "Torre corporativa BUILDCORE" },
]

export default function GalleryCards() {
  const galleryRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef(null)

  const updateTransform = useCallback(() => {
    if (!galleryRef.current) return
    const rect = galleryRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const sectionHeight = galleryRef.current.offsetHeight
    const scrollableRange = sectionHeight - windowHeight
    const scrolled = -rect.top
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange))
    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateTransform)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    updateTransform()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateTransform])

  const isLastImage = images.length - 1
  const fullscreenStartProgress = 0.6
  const fullscreenProgress = Math.max(0, Math.min(1, (scrollProgress - fullscreenStartProgress) / (1 - fullscreenStartProgress)))
  const easedFullscreenProgress = 1 - Math.pow(1 - fullscreenProgress, 3)

  return (
    <section
      id="gallery"
      ref={galleryRef}
      className="relative bg-black"
      style={{ minHeight: `${(images.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl h-[55vh] md:h-[80vh]">
          {images.map((image, index) => {
            const isLast = index === isLastImage
            const imageProgress = scrollProgress * images.length - index
            const stackProgress = Math.max(0, Math.min(1, imageProgress))

            let translateY = (1 - stackProgress) * 100
            let scale = 0.8 + stackProgress * 0.2
            let opacity = stackProgress

            if (isLast) {
              const normalScale = 0.8 + stackProgress * 0.2
              const expandedScale = 1 + easedFullscreenProgress * 0.8
              scale = normalScale + Math.max(0, stackProgress - 0.8) * 5 * (expandedScale - normalScale)
            }

            const zIndex = index
            const borderRadius = isLast && easedFullscreenProgress > 0.3
              ? (1 - easedFullscreenProgress) * 16
              : undefined

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  zIndex,
                  transform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  opacity,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"
                  style={{ borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
