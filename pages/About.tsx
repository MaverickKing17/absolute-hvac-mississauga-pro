
import React from 'react';
import AIReviewCarousel from '../components/AIReviewCarousel';

const About: React.FC = () => {
  const trustBadges = [
    {
      name: "BBB Accredited",
      status: "A+ Rating",
      description: "Recognized for the highest standards of trust and integrity in the HVAC industry across Ontario.",
      aria: "BBB Accredited with an A plus Rating - Ontario's highest standard for trust and integrity.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      color: "text-blue-600",
      bg: "bg-blue-50/50"
    },
    {
      name: "HomeAdvisor Top Rated",
      status: "Top Professional",
      description: "Voted #1 for reliability and superior project quality by Mississauga homeowners for five consecutive years.",
      aria: "HomeAdvisor Top Rated - Voted number 1 for reliability and superior quality in Mississauga.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      color: "text-orange-600",
      bg: "bg-orange-50/50"
    },
    {
      name: "Google Guaranteed",
      status: "Local Shield",
      description: "Absolute is a fully verified local services provider backed by Google's protection for customer quality assurance.",
      aria: "Google Guaranteed - Verified local services provider backed by Google's performance shield.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      color: "text-green-600",
      bg: "bg-green-50/50"
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section with Unified Aesthetics */}
      <section className="bg-slate-50 py-20 md:py-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 bg-trust-blue/5 border border-trust-blue/10 px-4 py-1.5 rounded-full mb-2">
               <span className="w-2 h-2 bg-trust-blue rounded-full animate-pulse"></span>
               <span className="text-[10px] font-black text-trust-blue uppercase tracking-widest leading-none">Established 2010 | Mississauga Flagship</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-trust-blue mb-6 uppercase tracking-tighter leading-none">
              Engineering <br/><span className="text-emergency-orange italic">Integrity.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
              Absolute Heating & Cooling isn't just a service provider—we are a technical engineering firm dedicated to optimizing Mississauga's residential infrastructure.
            </p>
            <p className="text-slate-500 text-base leading-relaxed font-medium max-w-xl">
              Operating out of our high-traffic flagship unit at the <span className="font-bold text-trust-blue">Mississauga Flea Market (3092 Mavis Rd)</span>, we combine old-school reliability with new-age data diagnostics.
            </p>
            <div className="flex flex-wrap gap-10 pt-4">
              <div className="text-left">
                <p className="text-4xl font-black text-emergency-orange tracking-tighter">15+</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Years Protocol</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-black text-trust-blue tracking-tighter">4.9</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Sentiment Score</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-black text-savings-green tracking-tighter">100%</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">TSSA Verified</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative group">
            {/* Neural Pulse Background for AI Aesthetic */}
            <div className="absolute -inset-20 bg-trust-blue/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emergency-orange/5 transition-colors duration-1000"></div>
            
            <div className="relative z-10">
               <div className="absolute top-8 left-8 z-30">
                  <div className="bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3">
                     <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </div>
                     <span className="text-[10px] font-black text-trust-blue uppercase tracking-widest leading-none">Node: Mavis Rd Active</span>
                  </div>
               </div>
               
               <div className="rounded-[3.5rem] shadow-2xl relative border-[12px] border-white overflow-hidden group/img bg-slate-100 aspect-square">
                 <img 
                   src="https://i.ibb.co/KccR7Vvy/gpt-image-1-5-b-Replace-the-current-1.png" 
                   alt="Absolute HVAC Professional Performing Diagnostic" 
                   className="w-full h-full object-cover transition-all duration-1000 brightness-90 saturate-[0.8]" 
                 />
                 {/* AI Neural Scan Overlay Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 ai-scan-line opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                 
                 <div className="absolute bottom-10 left-10 right-10 p-6 bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                       <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest">Diagnostic Stream V2.8</span>
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enbridge HER+ Compliant</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-400 animate-[shimmer_3s_infinite] w-3/4"></div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Credentials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-trust-blue font-black uppercase tracking-[0.4em] text-xs mb-4 block">Proven Performance</span>
            <h2 className="text-4xl md:text-6xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-6">
              Industry <span className="text-emergency-orange italic">Accreditation.</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg leading-relaxed">
              Our engineering protocols are validated by North America's leading consumer protection and industry governing bodies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" role="list">
            {trustBadges.map((badge, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col items-center text-center p-12 bg-white rounded-[3.5rem] border-2 border-slate-50 hover:border-trust-blue/20 shadow-sm hover:shadow-[0_40px_100px_rgba(30,58,138,0.1)] transition-all duration-700 hover:-translate-y-4"
              >
                <div className="absolute top-8 right-10 bg-slate-100 group-hover:bg-trust-blue group-hover:text-white text-slate-400 text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest transition-all">
                  {badge.status}
                </div>
                <div className={`mb-12 p-10 ${badge.bg} rounded-[2.5rem] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-inner`}>
                  <div className={`${badge.color}`}>
                    {badge.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-trust-blue mb-4 uppercase tracking-tighter leading-tight">{badge.name}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sentiment Analysis (Reviews) Section - Fixed Clipping */}
      <section className="py-24 bg-slate-50 overflow-hidden relative border-y border-slate-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100"><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="0.5" fill="black"/></pattern><rect width="100%" height="100%" fill="url(#dots)"/></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-emergency-orange font-black uppercase tracking-[0.3em] text-xs mb-4 block">Neural Sentiment Data</span>
              <h2 className="text-3xl md:text-6xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-6">
                Sentiment <br/><span className="text-slate-400 italic">Extraction.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Absolute SmartCare™ analyzes customer feedback to ensure zero-fault service consistency across Mississauga.
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-white px-8 py-5 rounded-3xl shadow-xl border border-slate-100 flex items-baseline gap-4">
                 <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Aggregate Rating:</span>
                 <span className="text-4xl font-black text-trust-blue tracking-tighter leading-none">4.9<span className="text-lg text-slate-400">/5</span></span>
              </div>
            </div>
          </div>
          
          <AIReviewCarousel />
        </div>
      </section>

      {/* Flagship Location Unit */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 relative">
             {/* Background Map Placeholder */}
             <div className="md:w-1/2 h-[500px] relative bg-slate-800 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-[2000ms]">
                  <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Mississauga Cityscape" />
                </div>
                <div className="relative z-10 text-center p-12 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl">
                   <div className="w-20 h-20 bg-emergency-orange/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emergency-orange/30">
                      <svg className="w-10 h-10 text-emergency-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                   </div>
                   <p className="font-black text-2xl text-white uppercase tracking-tighter mb-2">3092 Mavis Rd, Mississauga</p>
                   <p className="text-blue-300 font-bold uppercase tracking-widest text-[10px] italic">Inside Mississauga Flea Market - Aisles 3 & 4</p>
                </div>
             </div>
             
             <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white">
                <div className="space-y-12">
                   <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 border-l-4 border-emergency-orange pl-6">Mission Continuity</h3>
                      <div className="space-y-4 font-bold text-slate-400">
                        <p className="flex justify-between items-center border-b border-white/10 pb-4 hover:text-white transition-colors">
                          <span className="uppercase tracking-widest text-[11px]">Field Response:</span> 
                          <span className="text-white text-lg font-black tracking-tighter uppercase">24/7 Priority</span>
                        </p>
                        <p className="flex justify-between items-center border-b border-white/10 pb-4 hover:text-white transition-colors">
                          <span className="uppercase tracking-widest text-[11px]">Flagship Walk-in:</span> 
                          <span className="text-white text-lg font-black tracking-tighter uppercase">Sat - Sun</span>
                        </p>
                      </div>
                   </div>
                   
                   <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 border-l-4 border-trust-blue pl-6">Technical Audit Verified</h3>
                      <div className="flex flex-wrap gap-4 mt-6">
                        <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-white/10 transition">TSSA Registered</div>
                        <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-white/10 transition">HRAI Member</div>
                        <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-white/10 transition">Licensed Gas Fitter</div>
                      </div>
                   </div>

                   <a href="tel:6477465959" className="emergency-orange text-white py-6 rounded-2xl text-center font-black text-2xl hover:scale-[1.03] transition-all shadow-[0_20px_60px_rgba(234,88,12,0.4)] uppercase tracking-tighter">
                      Connect with Engineer
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Corporate Final Banner */}
      <section className="py-20 bg-slate-900 text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none">Ready for a Technical Upgrade?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl flex items-center gap-3 justify-center uppercase tracking-tighter">
              Call Direct: (647) 746-5959
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
