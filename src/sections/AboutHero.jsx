import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.png'

export default function AboutHero() {
  return (
    <section
      className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0800 0%, #2a1000 30%, #3d1500 60%, #1a0040 100%)',
      }}
    >
      {/* BG wave */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center">
        <h1 className="font-['Barlow_Condensed'] font-black uppercase text-white text-5xl md:text-7xl tracking-wider mb-3">
          ABOUT US
        </h1>
        <p className="text-gray-300 text-sm mb-4">Lorem Ipsum Dolor Sit Amet</p>
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link to="/" className="text-[#FF4500] hover:text-orange-400 transition-colors">
            Home Page
          </Link>
          <span className="text-gray-500">&gt;</span>
          <span className="text-white">About Us</span>
        </div>
      </div>
    </section>
  )
}
