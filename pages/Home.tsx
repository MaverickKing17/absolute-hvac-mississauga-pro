
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6 uppercase tracking-tighter">
            Get Up To <span className="text-emergency-orange">$7,100 Back</span> On New Heat Pumps
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed font-medium">
            AI-Optimized HVAC Installation & Repairs in Mississauga. Trust the data-driven experts with a 4.9-star reputation and 15+ years of excellence.
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
          
          {/* Enhanced AI Data Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex flex-col">
              <div className="flex text-yellow-400 text-2xl mb-1">
                ★★★★★
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-white font-black text-xl">4.9/5 Rating</p>
                <div className="flex items-center gap-1.5 bg-green-500/20 px-2 py-0.5 rounded border border-green-500/30">
                   <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                   <span className="text-[10px] text-green-300 font-bold uppercase tracking-widest">Live Sync</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase mt-1">Extracted from 500+ Local Sources</p>
            </div>
            
            <div className="hidden md:block h-12 w-px bg-slate-700"></div>
            
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500/50 ai-scan-line"></div>
              <div className="flex items-center gap-3">
                <div className="bg-trust-blue/50 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-blue-300 font-black tracking-[0.2em] leading-none mb-1">TSSA Certified</p>
                  <p className="text-white text-sm font-black uppercase italic">Full Compliance Audit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Sentiment Review Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-[2px] bg-emergency-orange"></div>
                <span className="text-emergency-orange text-xs font-black uppercase tracking-[0.3em]">Neural Insight Analysis</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-trust-blue mb-4 uppercase tracking-tighter leading-none">
                Customer Sentiment <br/><span className="text-slate-400">Database Extraction</span>
              </h2>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest bg-slate-100 inline-block px-3 py-1 rounded">
                Verified from 500+ Mississauga Homeowner Reviews
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-3xl font-black text-trust-blue bg-blue-50 px-6 py-3 rounded-2xl border-2 border-blue-100 shadow-sm flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">ML Aggregate Score:</span>
                9.8/10
              </div>
              <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase">Reliability Index: High Confidence</p>
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
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">24/7 Emergency Response</h3>
              <p className="text-slate-600 mb-6 font-medium">Furnace or AC failure? Our dispatch system uses smart routing to reach Mississauga residents in record time.</p>
              <Link to="/services" className="text-trust-blue font-bold hover:text-emergency-orange transition">View Services →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform border-b-4 border-emergency-orange">
              <div className="text-emergency-orange mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">Maximum Grant Optimization</h3>
              <p className="text-slate-600 mb-6 font-medium">We specialize in data-matching homeowners with the maximum available heat pump rebates up to $7,100.</p>
              <Link to="/rebates" className="text-emergency-orange font-bold hover:text-trust-blue transition">Rebate Estimator →</Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform border-b-4 border-trust-blue">
              <div className="text-trust-blue mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">Precision Diagnostics</h3>
              <p className="text-slate-600 mb-6 font-medium">TSSA Certified technicians using the latest digital testing equipment to ensure zero-fault performance for your home.</p>
              <Link to="/about" className="text-trust-blue font-bold hover:text-emergency-orange transition">Our Quality Standards →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 trust-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">Upgrade Your Home Efficiency</h2>
          <p className="text-blue-100 text-lg mb-10 font-medium">Get a free, AI-supported assessment of your HVAC load requirements and discover your precise savings with a new high-efficiency heat pump.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-8 py-4 rounded-lg font-black text-xl hover:scale-105 transition shadow-xl inline-flex items-center gap-2 justify-center">
              <PhoneIcon className="w-6 h-6" />
              Call (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue px-8 py-4 rounded-lg font-black text-xl hover:bg-slate-100 transition shadow-xl inline-block uppercase tracking-tighter">
              Book Smart Audit
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
