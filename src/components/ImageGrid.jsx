import { useRef, useState, useEffect } from "react"

const features = [
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", alt: "Trabajadores en altura", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", alt: "Limpieza de fachada", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=800&q=80", alt: "Piso de hormigón pulido", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&q=80", alt: "Estructura metálica", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80", alt: "Casa residencial moderna", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80", alt: "Interior de oficina", span: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&q=80", alt: "Rascacielos de cristal", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80", alt: "Skyline urbano", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", alt: "Detalle arquitectónico", span: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=800&q=80", alt: "Cimientos de edificio", span: "col-span-1 row-span-1" },
]

function FadeImage({ src, alt, className }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(1.02)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    />
  )
}

export default function ImageGrid() {
  return (
    <section id="technology" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg border border-gray-200 ${feature.span}`}
            >
              <FadeImage
                src={feature.src}
                alt={feature.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
