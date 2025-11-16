import { motion } from 'framer-motion'

const NAVY = '#0A1F44'
const ACCENT = '#E74C3C'

const items = [
  { name: 'Japan Skincare Drop', price: 'From $8 service fee', depart: 'Tokyo → Jakarta · 12 Dec', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Korean Mart Run', price: 'From $5 service fee', depart: 'Seoul → Bandung · 15 Dec', img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1200&auto=format&fit=crop' },
  { name: 'EU Chocolate Hunt', price: 'From €7 service fee', depart: 'Paris → Bali · 20 Dec', img: 'https://images.unsplash.com/photo-1481391319762-47dff72954d1?q=80&w=1200&auto=format&fit=crop' },
]

export default function JastipCards() {
  return (
    <section id="jastip" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-extrabold mb-8" style={{color: NAVY}}>Trusted Jastip Schedules</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <a
              key={p.name}
              href={`https://t.me/jejoubakehouse?text=${encodeURIComponent(`Is the product ${p.name} available? Is it ready?`)}`}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                whileHover={{scale: 1.02, boxShadow: '0 14px 40px -10px rgba(231,76,60,0.45)'}}
                transition={{type: 'spring', stiffness: 260, damping: 18}}
                className="rounded-xl overflow-hidden bg-white border group"
                style={{borderColor: NAVY}}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1" style={{color: NAVY}}>{p.name}</h4>
                  <p className="text-sm text-gray-600">{p.depart}</p>
                  <p className="mt-2 font-semibold" style={{color: ACCENT}}>{p.price}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
