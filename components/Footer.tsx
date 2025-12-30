
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="trust-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider">Absolute Heating & Cooling</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Mississauga's trusted HVAC specialists. Providing professional heating, cooling, and water heater solutions for over a decade.
            </p>
            <div className="flex gap-4">
              <span className="bg-white/10 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </span>
              <span className="bg-white/10 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b border-white/20 pb-2">Our Services</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link to="/services" className="hover:text-emergency-orange transition">Furnace Repair & Installation</Link></li>
              <li><Link to="/services" className="hover:text-emergency-orange transition">AC Installation & Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-emergency-orange transition">Heat Pump Solutions</Link></li>
              <li><Link to="/services" className="hover:text-emergency-orange transition">Tankless Water Heaters</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link to="/about" className="hover:text-emergency-orange transition">About Us</Link></li>
              <li><Link to="/rebates" className="hover:text-emergency-orange transition">Ontario Rebates Guide</Link></li>
              <li><Link to="/contact" className="hover:text-emergency-orange transition">Contact Support</Link></li>
              <li><Link to="/contact" className="hover:text-emergency-orange transition">Request a Quote</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b border-white/20 pb-2">Contact Info</h3>
            <div className="space-y-3 text-blue-100 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <p>3092 Mavis Rd, Mississauga,<br/>ON L5L 5X1 (Mississauga Flea Market)</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:6477465959" className="hover:text-emergency-orange font-bold">(647) 746-5959</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200">
          <p>© {new Date().getFullYear()} Absolute Heating & Cooling Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>TSSA Certified</span>
            <span>Licensed & Insured</span>
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
