import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HighlightGrid from './components/HighlightGrid'
import JastipCards from './components/JastipCards'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const NAVY = '#0A1F44'
const ACCENT = '#E74C3C'

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700')
      obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white" style={{fontFamily: 'Inter, system-ui'}}>
      <Header />
      <main>
        <div data-animate>
          <Hero />
        </div>

        <div data-animate>
          <HighlightGrid />
        </div>

        <div data-animate>
          <JastipCards />
        </div>

        <section className="py-8 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-2" style={{color: NAVY}}>Blog Jejoustation</h2>
            <p className="text-gray-600">Stories, sourcing trips, and tasting notes from around the world.</p>
          </div>
        </section>

        <div data-animate>
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  )
}
