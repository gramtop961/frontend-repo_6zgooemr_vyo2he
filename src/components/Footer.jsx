const NAVY = '#0A1F44'
const ACCENT = '#E74C3C'

export default function Footer() {
  return (
    <footer className="mt-16" style={{background: NAVY}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-extrabold tracking-tight">Jejoustation</h4>
            <p className="text-white/70 mt-2">Premium international concierge — gourmet cakes, imported snacks, and trusted jastip.</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-6">
              <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/1f370.svg" alt="cake" className="w-8 h-8"/>
              <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/1f36b.svg" alt="chocolate" className="w-8 h-8"/>
              <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/1f6cd.svg" alt="shopping" className="w-8 h-8"/>
            </div>
          </div>
          <div className="md:text-right">
            <a href="https://t.me/jejoubakehouse" className="inline-block px-5 py-3 font-semibold rounded-md text-white hover:scale-[1.03] transition-transform" style={{background: ACCENT, boxShadow: '0 10px 30px -10px rgba(231,76,60,0.8)'}}>Chat on Telegram</a>
          </div>
        </div>
        <div className="mt-10 pt-6 text-sm text-white/70 border-t" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} Jejoustation. All rights reserved.</p>
            <span className="h-0.5 w-24 rounded" style={{background: ACCENT}}/>
          </div>
        </div>
      </div>
    </footer>
  )
}
