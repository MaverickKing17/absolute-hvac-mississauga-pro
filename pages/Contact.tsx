
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col">
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-trust-blue mb-4">Contact Us</h1>
            <p className="text-slate-600 text-lg">Speak with an HVAC expert today. No hidden fees, just honest service.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-trust-blue mb-6">Request A Free Quote</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Received!</h3>
                  <p className="text-green-700">A member of our team will contact you within the next hour.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition" placeholder="(647) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition">
                      <option>Furnace Repair</option>
                      <option>Heat Pump Quote (Ontario Rebate)</option>
                      <option>AC Installation</option>
                      <option>Water Heater Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                    <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition h-32" placeholder="Tell us more about your issue..."></textarea>
                  </div>
                  <button type="submit" className="w-full emergency-orange text-white py-4 rounded-xl font-bold text-lg hover:opacity-95 transition shadow-lg">
                    Send Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="trust-blue text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
                <p className="text-blue-100 mb-10 text-lg">For emergencies like gas leaks, furnace failures, or AC breakdowns, call our direct line 24/7.</p>
                <a href="tel:6477465959" className="emergency-orange text-white px-8 py-5 rounded-2xl font-extrabold text-2xl text-center hover:scale-105 transition shadow-2xl flex items-center justify-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (647) 746-5959
                </a>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-md">
                <h3 className="text-xl font-bold text-trust-blue mb-4">Location Details</h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-emergency-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <p>3092 Mavis Rd, Mississauga, ON L5L 5X1<br/><span className="text-sm italic">Located inside Mississauga Flea Market</span></p>
                  </div>
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-emergency-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <p>support@absoluteheatingcooling.ca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
