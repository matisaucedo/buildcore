import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["Funciones", "Obras", "Precios", "Contacto"]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm border-b border-black/8" : "bg-bg"
      }`}
    >
      <nav className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-xl tracking-tight text-black">
          BuildCore
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contacto"
            className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-pill hover:bg-black/80 transition-colors duration-200"
          >
            Solicitar Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg border-t border-black/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-black/70 hover:text-black transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contacto"
                className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-pill text-center hover:bg-black/80 transition-colors"
              >
                Solicitar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
