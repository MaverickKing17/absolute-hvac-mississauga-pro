
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RebateCalculator from '../components/RebateCalculator';

const AIScanOverlay = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:bg-trust-blue/10 transition-colors duration-700">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] ai-scan-line z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-emergency-orange rounded-full animate-pulse delay-700 shadow-[0_0_8px_rgba(234,88,12,1)]"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-1000 shadow-[0_0_8px_rgba(74,222,128,1)]"></div>
    </div>
  </div>
);

// Fix: Add explicit typing for ServiceFAQItem props to resolve TS error
interface ServiceFAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const ServiceFAQItem: React.FC<ServiceFAQItemProps> = ({ question, answer, index }) => {
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
        <div className="px-20 pb-10 pr-10">
          <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg border-l-2 border-emergency-orange/20 pl-6 italic">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Fix: Add explicit typing for VideoCard props to resolve TS error
interface VideoCardProps {
  video: {
    title: string;
    description: string;
    embedId: string;
    category: string;
    duration: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_40px_100px_rgba(30,58,138,0.2)] hover:-translate-y-2 hover:border-trust-blue transition-all duration-700 flex flex-col h-full group border border-slate-100 relative ring-offset-8 hover:ring-4 ring-trust-blue/5">
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
      
      <div className="p-10 flex-1 flex flex-col">
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
    { question: "What areas of the GTA do you provide 24/7 service?", answer: "We provide priority dispatch to Mississauga, Brampton, Oakville, and Etobicoke. Our central node at 3092 Mavis Rd allows for < 90min response times." },
    { question: "Can I install a high-MERV filter in my old furnace?", answer: "Old blower motors aren't designed for the high static pressure of MERV 13+ filters. We recommend a system-matched 4-inch media filter for better air quality without system strain." },
    { question: "What is the lifespan of a modern condensing furnace?", answer: "With absolute maintenance, a high-efficiency condensing furnace has a design lifecycle of 18-22 years. Without service, failure typically occurs at year 12." },
    { question: "Is the rebate paid as a credit or a check?", answer: "The Enbridge HER+ rebate is issued as a direct deposit or mailed check following the final post-retrofit energy audit, which we coordinate for you." }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <section className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/j9WhYRVZ/hunyuan-image-3-0-a-Replace-the-current-1.png" 
            className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[10s]" 
            alt="Absolute HVAC Engineering Visual" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left w-full py-24">
          <div className="inline-flex items-center gap-3 bg-emergency-orange/20 border border-emergency-orange/30 backdrop-blur-md px-5 py-2 rounded-full mb-10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emergency-orange"></span>
            </span>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Precision Mechanical Protocol</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
            Engineering <br/><span className="text-emergency-orange italic">Excellence.</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium drop-shadow-lg">
            Absolute Heating & Cooling defines the new standard for residential HVAC infrastructure in Mississauga. We don't just install; we architect comfort.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-[1.05] transition-all shadow-[0_20px_60px_rgba(234,88,12,0.4)] uppercase tracking-tighter">Immediate Dispatch</a>
            <Link to="/contact" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-trust-blue transition-all uppercase tracking-tighter">Request SmartAudit™</Link>
          </div>
        </div>
      </section>

      <section className="py-24 space-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <div>
                <span className="text-emergency-orange font-black uppercase tracking-[0.4em] text-xs block mb-4">Heating Architecture</span>
                <h2 className="text-4xl md:text-7xl font-black text-trust-blue uppercase tracking-tighter leading-none">Furnace <br/><span className="text-slate-400">Optimization.</span></h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">Our technicians handle natural gas and electric heating logic with surgical precision. From full-system retrofits to sensor calibration, we restore your system to factory-spec efficiency.</p>
              <div className="grid grid-cols-2 gap-6">
                {[{ label: "Commissioning", value: "TSSA Verified" }, { label: "Componentry", value: "OEM Original" }, { label: "Testing", value: "Zero-Fault" }, { label: "Support", value: "24/7 Priority" }].map((stat, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-emergency-orange/30 transition-all">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-xl font-black text-trust-blue uppercase tracking-tighter group-hover:text-emergency-orange transition-colors">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative group">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl relative bg-slate-900 border-8 border-white aspect-square">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] group-hover:scale-105" alt="Furnace Engineering" />
                <AIScanOverlay />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 py-32 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-20">
              <div className="flex-1 space-y-10">
                <div>
                  <span className="text-trust-blue font-black uppercase tracking-[0.4em] text-xs block mb-4">Phase Change Logic</span>
                  <h2 className="text-4xl md:text-7xl font-black text-trust-blue uppercase tracking-tighter leading-none">Cooling <br/><span className="text-slate-400">Innovation.</span></h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">Experience whisper-quiet air conditioning systems that actively monitor humidity and airflow. Optimized for the unique moisture profile of Lake Ontario coastal areas.</p>
                <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-trust-blue text-white rounded-2xl flex items-center justify-center font-black text-3xl shadow-xl">22</div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Peak Index</p>
                      <p className="text-2xl font-black text-trust-blue uppercase tracking-tighter leading-none">SEER2 ENERGY RATING</p>
                    </div>
                  </div>
                </div>
                <Link to="/rebates" className="inline-flex items-center gap-4 bg-trust-blue text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition-all shadow-xl uppercase tracking-tighter">Claim $7,100 Rebate</Link>
              </div>
              <div className="flex-1 relative group">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl relative bg-slate-900 border-8 border-white aspect-square">
                  <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] group-hover:scale-105" alt="Cooling Engineering" />
                  <AIScanOverlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-savings-green font-black uppercase tracking-[0.4em] text-xs mb-4 block">Grant Extraction Module</span>
          <h2 className="text-3xl md:text-6xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-8">Check Your <span className="text-savings-green italic">Rebate Eligibility.</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Ontario's HER+ program is budget-finite. Use our engineering calculator to verify your home's thermal match for the maximum $7,100 grant.</p>
        </div>
        <RebateCalculator />
      </section>

      <section className="py-32 bg-slate-950 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Diagnostic <br/><span className="text-slate-400">Intelligence Hub</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {troubleshootingVideos.map((video, idx) => (<VideoCard key={idx} video={video} />))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-emergency-orange font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Absolute Engineering Protocol</span>
            <h2 className="text-4xl md:text-7xl font-black text-trust-blue uppercase tracking-tighter leading-none">Service & <br/><span className="text-slate-400 italic">Technical FAQ</span></h2>
          </div>
          <div className="bg-white border-2 border-slate-50 rounded-[4rem] shadow-[0_40px_120px_rgba(0,0,0,0.05)] overflow-hidden divide-y divide-slate-100">
            {serviceFAQs.map((faq, index) => (<ServiceFAQItem key={index} index={index} question={faq.question} answer={faq.answer} />))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase tracking-tighter leading-none">Ready for a <br/><span className="text-emergency-orange italic">Technical Upgrade?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-12 py-7 rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 justify-center uppercase tracking-tighter">Call Engineer: (647) 746-5959</a>
          </div>
          <div className="mt-16 flex items-center justify-center gap-8 opacity-50">
             <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Node: Mississauga Active</span>
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Response: {'< 90 min'}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
