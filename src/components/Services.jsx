import { useRef, useState, useEffect } from "react"

const packages = [
  {
    id: 1,
    name: "Residencial",
    description: "Casas personalizadas y edificios multifamiliares hasta 500m² con gestión integral y materiales premium.",
    price: "Desde $85.000",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
  },
  {
    id: 2,
    name: "Comercial",
    description: "Oficinas y desarrollos comerciales diseñados para rendimiento, estética y valor a largo plazo.",
    price: "Desde $250.000",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 3,
    name: "Empresarial",
    description: "Desarrollos industriales y de uso mixto a gran escala, construidos a medida con equipos dedicados.",
    price: "A consultar",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
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
        transition: "opacity 0.7s ease-out",
      }}
    />
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Nuestros Paquetes
        </h2>
      </div>

      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group flex-shrink-0 w-[75vw] snap-center">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">{pkg.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <span className="text-lg font-medium text-foreground">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">{pkg.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
