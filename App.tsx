
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Rebates from './pages/Rebates';
import About from './pages/About';
import Contact from './pages/Contact';
import AIChatWidget from './components/AIChatWidget';
import UrgencyBanner from './components/UrgencyBanner';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <UrgencyBanner />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rebates" element={<Rebates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIChatWidget />
        
        {/* Persistent Emergency Call Button for Mobile */}
        <div className="fixed bottom-4 left-4 z-50 md:hidden">
          <a 
            href="tel:6477465959" 
            className="emergency-orange text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 font-bold animate-pulse"
          >
            <PhoneIcon className="w-6 h-6" />
            Call Now
          </a>
        </div>
      </div>
    </Router>
  );
};

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default App;
