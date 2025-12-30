
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="trust-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our HVAC Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Professional solutions for every season. We specialize in high-efficiency equipment tailored for the GTA climate.
          </p>
        </div>
      </section>

      {/* Furnace Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-trust-blue">Furnace Repair & Installation</h2>
            <div className="w-20 h-1.5 bg-emergency-orange"></div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Don't get left in the cold. Our licensed technicians handle everything from minor repairs to full high-efficiency gas furnace installations. We service all major brands including Lennox, Carrier, and York.
            </p>
            <ul className="space-y-3">
              {['24/7 Emergency Heating Repair', 'Expert Diagnosis & Tuning', 'High-Efficiency Upgrades', 'Annual Maintenance Plans'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-emergency-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block emergency-orange text-white px-8 py-3 rounded font-bold hover:opacity-90 transition">Get Furnace Estimate</Link>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/id/191/800/600" alt="Furnace Service" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* AC Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-trust-blue">AC Install & Maintenance</h2>
            <div className="w-20 h-1.5 bg-emergency-orange"></div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Stay cool during the humid GTA summers. We provide quiet, efficient, and reliable central air conditioning and ductless mini-split systems that keep your home comfortable while lowering energy costs.
            </p>
            <ul className="space-y-3">
              {['Central AC Installation', 'Ductless Mini-Split Systems', 'Refrigerant Leak Detection', 'Condenser Cleaning'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-emergency-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block emergency-orange text-white px-8 py-3 rounded font-bold hover:opacity-90 transition">Get AC Quote</Link>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/id/163/800/600" alt="AC Installation" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Water Heater Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-trust-blue">Water Heater Solutions</h2>
            <div className="w-20 h-1.5 bg-emergency-orange"></div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Never run out of hot water again. We install and service both traditional tank-style and modern tankless water heaters. Ask us about how a tankless system can provide endless hot water and save space.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <p className="font-bold text-trust-blue">Tankless</p>
                <p className="text-sm text-slate-500">Endless hot water, small footprint.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <p className="font-bold text-trust-blue">Traditional</p>
                <p className="text-sm text-slate-500">Proven reliability and fast install.</p>
              </div>
            </div>
            <Link to="/contact" className="inline-block emergency-orange text-white px-8 py-3 rounded font-bold hover:opacity-90 transition">Explore Options</Link>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/id/180/800/600" alt="Water Heater" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Industry-Leading Warranty</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just fix it; we stand behind it. Absolute Heating & Cooling provides complete peace of mind with every visit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 bg-emergency-orange/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emergency-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">10-Year Parts Warranty</h3>
              <p className="text-slate-400 leading-relaxed">Most of our new high-efficiency installations come with a full 10-year manufacturer parts warranty, ensuring long-term protection for your investment.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 bg-emergency-orange/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emergency-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">1-Year Labor Guarantee</h3>
              <p className="text-slate-400 leading-relaxed">We provide a 1-year labor warranty on all new installations. If anything isn't working perfectly due to our workmanship, we'll fix it at no cost to you.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 bg-emergency-orange/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emergency-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">90-Day Repair Warranty</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Every repair we perform is backed by our 90-day parts and labor guarantee. You can trust that our diagnosis and fix will hold up when it matters most.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm max-w-xl mx-auto italic">
              *Warranty details may vary based on specific equipment models and manufacturer terms. Contact us for a full copy of our service agreement and warranty policy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-trust-blue mb-8">Ready for a Reliable HVAC Solution?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition shadow-xl inline-flex items-center gap-2 justify-center">
              Call (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue border-2 border-trust-blue px-8 py-4 rounded-lg font-bold text-xl hover:bg-slate-100 transition shadow-lg inline-block">
              Book Your Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
