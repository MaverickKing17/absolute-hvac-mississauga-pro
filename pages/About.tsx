
import React from 'react';

const About: React.FC = () => {
  const trustBadges = [
    {
      name: "BBB Accredited",
      description: "A+ Rating for ethical business practices and superior customer service standards.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      color: "text-blue-600"
    },
    {
      name: "HomeAdvisor Top Rated",
      description: "Voted #1 for reliability and project quality by Mississauga homeowners.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      color: "text-orange-600"
    },
    {
      name: "Google Guaranteed",
      description: "Local Services provider backed by Google's protection for quality assurance.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      color: "text-green-600"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-trust-blue mb-6 uppercase tracking-tighter">Absolute Heating & Cooling Inc</h1>
            <div className="w-24 h-2 bg-emergency-orange mb-8"></div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Founded in Mississauga, we have built our reputation on two things: technical excellence and honest pricing. We aren't just a big corporation; we are local professionals who live and work in the community.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Based out of our flagship location at the <span className="font-bold text-trust-blue">Mississauga Flea Market (3092 Mavis Rd)</span>, we've served thousands of GTA families with reliable HVAC solutions that last.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emergency-orange">15+</p>
                <p className="text-sm text-slate-500 font-bold uppercase">Years Exp</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emergency-orange">4.9</p>
                <p className="text-sm text-slate-500 font-bold uppercase">Star Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emergency-orange">100%</p>
                <p className="text-sm text-slate-500 font-bold uppercase">TSSA Certified</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <img src="https://picsum.photos/id/10/800/1000" alt="Our Team" className="rounded-2xl shadow-2xl relative z-10 border-4 border-white" />
            <div className="absolute -bottom-6 -right-6 w-full h-full trust-blue rounded-2xl -z-0 opacity-10"></div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-trust-blue uppercase tracking-widest flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-slate-200"></span>
              Industry Trust & Certifications
              <span className="w-8 h-px bg-slate-200"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className={`${badge.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {badge.icon}
                </div>
                <h3 className="text-xl font-bold text-trust-blue mb-3">{badge.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[250px]">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-trust-blue mb-4 uppercase tracking-tighter">Visit Our Mississauga Headquarters</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We are conveniently located in the heart of Mississauga at the Flea Market on Mavis Road.</p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
            <div className="md:w-1/2 h-[450px] bg-slate-300">
              <div className="w-full h-full flex items-center justify-center bg-blue-50 text-trust-blue text-center p-8">
                <div>
                  <div className="w-20 h-20 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <p className="font-black text-2xl uppercase tracking-tighter mb-2">3092 Mavis Rd, Mississauga</p>
                  <p className="text-slate-500 font-medium">Inside Mississauga Flea Market - Aisles 3 & 4</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-xl font-black text-trust-blue mb-4 uppercase tracking-wider border-b-2 border-emergency-orange inline-block">Operation Hours</h3>
                <div className="space-y-2 mt-4 font-medium text-slate-600">
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
                  <div className="px-4 py-2 bg-slate-100 rounded-lg text-[11px] font-black uppercase tracking-widest text-slate-600 border border-slate-200">TSSA Registered</div>
                  <div className="px-4 py-2 bg-slate-100 rounded-lg text-[11px] font-black uppercase tracking-widest text-slate-600 border border-slate-200">HRAI Member</div>
                  <div className="px-4 py-2 bg-slate-100 rounded-lg text-[11px] font-black uppercase tracking-widest text-slate-600 border border-slate-200">Licensed Gas Fitter</div>
                </div>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="trust-blue text-white px-8 py-4 rounded-xl text-center font-black text-lg hover:scale-[1.02] transition-transform shadow-xl">Get Directions Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
