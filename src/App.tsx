import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Solutions } from './components/Solutions'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-500/20 selection:text-red-600">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Solutions />
        <HowItWorks />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App
