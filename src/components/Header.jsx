import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, Cake, IceCream } from 'lucide-react'

const NAVY = '#0A1F44'
const ACCENT = '#E74C3C'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md/80 shadow-lg' : ''}`} style={{background: scrolled ? 'rgba(10,31,68,0.75)' : NAVY}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="relative inline-flex items-center">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight">Jejoustation</span>
            </div>
            <span className="sr-only">Jejoustation</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#cakes" className="hover:opacity-90 transition flex items-center gap-2"><Cake size={18}/> Cakes</a>
            <a href="#snacks" className="hover:opacity-90 transition flex items-center gap-2"><IceCream size={18}/> Snacks</a>
            <a href="#jastip" className="hover:opacity-90 transition flex items-center gap-2"><ShoppingBag size={18}/> Jastip</a>
          </nav>

          <button className="md:hidden p-2 rounded hover:scale-105 active:scale-95 transition" aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>
      <span className="absolute top-2 right-3 w-2 h-2 rounded-full" style={{background: ACCENT}} aria-hidden/>
    </header>
  )
}
