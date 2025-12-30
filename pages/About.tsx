
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-trust-blue mb-6">About Absolute Heating & Cooling Inc</h1>
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
            <img src="https://picsum.photos/id/10/800/1000" alt="Our Team" className="rounded-2xl shadow-2xl relative z-10" />
            <div className="absolute -bottom-6 -right-6 w-full h-full trust-blue rounded-2xl -z-0 opacity-10"></div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-trust-blue mb-4">Visit Our Mississauga Location</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We are conveniently located in the heart of Mississauga at the Flea Market on Mavis Road.</p>
          </div>
          
          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 bg-slate-300">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center bg-blue-50 text-trust-blue text-center p-8">
                <div>
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <p className="font-bold text-xl">3092 Mavis Rd, Mississauga</p>
                  <p>Inside Mississauga Flea Market</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-trust-blue mb-2">Office Hours</h3>
                <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-slate-600">Saturday - Sunday: 9:00 AM - 5:00 PM (Market Hours)</p>
                <p className="text-emergency-orange font-bold mt-2">24/7 Emergency Phone Support</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-trust-blue mb-2">Certification</h3>
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-white border rounded shadow-sm text-xs font-bold uppercase tracking-widest text-slate-500">TSSA Registered</div>
                  <div className="p-3 bg-white border rounded shadow-sm text-xs font-bold uppercase tracking-widest text-slate-500">HRAI Member</div>
                </div>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="trust-blue text-white px-6 py-3 rounded text-center font-bold hover:opacity-90 transition">Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
