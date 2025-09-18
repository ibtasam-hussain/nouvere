import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Packages from "./components/packages";
import Team from "./components/team";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioSection from "./components/portfolio";
import BestFeatures from "./components/BestFeatures";
import Articles from "./components/articles";
import ContactUS from "./components/contactus";
import Testimonial from "./components/Testimonials";
import Client from "./components/clients";
import Loader from "./components/loader";

// Import all images from assets
import aboutus from "./assets/aboutus.svg";
import bae from "./assets/Bae.JPG";
import bestfeaturesBG from "./assets/bestfeaturesBG.svg";
import bg from "./assets/bg.avif";
import bird from "./assets/bird.svg";
import bodyBG from "./assets/bodyBG.svg";
import CUBg from "./assets/CUbg.png";
import footerImg from "./assets/footer.svg";
import hoverBird from "./assets/hoverBird.svg";
import logo from "./assets/logo.svg";
import OSbg from "./assets/OSbg.png";
import Pbg from "./assets/Pbg.png";
import t from "./assets/t.jpg";
import Tbg from "./assets/Tbg.png";

function App() {
  const [loading, setLoading] = useState(true);

  // Preload all assets images
  useEffect(() => {
    const imageList = [
      aboutus,
      bae,
      bestfeaturesBG,
      bg,
      bird,
      bodyBG,
      CUBg,
      footerImg,
      hoverBird,
      logo,
      OSbg,
      Pbg,
      t,
      Tbg,
    ];

    let loadedCount = 0;

    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageList.length) {
          setLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageList.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>

              <BestFeatures />

              <section id="portfolio">
                <PortfolioSection showAll={false} />
              </section>

              <Client />
              <section id="packages">
                <Packages />
              </section>

              <Testimonial />

              <section id="team">
                <Articles showAll={false} />
              </section>

              {/* <section id="team">
                <Team />
              </section> */}
              <section id="contact">
                <ContactUS />
              </section>
            </>
          }
        />

        {/* Full Portfolio Page */}
        <Route
          path="/portfolio"
          element={
            <section
              id="portfolio"
              className="min-h-screen bg-gray-900 text-white pt-20 px-4"
            >
              <PortfolioSection showAll={true} />
            </section>
          }
        />

        {/* Full Articles Page */}
        <Route
          path="/articles"
          element={
            <section
              id="articles"
              className="min-h-screen bg-gray-900 text-white pt-20 px-4"
            >
              <Articles showAll={true} />
            </section>
          }
        />
      </Routes>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
