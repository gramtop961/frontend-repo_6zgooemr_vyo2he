import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAVY = '#0A1F44'
const ACCENT = '#E74C3C'

const categories = [
  {
    key: 'cakes',
    title: 'Signature Cakes',
    banner: {
      bg: '#FFFFFF',
      border: NAVY,
      accent: ACCENT,
    },
    items: [
      { name: 'Belgian Chocolate Truffle', img: 'https://images.unsplash.com/photo-1605451433373-dc0c43a7e56a?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Strawberry Shortcake', img: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Matcha Opera', img: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=1200&auto=format&fit=crop' },
    ],
  },
  {
    key: 'snacks',
    title: 'Imported Frozen Snacks',
    banner: {
      bg: '#FFFFFF',
      border: NAVY,
      accent: ACCENT,
    },
    items: [
      { name: 'Korean Corn Dog', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Takoyaki Pack', img: 'https://images.unsplash.com/photo-1617093727343-374698b1c096?q=80&w=1200&auto=format&fit=crop' },
      { name: 'French Butter Croissant', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop' },
    ],
  },
]

export default function HighlightGrid() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % categories.length), 4000)
    return () => clearInterval(t)
  }, [])

  const cat = categories[index]

  return (
    <section className="py-16" style={{background: '#FFFFFF'}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.key}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.6}}
            className="space-y-6"
          >
            <div
              className="w-full rounded-xl p-6 flex items-center justify-between"
              style={{
                background: cat.banner.bg,
                border: `1px solid ${cat.banner.border}`,
                boxShadow: '0 10px 30px rgba(10,31,68,0.06)'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-1 h-16 rounded" style={{background: cat.banner.accent}}/>
                <h3 className="text-2xl font-bold" style={{color: NAVY}}>{cat.title}</h3>
              </div>
              <div className="text-sm text-gray-500">600 x 175</div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <a
                  key={item.name}
                  href={`https://t.me/jejoubakehouse?text=${encodeURIComponent(`Is the product ${item.name} available? Is it ready?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl overflow-hidden bg-white border" style={{borderColor: NAVY}}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold" style={{color: NAVY}}>{item.name}</h4>
                      <p className="text-sm text-gray-500">Tap to enquire on Telegram</p>
                    </div>
                    <div className="w-2 h-2 rounded-full" style={{background: ACCENT}}/>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
