import { useState, useEffect } from "react"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled
          ? "rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 24px 24px -12px"
          : "none",
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        <a href="#hero" className="text-lg font-medium tracking-tight transition-colors duration-300 text-foreground">
          BUILDCORE
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#technology" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
            Proyectos
          </a>
          <a href="#gallery" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
            Galería
          </a>
          <a href="#services" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
            Paquetes
          </a>
          <a href="#about" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
            Nosotros
          </a>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:opacity-80"
          >
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-colors md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <a href="#technology" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </a>
            <a href="#gallery" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Galería
            </a>
            <a href="#services" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Paquetes
            </a>
            <a href="#about" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </a>
            <a
              href="#contact"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
