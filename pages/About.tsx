
import React from 'react';
import TestimonialCarousel from '../components/TestimonialCarousel';

const About: React.FC = () => {
  const trustBadges = [
    {
      name: "BBB Accredited",
      status: "A+ Rating",
      description: "Recognized for the highest standards of trust and integrity in the HVAC industry across Ontario.",
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
    <div className="flex flex-col">
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-trust-blue mb-6 uppercase tracking-tighter leading-none">Absolute Heating & Cooling Inc</h1>
            <div className="w-24 h-2 bg-emergency-orange mb-8"></div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
              Founded in Mississauga, we have built our reputation on two things: technical excellence and honest pricing. We aren't just a big corporation; we are local professionals who live and work in the community.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
              Based out of our flagship location at the <span className="font-bold text-trust-blue underline decoration-emergency-orange/30">Mississauga Flea Market (3092 Mavis Rd)</span>, we've served thousands of GTA families with reliable HVAC solutions that last.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emergency-orange">15+</p>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Years Exp</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emergency-orange">4.9</p>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Star Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emergency-orange">100%</p>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">TSSA Certified</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-trust-blue/20 to-emergency-orange/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity opacity-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Professional Absolute HVAC Technician at work in Mississauga" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-white grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full trust-blue rounded-[2.5rem] -z-0 opacity-10"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Badges Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-trust-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">Proven Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-6">
              Industry <span className="text-emergency-orange">Credentials</span> & Trust
            </h2>
            <div className="w-32 h-1.5 bg-slate-200 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trustBadges.map((badge, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col items-center text-center p-12 bg-white rounded-[3rem] border-2 border-slate-50 hover:border-trust-blue/30 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(30,58,138,0.12)] transition-all duration-500 hover:-translate-y-3 cursor-default"
              >
                {/* Status Ribbon/Badge */}
                <div className="absolute top-6 right-8 bg-slate-100 group-hover:bg-trust-blue group-hover:text-white text-slate-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest transition-colors duration-300">
                  {badge.status}
                </div>

                {/* Larger Icon with Shield effect */}
                <div className={`mb-10 p-8 ${badge.bg} rounded-[2.5rem] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                  <div className={`${badge.color}`}>
                    {badge.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-trust-blue mb-4 uppercase tracking-tighter leading-tight">
                  {badge.name}
                </h3>
                
                <p className="text-slate-500 text-base leading-relaxed font-medium">
                  {badge.description}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-8 w-12 h-1 bg-slate-100 group-hover:w-24 group-hover:bg-emergency-orange transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-slate-200"></span>
              Licensed • Insured • TSSA Registered
              <span className="h-px w-8 bg-slate-200"></span>
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-emergency-orange font-black uppercase tracking-[0.2em] text-sm mb-4 block">Social Proof</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-trust-blue uppercase tracking-tighter leading-none">
                What Our Customers <span className="text-emergency-orange">In Mississauga</span> Say
              </h2>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 hidden md:block">
              <div className="flex text-yellow-400 gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">4.9/5 Based on 500+ Google Reviews</p>
            </div>
          </div>
          
          <TestimonialCarousel />

          {/* AI Transparency Disclaimer */}
          <div className="mt-12 flex justify-center">
            <div className="bg-slate-100/80 border border-slate-200 px-8 py-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 max-w-4xl shadow-inner group">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 text-trust-blue transform group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em] text-center md:text-left leading-relaxed">
                <span className="text-trust-blue font-black">AI Transparency Note:</span> All customer feedback is processed through proprietary Absolute SmartCare™ machine learning models to identify service trends and sentiment. Data is strictly <span className="text-emergency-orange">anonymized</span> and used exclusively for internal service optimization and technical training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-trust-blue mb-4 uppercase tracking-tighter">Visit Our Mississauga Headquarters</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">We are conveniently located in the heart of Mississauga at the Flea Market on Mavis Road.</p>
          </div>
          
          <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
            <div className="md:w-1/2 h-[450px] bg-slate-300">
              <div className="w-full h-full flex items-center justify-center bg-blue-50 text-trust-blue text-center p-8">
                <div>
                  <div className="w-20 h-20 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <p className="font-black text-2xl uppercase tracking-tighter mb-2">3092 Mavis Rd, Mississauga</p>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs italic">Inside Mississauga Flea Market - Aisles 3 & 4</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-xl font-black text-trust-blue mb-4 uppercase tracking-wider border-b-2 border-emergency-orange inline-block">Operation Hours</h3>
                <div className="space-y-2 mt-4 font-bold text-slate-600">
                  <p className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Sat - Sun:</span> <span>9:00 AM - 5:00 PM</span></p>
                  <p className="text-emergency-orange font-black mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                    24/7 EMERGENCY DISPATCH AVAILABLE
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-trust-blue mb-4 uppercase tracking-wider border-b-2 border-emergency-orange inline-block">Certification</h3>
                <div className="flex flex-wrap gap-4 items-center mt-4">
                  <div className="px-4 py-2 bg-white rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 border border-slate-200 shadow-sm">TSSA Registered</div>
                  <div className="px-4 py-2 bg-white rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 border border-slate-200 shadow-sm">HRAI Member</div>
                  <div className="px-4 py-2 bg-white rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 border border-slate-200 shadow-sm">Licensed Gas Fitter</div>
                </div>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="trust-blue text-white px-8 py-5 rounded-2xl text-center font-black text-xl hover:scale-[1.02] transition-transform shadow-xl uppercase tracking-tighter">Get Directions Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
