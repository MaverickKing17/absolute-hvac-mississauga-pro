
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RebateCalculator from '../components/RebateCalculator';

/**
 * AIScanOverlay Component
 * Adds a neural scan animation and data points to images for ML aesthetic
 */
const AIScanOverlay: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:bg-trust-blue/5 transition-colors duration-700">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] ai-scan-line z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-emergency-orange rounded-full animate-pulse delay-700 shadow-[0_0_8px_rgba(234,88,12,1)]"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-1000 shadow-[0_0_8px_rgba(74,222,128,1)]"></div>
    </div>
  </div>
);

const ServiceFAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`transition-all duration-500 border-b border-slate-100 last:border-0 ${isOpen ? 'bg-slate-50/50' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-4 flex justify-between items-center text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-black text-slate-300 font-mono tracking-widest">{String(index + 1).padStart(2, '0')}</span>
          <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-emergency-orange' : 'text-trust-blue group-hover:text-emergency-orange'}`}>{question}</span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-emergency-orange text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-14 pb-8 pr-8">
          <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const VideoCard: React.FC<{ video: { title: string; description: string; embedId: string; category: string; duration: string } }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_rgba(30,58,138,0.15)] hover:-translate-y-2 hover:border-trust-blue transition-all duration-700 flex flex-col h-full group border border-slate-100 relative ring-offset-4 hover:ring-2 ring-trust-blue/10">
      <div className="aspect-video bg-slate-900 overflow-hidden relative">
        {!isPlaying ? (
          <div className="w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img 
              src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`} 
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 saturate-[0.8] brightness-75 group-hover:brightness-100 group-hover:saturate-100"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 emergency-orange text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 border-2 border-white/20">
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" /></svg>
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-lg tracking-widest uppercase">{video.duration}</span>
            </div>
            <AIScanOverlay />
          </div>
        ) : (
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">{video.category} Learning Node</span>
        <h3 className="text-xl font-black text-trust-blue mb-3 leading-tight uppercase tracking-tighter group-hover:text-emergency-orange transition-colors">{video.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium">{video.description}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} className="text-trust-blue font-black uppercase tracking-widest text-[11px] flex items-center gap-2 hover:text-emergency-orange transition-colors">
           {isPlaying ? 'Close Interface' : 'Initialize Protocol'}
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const troubleshootingVideos = [
    { title: "Strange Furnace Noises?", description: "Decode banging, whistling, or screeching sounds before they lead to a system lockout.", embedId: "_fP_H9V0R48", category: "Heating", duration: "3:42" },
    { title: "AC Efficiency Secrets", description: "Learn how to optimize your cooling cycle and reduce peak energy draw during heatwaves.", embedId: "P1p67W5iH-Y", category: "Cooling", duration: "5:15" },
    { title: "Smart Filter Health", description: "Why high-MERV filters might be choking your system and how to find the perfect balance.", embedId: "f04L7-c8L-U", category: "Air Quality", duration: "2:10" },
    { title: "Heat Pump Mastery", description: "Visualizing the phase-change cycle of Ontario's most popular hybrid heating solution.", embedId: "zV9m-8r3_7Y", category: "Heat Pumps", duration: "4:30" }
  ];

  const serviceFAQs = [
    { question: "How often should I have my furnace serviced?", answer: "We recommend a professional tune-up once every year, ideally in late summer or early fall. This ensures your system is safe (no carbon monoxide leaks) and running at peak efficiency before the winter load kicks in." },
    { question: "What are the common signs of a failing AC compressor?", answer: "Warning signs include unusual grinding noises, circuit breakers tripping regularly, warm air blowing from vents, or a noticeable decrease in cooling speed. Early detection can save thousands in component replacement costs." },
    { question: "Are heat pumps really effective in -20°C Ontario winters?", answer: "Yes. Modern Cold-Climate Air Source Heat Pumps (ccASHPs) are engineered to extract heat from ambient air down to -25°C. For extreme cold, we integrate them as a hybrid system with your furnace as a fail-safe backup." },
    { question: "Why is my furnace blowing cold air?", answer: "This is often caused by a dirty air filter, a tripped high-limit switch, or a faulty flame sensor. If a filter change doesn't fix it, our technical team can diagnose the internal logic error in under 30 minutes." },
    { question: "How long does a typical AC installation take?", answer: "A standard central air installation in Mississauga takes between 4 to 8 hours. We deploy a two-person engineering team to ensure TSSA compliance and same-day commissioning." },
    { question: "Do you offer emergency 24/7 HVAC repairs?", answer: "Absolutely. Absolute provides emergency dispatch for no-heat situations or critical AC failures across Mississauga, Brampton, and Oakville, even on holidays." },
    { question: "Can a smart thermostat really lower my energy bills?", answer: "Yes, by up to 15%. Smart thermostats use predictive occupancy modeling and weather data to reduce heating/cooling cycles when you're away, paying for themselves in under 12 months." },
    { question: "What is the lifespan of a modern HVAC system?", answer: "With regular maintenance, a high-efficiency furnace typically lasts 15-20 years, while central AC units last 12-15 years. Heat pumps have a similar 15-year lifecycle." },
    { question: "Do you handle the Enbridge rebate paperwork for me?", answer: "We handle 100% of the technical documentation. We coordinate with NRCan-certified auditors to ensure your data packets are submitted correctly for the $7,100 grant." },
    { question: "What areas of Mississauga do you serve?", answer: "We cover all of Peel Region including Erin Mills, Port Credit, Streetsville, Meadowvale, Churchill Meadows, and Cooksville." },
    { question: "What is MERV rating and which one should I use?", answer: "MERV (Minimum Efficiency Reporting Value) ranges from 1-20. Most residential systems are optimized for MERV 8-11. Going higher (MERV 13+) can restrict airflow and damage your blower motor if the system isn't designed for it." },
    { question: "Is it better to repair or replace an old furnace?", answer: "If your furnace is over 12 years old and the repair cost exceeds 30% of a new unit, we typically recommend replacement—especially with current $7,100 rebates making new systems highly affordable." }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-40 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30 grayscale" alt="HVAC Engineering Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-emergency-orange/20 border border-emergency-orange/30 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-emergency-orange rounded-full animate-ping"></span>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Licensed TSSA Engineering</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
            Precision <span className="text-emergency-orange italic">Mechanical</span> Solutions
          </h1>
          <p className="text-blue-100 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
            Mississauga's premier destination for high-efficiency heating, cooling, and air quality engineering.
          </p>
        </div>
        {/* Shimmer line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </section>

      {/* Main Service Blocks with High-End Imagery */}
      <section className="py-24 space-y-24">
        {/* Heating Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="flex-1 space-y-8">
              <span className="text-emergency-orange font-black uppercase tracking-[0.4em] text-xs">Protocol: Thermal Extraction</span>
              <h2 className="text-4xl md:text-6xl font-black text-trust-blue uppercase tracking-tighter leading-none">High-Efficiency <br/><span className="text-slate-400">Heating Systems</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Our technicians are masters of natural gas and electric heating logic. From the Absolute Platinum™ Furnace series to multi-stage heat exchanger replacements, we ensure 100% thermal reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['TSSA Certified', '24/7 Dispatch', 'OEM Parts', 'Safety Audit'].map(t => (
                  <div key={t} className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-tight">
                    <svg className="w-5 h-5 text-emergency-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {t}
                  </div>
                ))}
              </div>
              <a href="tel:6477465959" className="inline-flex items-center gap-4 bg-trust-blue text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition-all shadow-xl uppercase tracking-tighter">
                Request Service Node
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
            <div className="flex-1 relative group">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl relative bg-slate-100 border-8 border-white aspect-square">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" alt="Furnace Interior Engineering" />
                <AIScanOverlay />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-[10px] text-blue-300 font-black uppercase tracking-widest mb-1">Live Thermal Diagnostic</p>
                  <p className="text-white text-sm font-bold">System Load: NOMINAL | Output: 98.2% AFUE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cooling Block */}
        <div className="bg-slate-50 py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
              <div className="flex-1 space-y-8">
                <span className="text-trust-blue font-black uppercase tracking-[0.4em] text-xs">Protocol: Phase Change cooling</span>
                <h2 className="text-4xl md:text-6xl font-black text-trust-blue uppercase tracking-tighter leading-none">Precision <br/><span className="text-slate-400">Cooling Solutions</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  We deploy ultra-quiet, variable-speed AC units that provide dehumidification and precise climate control. Optimized for Mississauga's humid summers, our systems run 40% quieter than standard models.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Energy Index</p>
                      <p className="text-xl font-black text-trust-blue uppercase tracking-tighter leading-none">SEER2 22+</p>
                    </div>
                    <div className="h-10 w-px bg-slate-100"></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Acoustic Logic</p>
                      <p className="text-xl font-black text-trust-blue uppercase tracking-tighter leading-none">48 dB Peak</p>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-4 bg-emergency-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition-all shadow-xl uppercase tracking-tighter">
                  Claim Cooling Audit
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>
              <div className="flex-1 relative group">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl relative bg-slate-100 border-8 border-white aspect-square">
                  <img src="https://images.unsplash.com/photo-1621905252507-b354bcadc0d6?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" alt="Central AC Component" />
                  <AIScanOverlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Estimator Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-savings-green font-black uppercase tracking-[0.4em] text-xs mb-4 block">Funding Extraction Logic</span>
          <h2 className="text-3xl md:text-5xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-6">
            Unlock Your <span className="text-savings-green italic">$7,100 Rebate</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            Use our refined SmartCare™ calculator to verify your exact provincial grant eligibility based on current 2024 Ontario energy protocols.
          </p>
        </div>
        <RebateCalculator />
      </section>

      {/* Video Learning Center */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-trust-blue uppercase tracking-tighter leading-none">Diagnostic <br/><span className="text-slate-400">Knowledge Hub</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {troubleshootingVideos.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Massive FAQ Section (12 Items) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-trust-blue font-black uppercase tracking-[0.4em] text-xs mb-4 block">Engineering FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black text-trust-blue uppercase tracking-tighter leading-none">Service & <br/><span className="text-emergency-orange italic">Diagnostic Intel</span></h2>
          </div>
          <div className="bg-white border border-slate-100 rounded-[3rem] shadow-2xl overflow-hidden divide-y divide-slate-50">
            {serviceFAQs.map((faq, index) => (
              <ServiceFAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none">Protocol Engagement: <br/><span className="text-emergency-orange italic">Immediate Response</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-12 py-6 rounded-2xl font-black text-xl md:text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 justify-center uppercase tracking-tighter">
              Call Engineer: (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue px-12 py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-slate-100 transition shadow-xl uppercase tracking-tighter text-center">
              Request SmartAudit™
            </Link>
          </div>
          <p className="mt-12 text-[10px] text-slate-500 font-mono uppercase tracking-[0.4em]">Node Status: Active | Average Dispatch Time: 94 Minutes</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
