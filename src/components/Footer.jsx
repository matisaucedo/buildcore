const footerLinks = {
  explorar: [
    { label: "Proyectos", href: "#products" },
    { label: "Tecnología", href: "#technology" },
    { label: "Galería", href: "#gallery" },
    { label: "Paquetes", href: "#services" },
  ],
  empresa: [
    { label: "Nuestra Historia", href: "#" },
    { label: "Equipo", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  servicio: [
    { label: "FAQ", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Garantía", href: "#" },
    { label: "Seguridad", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div id="contact" className="grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <a href="#hero" className="text-lg font-medium text-foreground">
              BUILDCORE
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Construcción de precisión que combina ingeniería avanzada con gestión transparente y entrega garantizada.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explorar</h4>
            <ul className="space-y-3">
              {footerLinks.explorar.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Servicio</h4>
            <ul className="space-y-3">
              {footerLinks.servicio.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">2026 BUILDCORE. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Instagram</a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">LinkedIn</a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
