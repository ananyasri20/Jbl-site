

import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiPhone, FiMail } from 'react-icons/fi'
import jblLogo from '../assets/jbl-logo.png'

const cities = [
  { name: 'New York', address: '2844 Bay Street' },
  { name: 'Paris', address: '65 Rue Blvd Street' },
  { name: 'Rome', address: '5946 Roma East Blvd' },
  { name: 'London', address: '2321 Primus Drive' },
  { name: 'Athens', address: '5040 Rome Street' },
  { name: 'India', address: 'Bangalore' },
]

const cityIcons = ['🗽', '🗼', '🏛️', '🏰', '🏛️', '🕌']

export default function Footer() {
return (
  <footer className="relative bg-[#0b0b0b] overflow-hidden">
    {/* Background Texture */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `url(${footerBg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    {/* Purple Decorative Circle */}
    <div className="absolute left-[18%] bottom-[100px] w-[280px] h-[280px] rounded-full bg-purple-900/20 blur-sm" />

    <div className="relative z-10 max-w-[1200px] mx-auto px-8">

      {/* City Row */}
      <div className="pt-12">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {cities.map((city, i) => (
            <div key={city.name} className="flex items-center gap-2">
              <span className="text-white text-2xl">{cityIcons[i]}</span>

              <div>
                <p className="text-white text-sm uppercase font-semibold">
                  {city.name}
                </p>

                <p className="text-white/40 text-[10px]">
                  {city.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-[#ff4d00] mt-6 opacity-70" />
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12">

        {/* Brand */}
        <div>
          <img
            src={jblLogo}
            alt="JBL"
            className="w-14 mb-6"
          />

          <p className="text-white/60 text-xs leading-6 mb-6">
            The Call Center Is Open On Weekdays From
            9:00 To 20:00 And On Weekends From
            9:00 To 18:00
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <FiPhone />
              <span>91+4563212366</span>
            </div>

            <div className="flex items-center gap-2 text-white/60 text-xs">
              <FiMail />
              <span>abc12@gmail.com</span>
            </div>
          </div>

          <h4 className="text-[#ff4d00] uppercase text-lg font-condensed mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4 text-white/60">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
            <FiLinkedin />
            <FiYoutube />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-[#ff4d00] uppercase text-xl mb-6">
            Shop
          </h4>

          <ul className="space-y-3 text-white/60 text-sm">
            {[
              'Featured',
              'Headphone',
              'Gaming',
              'Speaker',
              'Soundbars',
              'Professional',
              'Offer Zone',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[#ff4d00] uppercase text-xl mb-6">
            Support
          </h4>

          <ul className="space-y-3 text-white/60 text-sm">
            {[
              'Order Status',
              'Bulk Purchase Program',
              'Buly Authentic',
              'Product Support',
              'Shipping Policy',
              'Refund Policy',
              'Service Center',
              'Brand Stores',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-8">
            <h4 className="text-[#ff4d00] uppercase text-lg mb-2">
              Sustainability 🌿
            </h4>

            <p className="text-white/60 text-sm">
              Follow Our Efforts
            </p>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-[#ff4d00] uppercase text-xl mb-6">
            About Us
          </h4>

          <ul className="space-y-3 text-white/60 text-sm">
            {[
              'Harman Corporate',
              'Privacy Policy',
              'Cookie Policy',
              'Cookie Setting',
              'Warranty Policy',
              'Terms Of Use',
              'Why Buy Direct',
              'JBL Sound Partners',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Product Support */}
        <div>
          <h4 className="text-[#ff4d00] uppercase text-xl mb-6">
            Product Support
          </h4>

          <div className="text-white/60 text-sm leading-7">
            <p className="text-white font-semibold mb-2">
              Manufactured By:
            </p>

            <p className="mb-6">
              Harman International Industries, Inc
              8500 Balboa Blvd,
              Northridge, CA91329, USA
            </p>

            <p className="text-white font-semibold mb-2">
              Imported By:
            </p>

            <p>
              Harman International (India) Pvt Ltd,
              Salarpuria Sattva Knowledge Court,
              Bangalore-560048
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#ff4d00]/20 py-6 flex justify-between items-center flex-wrap gap-4">

        <p className="text-white/40 text-[11px] uppercase">
          JBL © 2024 Created By Sayan Roy. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-white/30 text-[11px] uppercase">
          <span>Harman</span>
          <span>AKG</span>
          <span>Infinity</span>
          <span>JBL</span>
          <span>Revel</span>
          <span>Lexicon</span>
          <span>Harman Kardon</span>
        </div>
      </div>
    </div>

    {/* Huge JBL Logo */}
    <div className="absolute right-10 bottom-4 pointer-events-none">
      <h1
        style={{
          fontFamily: 'Oswald',
          fontSize: '180px',
          fontWeight: 700,
          color: '#ff4d00',
          textShadow:
            '18px 10px 0 rgba(255,255,255,0.15)',
        }}
      >
        JBL
      </h1>
    </div>
  </footer>
  )
}