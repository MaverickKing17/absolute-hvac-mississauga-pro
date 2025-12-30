
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

const Services: React.FC = () => {
  const troubleshootingVideos = [
    {
      title: "Strange Furnace Noises?",
      description: "Differentiate between normal system startup and red-flag sounds like banging or screeching.",
      embedId: "qHn2k0_XpLg",
      category: "Heating"
    },
    {
      title: "AC Not Cooling Enough?",
      description: "From dirty coils to frozen lines—learn what causes low cooling performance in hot weather.",
      embedId: "M_zLz5k9zE4",
      category: "Cooling"
    },
    {
      title: "Changing Your Air Filter",
      description: "A quick 1-minute guide to finding and replacing your furnace filter to protect your blower motor.",
      embedId: "vBvXg7N6L1U",
      category: "Maintenance"
    },
    {
      title: "Thermostat Troubleshooting",
      description: "Is it the furnace or just the batteries? Check these 3 things before booking a repair.",
      embedId: "8x8XzWkF_0s",
      category: "Electrical"
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
      <section className="trust-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">Our HVAC Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
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

      {/* Rebate Calculator Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <span className="text-savings-green font-black uppercase tracking-widest text-sm mb-4 block">Ontario Savings Program</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-trust-blue uppercase tracking-tighter leading-none mb-6">
                  Estimate Your <span className="text-savings-green">Instant Savings</span>
                </h2>
                <div className="w-24 h-1.5 bg-emergency-orange mb-8"></div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Switching to a high-efficiency Heat Pump can unlock up to <strong>$7,100 in government rebates</strong>. Use our smart estimator to see how much you could qualify for based on your home size and current energy source.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="bg-trust-blue text-white p-2 rounded-lg shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <p className="text-sm text-trust-blue font-medium">Rebates are limited and processed on a first-come, first-served basis. Secure your eligibility today.</p>
                </div>
                <Link to="/rebates" className="inline-flex items-center gap-2 text-trust-blue font-bold hover:text-emergency-orange transition-colors">
                  View Full Rebate Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <RebateCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Video Learning Center Section */}
      <section className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emergency-orange font-black uppercase tracking-[0.2em] text-sm mb-4 block">Expert Education Series</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-trust-blue mb-4 uppercase tracking-tighter">HVAC Video Learning Center</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Identifying common issues early can save you thousands. Watch our technicians explain the warning signs and DIY maintenance basics.
            </p>
            <div className="w-24 h-1.5 bg-emergency-orange mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {troubleshootingVideos.map((video, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="aspect-video bg-slate-200 relative">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emergency-orange animate-pulse"></span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{video.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-trust-blue mb-2 leading-tight">{video.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow">
                    {video.description}
                  </p>
                  <button className="text-trust-blue text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:text-emergency-orange transition-colors">
                    Watch Full Guide
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-trust-blue mb-1">Still not sure what's wrong?</h4>
              <p className="text-slate-500 text-sm">Our 24/7 dispatchers are ready to send a technician to your door today.</p>
            </div>
            <div className="flex gap-4">
              <a href="tel:6477465959" className="emergency-orange text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg">Call Now</a>
              <Link to="/contact" className="border-2 border-trust-blue text-trust-blue px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition">Book Online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tighter">Our Industry-Leading Warranty</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just fix it; we stand behind it. Absolute Heating & Cooling provides complete peace of mind with every visit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 bg-emergency-orange/20 rounded-xl flex items-center justify-center mb-6 text-emergency-orange">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">10-Year Parts Warranty</h3>
              <p className="text-slate-400 leading-relaxed">Most of our new high-efficiency installations come with a full 10-year manufacturer parts warranty, ensuring long-term protection for your investment.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 bg-emergency-orange/20 rounded-xl flex items-center justify-center mb-6 text-emergency-orange">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">1-Year Labor Guarantee</h3>
              <p className="text-slate-400 leading-relaxed">We provide a 1-year labor warranty on all new installations. If anything isn't working perfectly due to our workmanship, we'll fix it at no cost to you.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 bg-emergency-orange/20 rounded-xl flex items-center justify-center mb-6 text-emergency-orange">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">90-Day Repair Warranty</h3>
              <p className="text-slate-400 leading-relaxed">Every repair we perform is backed by our 90-day parts and labor guarantee. You can trust that our diagnosis and fix will hold up when it matters most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-trust-blue mb-4 uppercase tracking-tighter">Service & Maintenance FAQ</h2>
            <p className="text-slate-600 font-medium">Expert answers to common questions about keeping your home comfortable year-round.</p>
            <div className="w-20 h-1 bg-emergency-orange mx-auto mt-6"></div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-inner">
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-trust-blue mb-8 uppercase tracking-tighter">Ready for a Reliable HVAC Solution?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-xl inline-flex items-center gap-2 justify-center">
              Call (647) 746-5959
            </a>
            <Link to="/contact" className="bg-white text-trust-blue border-2 border-trust-blue px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition shadow-lg inline-block">
              Book Your Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
