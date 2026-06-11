import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../sections/AboutHero'
'

export default function About() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
      
      </main>
      <Footer />
    </div>
  )
}
