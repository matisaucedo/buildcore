export default function Testimonials() {
  return (
    <section id="about" className="bg-background">
      <div className="relative aspect-[16/9] w-full">
        <img
          src="https://images.unsplash.com/photo-1569154941061-e231b4aa8502?w=1600&q=80"
          alt="Proyecto insignia BUILDCORE en el paisaje urbano"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug text-center">
            Un socio constructor que combina excelencia técnica con transparencia total — creado para clientes que exigen resultados, no excusas.
          </p>
        </div>
      </div>
    </section>
  )
}
