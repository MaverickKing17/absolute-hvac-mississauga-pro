
import React from 'react';
import { Link } from 'react-router-dom';
import AIReviewCarousel from '../components/AIReviewCarousel';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://i.ibb.co/LhqfYfRQ/wan2-5-t2i-preview-b-Replace-the-current.png" 
            alt="Modern HVAC Solutions" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start">
          <div className="inline-block bg-emergency-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            Limited Time Ontario Rebates
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
            Get Up To <span className="text-emergency-orange">$7,100 Back</span> On New Heat Pumps
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
            Professional HVAC Installation & Repairs in Mississauga. Trust the experts with over 15 years of experience and a 4.9-star reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/rebates" 
              className="emergency-orange text-white px-10 py-5 rounded-lg font-bold text-center text-lg hover:scale-105 transition shadow-xl"
            >
              Check Rebate Eligibility
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-trust-blue px-10 py-5 rounded-lg font-bold text-center text-lg hover:bg-slate-100 transition shadow-xl"
            >
              Request Free Estimate
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <div className="flex text-yellow-400 text-2xl">
                ★★★★★
              </div>
              <p className="text-white font-bold">4.9/5 Rating <span className="text-slate-400 font-normal text-sm">based on local reviews</span></p>
            </div>
            <div className="h-10 w-px bg-slate-700"></div>
            <div className="bg-white/10 px-4 py-2 rounded border border-white/20">
              <p className="text-xs uppercase text-slate-400 font-bold tracking-tighter">TSSA Certified</p>
              <p className="text-white text-sm font-bold">Full Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Enhanced Reviews */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-trust-blue mb-2 uppercase tracking-tighter">Local Sentiment Analysis</h2>
              <div className="w-24 h-1.5 bg-emergency-orange"></div>
              <p className="text-slate-500 mt-4 text-sm font-bold uppercase tracking-widest">Extracted from 500+ Mississauga Homeowner Reviews</p>
            </div>
            <div className="text-sm font-bold text-trust-blue bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              Score: 9.8/10 Reliability Rating
            </div>
          </div>
          
          <AIReviewCarousel />
        </div>
      </section>

      {/* Main Feature Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform border-b-4 border-trust-blue">
              <div className="text-trust-blue mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Emergency Repairs</h3>
              <p className="text-slate-600 mb-6">Furnace or AC failure? We offer round-the-clock emergency support for Mississauga residents.</p>
              <Link to="/services" className="text-trust-blue font-bold hover:text-emergency-orange transition">Learn More →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform border-b-4 border-emergency-orange">
              <div className="text-emergency-orange mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ontario Rebates Specialist</h3>
              <p className="text-slate-600 mb-6">We specialize in helping GTA homeowners claim the maximum available heat pump rebates up to $7,100.</p>
              <Link to="/rebates" className="text-emergency-orange font-bold hover:text-trust-blue transition">View Rebate Guide →</Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform border-b-4 border-trust-blue">
              <div className="text-trust-blue mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">TSSA Certified Pros</h3>
              <p className="text-slate-600 mb-6">Licensed, insured, and TSSA compliant. We don't cut corners on your home's safety and efficiency.</p>
              <Link to="/about" className="text-trust-blue font-bold hover:text-emergency-orange transition">About Our Certs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 trust-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Ready To Save On Your Energy Bills?</h2>
          <p className="text-blue-100 text-lg mb-10">Get a free, no-obligation assessment of your current system and discover how much you can save with a new high-efficiency heat pump.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition shadow-xl inline-flex items-center gap-2 justify-center">
              <PhoneIcon className="w-6 h-6" />
              Call (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue px-8 py-4 rounded-lg font-bold text-xl hover:bg-slate-100 transition shadow-xl inline-block">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default Home;
