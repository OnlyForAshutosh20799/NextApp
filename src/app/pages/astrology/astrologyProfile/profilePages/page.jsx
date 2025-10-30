
import Footer from '../profilePagesComponents/layout/Footer'
import Hero from '../profilePagesComponents/Hero'
import About from '../profilePagesComponents/About'
import Services from '../profilePagesComponents/Services'
import Expertise from '../profilePagesComponents/Expertise'
import HoroscopePackages from '../profilePagesComponents/HoroscopePackages'
import ZodiacGrid from '../profilePagesComponents/ZodiacGrid'
import SuccessStories from '../profilePagesComponents/SuccessStories'
import Contact from '../profilePagesComponents/Contact'
import Header from '../profilePagesComponents/layout/Header'


export default function Home() {
     
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <HoroscopePackages />
      <ZodiacGrid />
      <SuccessStories />
      <Contact />
      <Footer />
    </main>
  )
}