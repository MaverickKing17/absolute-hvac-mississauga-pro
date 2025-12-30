
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RebateCalculator from '../components/RebateCalculator';

const AIScanOverlay = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:bg-trust-blue/5 transition-colors duration-700">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] ai-scan-line z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-emergency-orange rounded-full animate-pulse delay-700 shadow-[0_0_8px_rgba(234,88,12,1)]"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-1000 shadow-[0_0_8px_rgba(74,222,128,1)]"></div>
    </div>
  </div>
);

// Added explicit prop types to resolve TypeScript error in mapping
const ServiceFAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`transition-all duration-500 border-b border-slate-100 last:border-0 ${isOpen ? 'bg-slate-50/80' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 px-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <div className="flex items-center gap-5">
          <span className="text-xs font-black text-slate-300 font-mono tracking-widest leading-none">[{String(index + 1).padStart(2, '0')}]</span>
          <span className={`text-base md:text-xl font-black transition-colors uppercase tracking-tight ${isOpen ? 'text-emergency-orange' : 'text-trust-blue group-hover:text-emergency-orange'}`}>{question}</span>
        </div>
        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-emergency-orange text-white rotate-180 shadow-lg' : 'bg-slate-100 text-slate-400 group-hover:bg-trust-blue group-hover:text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-10 md:px-20 pb-10 pr-10">
          <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg border-l-2 border-emergency-orange/20 pl-6 italic">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Added explicit prop types to resolve TypeScript error in mapping
const VideoCard: React.FC<{ 
  video: { 
    title: string; 
    description: string; 
    embedId: string; 
    category: string; 
    duration: string; 
  } 
}> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_40px_100px_rgba(30,58,138,0.2)] hover:-translate-y-2 transition-all duration-700 flex flex-col h-full group border border-slate-100 relative ring-offset-8 hover:ring-4 ring-trust-blue/5">
      <div className="aspect-video bg-slate-900 overflow-hidden relative">
        {!isPlaying ? (
          <div className="w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img 
              src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`} 
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 saturate-[0.7] brightness-75 group-hover:brightness-100 group-hover:saturate-100"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 emergency-orange text-white rounded-full flex items-center justify-center shadow-[0_15px_50px_rgba(234,88,12,0.6)] transform transition-all duration-500 group-hover:scale-125 border-4 border-white/20">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" /></svg>
              </div>
            </div>
            <div className="absolute top-5 left-5 z-20">
              <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black px-3 py-1.5 rounded-xl tracking-widest uppercase">{video.duration}</span>
            </div>
            <AIScanOverlay />
          </div>
        ) : (
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&modestbranding=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      
      <div className="p-8 md:p-10 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emergency-orange animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">{video.category} Learning Module</span>
        </div>
        <h3 className="text-2xl font-black text-trust-blue mb-4 leading-none uppercase tracking-tighter group-hover:text-emergency-orange transition-colors">{video.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">{video.description}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} className="group/btn text-trust-blue font-black uppercase tracking-widest text-[11px] flex items-center gap-3 hover:text-emergency-orange transition-all">
           <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${isPlaying ? 'bg-emergency-orange text-white' : 'bg-slate-100 group-hover/btn:bg-trust-blue group-hover/btn:text-white'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
           </div>
           <span>{isPlaying ? 'Terminate Stream' : 'Initialize Protocol'}</span>
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const troubleshootingVideos = [
    { title: "Furnace Lockout Codes", description: "Learn to read diagnostic blink codes on your furnace control board to identify common ignition failures.", embedId: "_fP_H9V0R48", category: "Heating", duration: "4:15" },
    { title: "AC Efficiency Mapping", description: "Visualizing the thermal envelope and how airflow restriction impacts your SEER2 rating in summer.", embedId: "P1p67W5iH-Y", category: "Cooling", duration: "6:20" },
    { title: "Smart Filter Dynamics", description: "Testing high-MERV vs static pressure. Why the wrong filter choice leads to blower motor fatigue.", embedId: "f04L7-c8L-U", category: "Maintenance", duration: "3:05" },
    { title: "Hybrid Pumping Logic", description: "A technical breakdown of how Cold Climate Air Source Heat Pumps function alongside gas backups.", embedId: "zV9m-8r3_7Y", category: "Heat Pumps", duration: "5:45" }
  ];

  const serviceFAQs = [
    { question: "What is a SmartCare™ Predictive Audit?", answer: "Our SmartCare™ audit uses digital thermal imaging and blower door diagnostics to identify microscopic air leaks and insulation gaps that standard inspections miss, ensuring 100% precision." },
    { question: "How often should I have my system serviced?", answer: "For maximum efficiency and TSSA compliance, we recommend bi-annual service: Fall for heating (safety/efficiency) and Spring for cooling (charge/coil cleaning)." },
    { question: "Why is my furnace making a banging sound?", answer: "This 'boom' is often delayed ignition, where gas builds up before lighting. It is a critical safety issue that requires immediate technical calibration of the burners." },
    { question: "What are the benefits of a Hybrid Heat Pump?", answer: "Hybrid systems offer the best of both worlds: extreme electricity-based efficiency for 90% of the year, and high-intensity gas backup for Ontario's record cold snaps." },
    { question: "How long does a full system replacement take?", answer: "Absolute Engineering teams typically complete a full furnace and AC retrofit in 6-8 hours, including commissioning, balancing, and homeowner interface training." },
    { question: "Are your technicians TSSA and HRAI certified?", answer: "Yes. Every field engineer at Absolute is fully licensed by the TSSA (Technical Standards and Safety Authority) and HRAI, ensuring legal compliance and home safety." },
    { question: "What is the $7,100 rebate eligibility criteria?", answer: "Eligibility is based on your primary heat source (Natural Gas) and residence type. We handle all paperwork to ensure your system meets the specific COP and SEER2 requirements." },
    { question: "Why is my AC frozen up in July?", answer: "Freezing is usually caused by restricted airflow (dirty filter) or low refrigerant levels. Continuing to run a frozen unit can permanently damage the compressor scroll." },
    { question: "What areas of the GTA do you provide 24/7 service?", answer: "We provide priority dispatch to Mississauga, Brampton, Oakville, and Etobicoke. Our central node at 3092 Mavis Rd allows for < 90min response times." }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* High-Impact Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[850px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/j9WhYRVZ/hunyuan-image-3-0-a-Replace-the-current-1.png" 
            className="w-full h-full object-cover object-center scale-105" 
            alt="Absolute HVAC Engineering Center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left w-full py-24">
          <div className="inline-flex items-center gap-3 bg-emergency-orange/20 border border-emergency-orange/30 backdrop-blur-md px-5 py-2.5 rounded-full mb-10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emergency-orange"></span>
            </span>
            <span className="text-[11px] font-black text-white uppercase tracking-[0.4em]">Precision Mechanical Protocol</span>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
            PRECISION <br/><span className="text-emergency-orange italic">SOLUTIONS.</span>
          </h1>
          
          <p className="text-slate-200 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium drop-shadow-lg">
            Mississauga's premier destination for high-efficiency heating, cooling, and air quality engineering. We architect total home comfort.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-12 py-7 rounded-[2rem] font-black text-2xl hover:scale-[1.05] transition-all shadow-[0_25px_60px_rgba(234,88,12,0.5)] uppercase tracking-tighter flex items-center gap-4">
              Immediate Dispatch
              <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <Link to="/contact" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-trust-blue transition-all uppercase tracking-tighter shadow-2xl">
              Request SmartAudit™
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial Grade Service Protocol Sections */}
      <section className="py-24 md:py-32 space-y-32">
        {/* Heating Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <span className="text-emergency-orange font-black uppercase tracking-[0.4em] text-xs block">Heating Architecture</span>
                <h2 className="text-4xl md:text-8xl font-black text-trust-blue uppercase tracking-tighter leading-none">Furnace <br/><span className="text-slate-400">Recovery.</span></h2>
              </div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                Our technicians handle natural gas and electric heating logic with surgical precision. From full-system retrofits to microscopic sensor calibration, we restore your system to factory-spec efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Certification", value: "TSSA Registered" },
                  { label: "Componentry", value: "OEM Original" },
                  { label: "Testing", value: "Zero-Fault" },
                  { label: "Reliability", value: "100% Guaranteed" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-emergency-orange/30 transition-all shadow-sm">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-xl font-black text-trust-blue uppercase tracking-tighter group-hover:text-emergency-orange transition-colors">{stat.value}</p>
                  </div>
                ))}
              </div>
              <a href="tel:6477465959" className="inline-flex items-center gap-4 bg-trust-blue text-white px-10 py-6 rounded-2xl font-black text-xl hover:scale-[1.03] transition-all shadow-xl uppercase tracking-tighter">
                Request Repair Dispatch
              </a>
            </div>
            <div className="flex-1 relative group">
              <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative bg-slate-900 border-[12px] border-white aspect-square">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] group-hover:scale-105" alt="Industrial Furnace Architecture" />
                <AIScanOverlay />
                <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20">
                   <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1">Audit Status</p>
                   <p className="text-white font-black uppercase text-xl">Active Compliance: 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cooling Block */}
        <div className="bg-slate-50 py-32 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-20">
              <div className="flex-1 space-y-10">
                <div className="space-y-4">
                  <span className="text-trust-blue font-black uppercase tracking-[0.4em] text-xs block">Phase Change Logic</span>
                  <h2 className="text-4xl md:text-8xl font-black text-trust-blue uppercase tracking-tighter leading-none">Cooling <br/><span className="text-slate-400">Optimization.</span></h2>
                </div>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                  Experience whisper-quiet air conditioning systems that actively monitor humidity and airflow. Optimized for the unique moisture profile of the Lake Ontario coastal environment.
                </p>
                <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-trust-blue text-white rounded-3xl flex items-center justify-center font-black text-4xl shadow-2xl transform group-hover:rotate-12 transition-transform">
                      22
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Efficiency Rating</p>
                      <p className="text-3xl font-black text-trust-blue uppercase tracking-tighter leading-none">SEER2 PEAK INDEX</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6">
                  <Link to="/rebates" className="bg-savings-green text-white px-12 py-7 rounded-[2rem] font-black text-2xl hover:scale-[1.05] transition-all shadow-[0_25px_60px_rgba(5,150,105,0.4)] uppercase tracking-tighter">
                    Unlock $7,100 Rebate
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative group">
                <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative bg-slate-900 border-[12px] border-white aspect-square">
                  <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] group-hover:scale-105" alt="Advanced Cooling Engineering" />
                  <AIScanOverlay />
                  <div className="absolute top-10 left-10 bg-trust-blue text-white px-6 py-3 rounded-2xl font-black uppercase text-xs tracking-widest border border-white/20 shadow-2xl">
                    High Efficiency Core
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Rebate Calculator Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-savings-green font-black uppercase tracking-[0.4em] text-xs mb-4 block">Grant Extraction Module</span>
          <h2 className="text-4xl md:text-7xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-8">
            Check Your <span className="text-savings-green italic">Rebate Eligibility.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Ontario's HER+ program is budget-finite. Use our engineering calculator to verify your home's thermal match for the maximum $7,100 grant.
          </p>
        </div>
        <RebateCalculator />
      </section>

      {/* Video Intelligence Hub */}
      <section className="py-32 bg-slate-950 border-y border-white/10 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Diagnostic Intelligence</span>
              <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">Diagnostic <br/><span className="text-slate-500">Learning Center.</span></h2>
            </div>
            <div className="h-px flex-1 bg-white/10 mb-8 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {troubleshootingVideos.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Technical FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-emergency-orange font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Absolute Engineering Protocol</span>
            <h2 className="text-4xl md:text-8xl font-black text-trust-blue uppercase tracking-tighter leading-none">Technical <br/><span className="text-slate-400 italic">Protocols.</span></h2>
          </div>
          <div className="bg-white border-2 border-slate-50 rounded-[4rem] shadow-[0_60px_150px_rgba(0,0,0,0.08)] overflow-hidden divide-y divide-slate-100">
            {serviceFAQs.map((faq, index) => (
              <ServiceFAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-slate-50 rounded-[3.5rem] text-center border-2 border-slate-100 relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-trust-blue/5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
             <p className="text-slate-500 text-xl font-bold mb-8 italic">Don't see your technical error listed here?</p>
             <a href="tel:6477465959" className="inline-flex items-center gap-6 text-trust-blue font-black uppercase tracking-widest text-lg hover:text-emergency-orange transition-all group/cta">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover/cta:bg-emergency-orange group-hover/cta:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
                <span>Connect with an Engineer</span>
             </a>
          </div>
        </div>
      </section>

      {/* Final Conversion Tactical CTA */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-orange-900/40 opacity-50"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-9xl font-black mb-12 uppercase tracking-tighter leading-[0.85]">READY FOR AN <br/><span className="text-emergency-orange italic">UPGRADE?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="tel:6477465959" className="emergency-orange text-white px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:scale-[1.05] transition-all shadow-[0_30px_80px_rgba(234,88,12,0.6)] flex items-center gap-6 justify-center uppercase tracking-tighter">
              Call Direct: (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:bg-slate-100 transition shadow-2xl uppercase tracking-tighter text-center">
              Request SmartAudit™
            </Link>
          </div>
          <div className="mt-20 flex items-center justify-center gap-10 opacity-60">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
               <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase">Node: Mississauga Active</span>
             </div>
             <div className="h-4 w-px bg-white/20"></div>
             <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase">Response Time: {'< 90 min'}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
