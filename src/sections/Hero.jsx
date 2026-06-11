import { useState } from 'react'
import heroBg from '../assets/hero-bg.png'
import headphoneblack from '../assets/headphone-black.png'
import headphonewhite from '../assets/headphone-white.jpg'
import headphonePink from '../assets/headphone-pink.jpg'
import headphoneorange from '../assets/1234836017141ff14e6c592fb7e335c4cfe450b2 (1).jpg'
import headphoneblue from '../assets/a71483f214e6045b069527d807dff677227f9ecb (1).jpg'

const thumbnails = [
  { img: headphonewhite, label: 'T450BT' },
  { img: headphonePink, label: 'TUNE 510' },
  { img: headphoneorange, label: 'LIVE 660' },
  { img: headphoneblue, label: 'JR310' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  return (
    <section
      className="relative h-[884px] overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center Spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 40%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-[1920px] mx-auto h-full">

        {/* LEFT CONTENT */}
        <div className="absolute left-[10%] top-[42%] -translate-y-1/2 w-[450px] z-20">

          <h1
            className="uppercase text-white"
            style={{
              fontFamily: 'Oswald',
              fontWeight: 400,
              Style: 'regular',
              fontSize: '58px',
              lineHeight: '83%',
              letterSpacing: '0px',
              case:'uppercase'
            }}
          >
            JUST PUT THE HEADPHONES ON,
            <br />
            AND GO WITH THE FLOW!
          </h1>

          <p
            className="mt-8 text-white/90"
            style={{
              fontFamily: 'Magra',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '125%',
              letterSpacing: '4%',
              paragraphSpacing: '17px',
              case:'Title Case'
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
            Ac tempor eu mollis nascetur convallis
            viverra lorem.
          </p>

          <button
  className="mt-10 uppercase text-white flex items-center justify-center"
  style={{
    width: '190px',
    height: '54px',
    borderRadius: '17px',
    border: '1px solid rgba(255,255,255,0.35)',
    background:
      'linear-gradient(180deg, #E84B07 0%, #791B43 100%)',
    boxShadow:
      '19px 4px 171.4px 0px rgba(0,0,0,0.25) inset',
    fontFamily: 'Oswald',
    fontWeight: 600,
    fontSize: '22px',
    style:'semibold',
    lineHeight: '83%',
    case:'uppercase',
    cursor: 'pointer',
  }}
>
  ORDER NOW
</button>
        </div>

        {/* HEADPHONE */}
        <div
          className="absolute right-[14%] top-[52%] -translate-y-1/2"
          style={{
            width: '650px',
            height: '650px',
          }}
        >
          {/* Pink Glow */}
          <div
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background:
                'radial-gradient(circle, rgba(212,78,134,0.35) 0%, transparent 70%)',
              transform: 'scale(.85)',
            }}
          />
<img
  src={headphoneblack}
  alt="Black Headphone"
  className="relative z-10 w-full h-full object-contain"
/>
        </div>

        {/* THUMBNAILS */}
        <div className="absolute right-[7%] top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {thumbnails.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-[64px] h-[64px] rounded-md overflow-hidden border-[3px] transition-all duration-300 ${
                active === i
                  ? 'border-[#D44E86]'
                  : 'border-gray-500'
              }`}
              style={{
                boxShadow:
                  '5px 5px 12px rgba(0,0,0,0.45)',
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`transition-all rounded-full ${
                active === i
                  ? 'w-3 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
