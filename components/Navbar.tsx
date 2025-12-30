
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Rebates', path: '/rebates' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-extrabold text-trust-blue leading-tight tracking-tight uppercase">
                Absolute
              </span>
              <span className="text-sm font-semibold text-emergency-orange tracking-widest uppercase -mt-1">
                Heating & Cooling
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path) ? 'text-emergency-orange' : 'text-slate-600 hover:text-trust-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:6477465959" 
              className="emergency-orange text-white px-5 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2"
            >
              (647) 746-5959
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-trust-blue focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 shadow-lg absolute w-full">
          <div className="px-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-bold ${
                  isActive(link.path) ? 'bg-orange-50 text-emergency-orange' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:6477465959" 
              className="block w-full text-center emergency-orange text-white px-3 py-4 rounded-md font-extrabold text-lg mt-4"
            >
              CALL (647) 746-5959
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
