import "@fontsource/inter"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Philosophy from "./components/Philosophy"
import ImageGrid from "./components/ImageGrid"
import TechSection from "./components/TechSection"
import GalleryCards from "./components/GalleryCards"
import Services from "./components/Services"
import StatsBar from "./components/StatsBar"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Philosophy />
      <ImageGrid />
      <TechSection />
      <GalleryCards />
      <Services />
      <StatsBar />
      <Testimonials />
      <Footer />
    </main>
  )
}
