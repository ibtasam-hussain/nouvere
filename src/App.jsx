import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Packages from './components/packages';
import Team from './components/team';
import ScrollToTop from './components/ScrollToTop';
import PortfolioSection from './components/portfolio';
import BestFeatures from './components/BestFeatures';
import Articles from './components/articles';
import ContactUS from './components/contactus';
import Testimonial from './components/Testimonials';
import Client from './components/clients';
import Icons from './components/icons';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BestFeatures />
              <PortfolioSection showAll={false} />
              <Client />
              <Packages />
              <Testimonial />
              <Articles showAll={false} />
              <ContactUS />
            </>
          }
        />

        {/* Full Portfolio Page */}
        <Route
          path="/portfolio"
          element={
            <section className="min-h-screen bg-gray-900 text-white pt-20 px-4">
              <PortfolioSection showAll={true} />
            </section>
          }
        />

        {/* Full Articles Page */}
        <Route
          path="/articles"
          element={
            <section className="min-h-screen bg-gray-900 text-white pt-20 px-4">
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
