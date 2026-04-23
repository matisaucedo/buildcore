import "@fontsource/inter"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import StatsBar from "./components/StatsBar"
import About from "./components/About"
import Services from "./components/Services"
import WhyUs from "./components/WhyUs"
import Testimonials from "./components/Testimonials"
import WhyChoose from "./components/WhyChoose"
import FAQ from "./components/FAQ"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-bg text-black font-sans">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <WhyChoose />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
