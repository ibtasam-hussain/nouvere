import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import Articles from './components/articles' // ✅ FIXED
import ContactUS from './components/contactus'
import Testimonial from './components/Testimonials'
import Client from './components/clients'
import Icons from './components/icons'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  // If you want to auto-hide intro after 5s uncomment this:
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowIntro(false)
  //   }, 5000)
  //   return () => clearTimeout(timer)
  // }, [])

  // Optional intro video screen
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Icons/>
              <BestFeatures />
              <Testimonial/>
              <PortfolioSection />
              <Client/>
              <Packages />
              <Articles />
              <ContactUS />
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
