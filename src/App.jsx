import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom' // ✅ for routing
import './App.css'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Hero from './components/hero'
import Packages from './components/packages'
import Team from './components/team'
import ScrollToTop from './components/ScrollToTop'
import PortfolioSection from './components/portfolio'
import BestFeatures from './components/BestFeatures'
import Intro from './assets/intro.mp4'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowIntro(false)
  //   }, 5000)
  //   return () => clearTimeout(timer)
  // }, [])

  // if (showIntro) {
  //   return (
  //     <video className="intro-video" autoPlay muted onEnded={() => setShowIntro(false)}>
  //       <source src={Intro} type="video/mp4" />
  //       Your browser does not support the video tag.
  //     </video>
  //   )
  // }

  return (
    <>
      <Navbar />

      {/* Main Routing Area */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BestFeatures />
              <PortfolioSection />
              <Packages />
              {/* <Team /> */}
              {/* <Testimonials /> */}
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <section className="min-h-screen bg-gray-900 text-white pt-20 px-4">
              <PortfolioSection showAll={true} />
            </section>
          }
        />
      </Routes>
<ScrollToTop />
      <Footer />
    </>
  )
}

export default App
