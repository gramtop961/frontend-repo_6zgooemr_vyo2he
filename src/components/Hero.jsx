import { motion } from 'framer-motion'

const NAVY = '#0A1F44'
const ACCENT = '#E74C3C'

export default function Hero() {
  return (
    <section className="relative pt-24" style={{background: NAVY}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Premium Concierge for Gourmet Cakes, Imported Snacks, and Trusted Jastip
            </motion.h1>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, delay: 0.1}}
              className="mt-4 text-lg text-white/90"
            >
              Jejoustation delivers luxury flavors and international finds directly to your door.
            </motion.p>
            <motion.a
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, delay: 0.2}}
              href="https://t.me/jejoubakehouse?text=Hello%20Jejoustation!%20I%27d%20love%20to%20order."
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-6 py-3 font-semibold rounded-md text-white shadow-[0_10px_30px_-10px_rgba(231,76,60,0.8)] hover:shadow-[0_14px_40px_-10px_rgba(231,76,60,0.9)] transition-transform hover:scale-[1.03]"
              style={{background: ACCENT}}
            >
              Start Your Request
            </motion.a>
          </div>

          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.7, delay: 0.15}}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1400&auto=format&fit=crop"
                alt="Gourmet cake and imported snacks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg" style={{background: 'linear-gradient(135deg, rgba(231,76,60,0.9), rgba(231,76,60,0.5))'}}/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
