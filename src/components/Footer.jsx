const links = ["Funciones", "Obras", "Precios", "Privacidad"]

export default function Footer() {
  return (
    <footer className="bg-bgDark border-t border-white/8 py-10">
      <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-lg text-white tracking-tight">
          BuildCore
        </a>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6 justify-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/35 hover:text-white/60 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white/25">
          &copy; 2025 BuildCore. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
