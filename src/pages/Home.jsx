import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}