import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAVY = '#0A1F44'
const ACCENT = '#E74C3C'

const testimonials = [
  { name: 'Ayla', location: 'Jakarta', photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop', text: 'Super trustworthy! My skincare arrived perfectly sealed and fast.' },
  { name: 'Nadia', location: 'Bandung', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', text: 'The strawberry shortcake is divine. Texture and sweetness on point.' },
  { name: 'Maya', location: 'Surabaya', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop', text: 'My favorite jastip for Japanese snacks. Always authentic and fresh.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[index]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-extrabold mb-8 text-center" style={{color: NAVY}}>What Our Clients Say</h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={t.name}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.6}}
            className="grid md:grid-cols-[220px,1fr] gap-6 items-center rounded-xl p-6"
            style={{background: '#FFFFFF', border: `1px solid ${NAVY}`}}
          >
            <div className="flex items-center gap-4">
              <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full object-cover"/>
              <div>
                <p className="font-semibold" style={{color: NAVY}}>{t.name}</p>
                <p className="text-sm text-gray-600">{t.location}</p>
                <div className="flex text-red-500 mt-1" style={{color: ACCENT}}>
                  {Array.from({length: 5}).map((_, i) => <Star key={i} size={16} fill={ACCENT} color={ACCENT} />)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{t.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
