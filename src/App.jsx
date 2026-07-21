import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import ScrollToTop from './components/ui/ScrollToTop'
import SplashScreen from './components/ui/SplashScreen'
import NotFound from './pages/NotFound'

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </>
)

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-black'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
