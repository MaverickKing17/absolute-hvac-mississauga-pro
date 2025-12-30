
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RebateCalculator from '../components/RebateCalculator';

const ServiceFAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-trust-blue group-hover:text-emergency-orange transition-colors pr-4">{question}</span>
        <svg 
          className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emergency-orange' : 'text-slate-400'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const VideoCard: React.FC<{ video: { title: string; description: string; embedId: string; category: string; duration: string; level: string } }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group border border-slate-100">
      <div className="aspect-video bg-slate-900 relative overflow-hidden">
        {!isPlaying ? (
          <button 
            onClick={handlePlay}
            className="absolute inset-0 w-full h-full flex items-center justify-center group/btn overflow-hidden"
          >
            {/* High-Quality Thumbnail with subtle zoom on hover */}
            <img 
              src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`} 
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              loading="lazy"
            />
            
            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-trust-blue/10 group-hover:bg-transparent transition-colors"></div>
            
            {/* Premium Play Button UI */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-white rounded-full blur-xl scale-125 opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-30"></div>
                <div className="absolute inset-0 border-2 border-white/50 rounded-full scale-100 group-hover/btn:scale-110 transition-transform"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 emergency-orange text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(234,88,12,0.4)] transform transition-all duration-300 group-hover/btn:scale-110 active:scale-95">
                  <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 6v12l10-6z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Metadata */}
            <div className="absolute top-4 left-4 flex gap-2">
               <span className="bg-trust-blue/80 backdrop-blur-md text-white text-[9px] font-black uppercase px-2 py-1 rounded-md tracking-widest">{video.duration}</span>
               <span className="bg-emergency-orange/80 backdrop-blur-md text-white text-[9px] font-black uppercase px-2 py-1 rounded-md tracking-widest">{video.level}</span>
            </div>
          </button>
        ) : (
          <div className="w-full h-full bg-black relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-emergency-orange border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <iframe 
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&modestbranding=1&rel=0`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emergency-orange animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{video.category} Service Guide</span>
        </div>
        <h3 className="text-xl font-black text-trust-blue mb-3 leading-tight uppercase tracking-tighter group-hover:text-emergency-orange transition-colors">
          {video.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
          {video.description}
        </p>
        <button 
          onClick={() => !isPlaying && handlePlay()}
          className="group/link flex items-center gap-2 text-trust-blue font-black uppercase tracking-widest text-[11px] hover:text-emergency-orange transition-colors"
        >
          {isPlaying ? 'Now Playing' : 'Start Education'}
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-emergency-orange group-hover/link:text-white transition-all">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const troubleshootingVideos = [
    {
      title: "Strange Furnace Noises?",
      description: "Differentiate between normal system startup sounds and critical failure warnings like screeching or banging.",
      embedId: "qHn2k0_XpLg",
      category: "Heating",
      duration: "3:42",
      level: "Essential"
    },
    {
      title: "AC Efficiency Secrets",
      description: "Learn how to optimize your air conditioner's cooling power while reducing peak-hour energy consumption.",
      embedId: "M_zLz5k9zE4",
      category: "Cooling",
      duration: "5:15",
      level: "Intermediate"
    },
    {
      title: "Filter Health 101",
      description: "A deep dive into why high-MERV filters might be hurting your blower motor and when to swap them.",
      embedId: "vBvXg7N6L1U",
      category: "Maintenance",
      duration: "2:10",
      level: "DIY-Safe"
    },
    {
      title: "Thermostat Logic",
      description: "Troubleshooting digital communication errors between your smart thermostat and your furnace control board.",
      embedId: "8x8XzWkF_0s",
      category: "Electrical",
      duration: "4:30",
      level: "Technical"
    }
  ];

  const serviceFAQs = [
    {
      question: "How often should I have my HVAC system serviced?",
      answer: "We recommend a professional tune-up twice a year: once in the spring for your AC and once in the fall for your furnace. Regular maintenance ensures peak efficiency, prevents mid-season breakdowns, and is often a requirement to keep your manufacturer's warranty valid."
    },
    {
      question: "What are the warning signs my furnace needs repair?",
      answer: "Common warning signs include unusual noises (banging, whistling, or rattling), a sudden increase in energy bills, the furnace cycling on and off frequently, or yellow/flickering burner flames instead of a steady blue. If you notice any of these, it's best to call us immediately."
    },
    {
      question: "How often should I change my air filters?",
      answer: "For standard 1-inch filters, we recommend changing them every 1-3 months. If you have pets, allergies, or a large family, monthly changes are best. Higher-efficiency 4-inch or 5-inch media filters can typically last 6-12 months. Clean filters are vital for airflow and preventing blower motor burnout."
    },
    {
      question: "Is it worth upgrading to a high-efficiency heat pump?",
      answer: "Absolutely. With Ontario's current rebates of up to $7,100, the 'after-rebate' cost of a heat pump is often comparable to a standard AC. Heat pumps provide both heating and cooling, and high-efficiency models can significantly reduce your monthly carbon footprint and energy costs."
    },
    {
      question: "What should I check before calling for a service visit?",
      answer: "Before booking a call, check that your thermostat has fresh batteries and is set to the correct mode (Heat/Cool), ensure your air filter isn't clogged, and verify that the circuit breaker for your HVAC unit hasn't tripped. These simple checks can often save you the cost of a service visit!"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="trust-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 pointer-events-none">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Certified HVAC Engineering</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
            Professional solutions for every season. We specialize in high-efficiency equipment tailored for the GTA climate.
          </p>
        </div>
      </section>

      {/* Furnace Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue uppercase tracking-tighter">Heating & Furnace Architecture</h2>
            <div className="w-24 h-2 bg-emergency-orange"></div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Don't get left in the cold. Our licensed technicians handle everything from minor thermal coupling repairs to full high-efficiency gas furnace installations. We service all major brands including Lennox, Carrier, and York.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['24/7 Emergency Dispatch', 'Precision Diagnostics', 'High-Efficiency Upgrades', 'Carbon Monoxide Checks'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-black uppercase tracking-tighter text-sm">
                  <div className="w-5 h-5 bg-orange-100 text-emergency-orange rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-3 emergency-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition shadow-2xl uppercase tracking-tighter">
              Book Furnace Repair
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-slate-900/5 rounded-[3rem] -z-10"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb79a7?auto=format&fit=crop&q=80&w=1000&h=800" 
                alt="High Efficiency Gas Furnace Service" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* AC Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue uppercase tracking-tighter">Cooling & Air Optimization</h2>
            <div className="w-24 h-2 bg-trust-blue"></div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Stay cool during the humid GTA summers. We provide quiet, efficient, and reliable central air conditioning and ductless mini-split systems that keep your home comfortable while lowering energy costs.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Central AC Design', 'Ductless Mini-Splits', 'Leak Detection', 'Condenser Overhauls'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-black uppercase tracking-tighter text-sm">
                  <div className="w-5 h-5 bg-blue-100 text-trust-blue rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-3 trust-blue text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition shadow-2xl uppercase tracking-tighter">
              Get Cooling Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-trust-blue/5 rounded-[3rem] -z-10"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1000&h=800" 
                alt="Professional Central Air Conditioning Installation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Learning Center */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-emergency-orange font-black uppercase tracking-[0.3em] text-xs mb-4 block">Knowledge Repository</span>
              <h2 className="text-3xl md:text-5xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-6">
                HVAC Video <span className="text-slate-400 italic">Learning Center</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Empowering Mississauga homeowners with professional insights. Watch our technicians explain common diagnostic red flags and maintenance protocols.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center md:text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Content Status</p>
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-black text-trust-blue uppercase tracking-tighter">Updated Weekly</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {troubleshootingVideos.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
          
          <div className="mt-20 bg-trust-blue p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 text-center lg:text-left">
              <div className="max-w-2xl">
                <h4 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Diagnostic support needed?</h4>
                <p className="text-blue-100 text-lg font-medium">Our 24/7 technical dispatchers are ready to send a field engineer to your Mississauga location within 2-4 hours.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="tel:6477465959" className="emergency-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition shadow-2xl uppercase tracking-tighter text-center">Dispatch Now</a>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition uppercase tracking-tighter text-center">Request Audit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebate Calculator Section Integration */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue uppercase tracking-tighter">Financial Optimization</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Maximize your Ontario Heat Pump Grants</p>
          </div>
          <RebateCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue mb-4 uppercase tracking-tighter">Technical FAQ Repository</h2>
            <div className="w-20 h-1.5 bg-emergency-orange mx-auto"></div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-inner space-y-2">
            {serviceFAQs.map((faq, index) => (
              <ServiceFAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Final CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-none">Ready for a Technical Upgrade?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl flex items-center gap-3 justify-center">
              Call Engineer: (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-100 transition shadow-lg inline-block uppercase tracking-tighter">
              Book Smart Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
