
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
    </div>
  );
};

export default Services;
