
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AIReviewCarousel from '../components/AIReviewCarousel';

// Fix: Explicitly type BrandLogo as React.FC to handle React-specific props like 'key'
const BrandLogo: React.FC<{ brand: { name: string, url: string } }> = ({ brand }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="h-10 md:h-12 px-6 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center grayscale opacity-40 hover:opacity-100 transition-all">
        <span className="text-sm font-black text-trust-blue uppercase tracking-[0.2em]">{brand.name}</span>
      </div>
    );
  }

  return (
    <img 
      src={brand.url} 
      alt={brand.name} 
      onError={() => setError(true)}
      className="h-10 md:h-14 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 filter contrast-125 brightness-90 px-4"
    />
  );
};

const BrandCarousel = () => {
  const brands = [
    { name: "Trane", url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Trane_logo.svg" },
    { name: "Lennox", url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Lennox_International_logo.svg/1200px-Lennox_International_logo.svg.png" },
    { name: "Carrier", url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Carrier_logo.svg" },
    { name: "Rheem", url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Rheem_logo.svg/1200px-Rheem_logo.svg.png" },
    { name: "Ruud", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ruud_logo.svg/1200px-Ruud_logo.svg.png" },
    { name: "Bryant", url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Bryant_Heating_%26_Cooling_Systems_logo.svg/1200px-Bryant_Heating_%26_Cooling_Systems_logo.svg.png" },
    { name: "Goodman", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Goodman_Manufacturing_logo.svg" },
    { name: "Navien", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Navien_logo.svg/1200px-Navien_logo.svg.png" },
    { name: "Mitsubishi", url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Mitsubishi-logo.png" }
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full bg-white py-14 border-y border-slate-100 overflow-hidden relative group">
      <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
        {duplicatedBrands.map((brand, i) => (
          <BrandLogo key={i} brand={brand} />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

const Home: React.FC = () => {
  const expertHelpServices = [
    { title: "Furnace", desc: "Precision gas & electric heating diagnostics.", icon: "🔥" },
    { title: "Air Conditioner", desc: "High-SEER2 cooling system optimization.", icon: "❄️" },
    { title: "Air Quality", desc: "Advanced HEPA & UV purification nodes.", icon: "🌬️" },
    { title: "Tankless Water", desc: "Continuous flow thermal engineering.", icon: "🚿" },
    { title: "Boiler", desc: "Hydronic loop recovery & efficiency.", icon: "♨️" },
    { title: "Humidifier", desc: "Active moisture control protocols.", icon: "💧" },
    { title: "Thermostat", desc: "Smart logic interface calibration.", icon: "📱" },
    { title: "UV Light", desc: "Molecular sterilization modules.", icon: "✨" },
    { title: "Air Handlers", desc: "Mass-flow air distribution tuning.", icon: "🌀" },
    { title: "Heat Pump", desc: "Hybrid dual-fuel extraction units.", icon: "⚡" },
    { title: "Water Filter", desc: "Total dissolved solids filtration.", icon: "🚰" },
    { title: "Softener", desc: "Ion-exchange mineral reduction.", icon: "💎" }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden min-h-[700px] md:min-h-[850px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/LhqfYfRQ/wan2-5-t2i-preview-b-Replace-the-current.png" 
            alt="Absolute HVAC Engineering" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-start text-left w-full">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Available Ontario Rebates Active
          </div>

          <h1 className="text-5xl md:text-9xl font-black text-white leading-[0.85] max-w-5xl mb-10 uppercase tracking-tighter drop-shadow-2xl">
            BREATHE <span className="text-emergency-orange italic">PRECISION.</span><br/>
            <span className="text-4xl md:text-6xl block mt-4">ENGINEERING COMFORT.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mb-14 leading-relaxed font-medium drop-shadow-lg">
            Absolute Heating & Cooling: Mississauga's 4.9-Star HVAC authority. Advanced thermal solutions and Enbridge HER+ rebate extraction.
          </p>

          <div className="flex flex-wrap gap-6 w-full sm:w-auto">
            <Link 
              to="/rebates" 
              className="emergency-orange text-white px-14 py-7 rounded-[2.5rem] font-black text-center text-2xl hover:scale-[1.05] transition-all shadow-[0_25px_60px_rgba(234,88,12,0.5)] uppercase tracking-tighter"
            >
              Get $7,100 Rebate
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-2xl border border-white/20 text-white px-14 py-7 rounded-[2.5rem] font-black text-center text-2xl hover:bg-white hover:text-trust-blue transition-all shadow-2xl uppercase tracking-tighter"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Brands Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8">Authorized Tier-1 Brand Deployment</p>
          <BrandCarousel />
        </div>
      </section>

      {/* Expert Help Grid */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-trust-blue/[0.02] -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-emergency-orange font-black uppercase tracking-[0.4em] text-xs mb-4 block">Mechanical Domain Expertise</span>
            <h2 className="text-4xl md:text-8xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-8">
              Expert <span className="text-slate-400 italic">Protocols.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {expertHelpServices.map((service, i) => (
              <div key={i} className="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(30,58,138,0.15)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-emergency-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="text-4xl mb-6 transform transition-transform group-hover:scale-125 group-hover:rotate-12 duration-500">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-black text-trust-blue mb-3 uppercase tracking-tighter group-hover:text-emergency-orange transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">{service.desc}</p>
                <Link to="/services" className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-trust-blue flex items-center gap-2 transition-colors">
                  Initialize Audit <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <span className="text-emergency-orange font-black uppercase tracking-[0.4em] text-xs block">Operational Advantage</span>
                <h2 className="text-4xl md:text-8xl font-black text-trust-blue uppercase tracking-tighter leading-none">Why <br/><span className="text-slate-400">Absolute?</span></h2>
              </div>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                In an industry flooded with general contractors, Absolute Engineering stands apart through technological precision and licensed accountability.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Upfront Transparent Pricing", desc: "Digital quotes with zero-variance guarantee. We eliminate 'hidden fee' logic.", icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/> },
                  { title: "Anytime Emergency Response", desc: "24/7 priority routing for Mississauga residents. Response times < 90 minutes.", icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/> },
                  { title: "Licensed Technical Engineers", desc: "TSSA & HRAI certified field agents. Every install is a masterpiece of precision.", icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 shrink-0 bg-slate-50 text-trust-blue rounded-[1.5rem] flex items-center justify-center group-hover:bg-trust-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-trust-blue uppercase tracking-tighter mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative group">
              <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative bg-slate-900 border-[12px] border-white aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] group-hover:scale-105" 
                  alt="Engineering Excellence" 
                />
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20">
                   <p className="text-[10px] font-black text-blue-300 uppercase tracking-[0.3em] mb-4">Core Competency Audit</p>
                   <div className="flex items-center justify-between text-white font-black text-3xl uppercase tracking-tighter">
                      <span>Serving Since 2010</span>
                      <span className="text-emergency-orange">16+ YRS</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Industry 16+ Years & Reviews */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Industry Dominance Index</span>
              <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">Serving for <br/><span className="text-slate-500">16+ Cycles.</span></h2>
            </div>
            <div className="h-px flex-1 bg-white/10 mb-8 hidden md:block"></div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6">
               <div className="text-right">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Google Score</p>
                  <p className="text-4xl font-black text-white leading-none">4.9/5</p>
               </div>
               <div className="h-12 w-px bg-white/10"></div>
               <div className="flex text-yellow-400 text-3xl">★★★★★</div>
            </div>
          </div>
          
          <AIReviewCarousel />
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-orange-900/40 opacity-50"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-9xl font-black mb-12 uppercase tracking-tighter leading-[0.85]">READY TO <br/><span className="text-emergency-orange italic">OPTIMIZE?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="tel:6477465959" className="emergency-orange text-white px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:scale-[1.05] transition-all shadow-[0_30px_80px_rgba(234,88,12,0.6)] flex items-center gap-6 justify-center uppercase tracking-tighter">
              Call Direct: (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:bg-slate-100 transition shadow-2xl uppercase tracking-tighter text-center">
              Request SmartAudit™
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
