
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serviceNeeded, setServiceNeeded] = useState('Furnace Repair');
  const [otherService, setOtherService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Header */}
      <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/40 to-slate-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-emergency-orange font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Communication Protocol</span>
          <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-8">Connect <br/><span className="text-slate-500 italic">Immediately.</span></h1>
          <p className="text-slate-300 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
            Mississauga's priority dispatch node is active. Connect with a licensed field engineer for instant thermal optimization.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* High-Conversion Form */}
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trust-blue/[0.03] -mr-16 -mt-16 rounded-full blur-3xl"></div>
              <h2 className="text-3xl font-black text-trust-blue mb-10 uppercase tracking-tighter flex items-center gap-4">
                Initialize <span className="text-emergency-orange">Booking Protocol</span>
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 p-12 rounded-[2.5rem] text-center animate-in zoom-in-95 duration-500">
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-3xl font-black text-green-800 mb-4 uppercase tracking-tighter">Transmission Successful</h3>
                  <p className="text-green-700 font-bold uppercase tracking-widest text-[10px]">Engineer Contact within 60 Minutes</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Operator Name</label>
                      <input required type="text" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-trust-blue focus:bg-white outline-none transition-all font-bold text-trust-blue" placeholder="IDENTIFY YOURSELF" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Communication Channel</label>
                      <input required type="tel" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-trust-blue focus:bg-white outline-none transition-all font-bold text-trust-blue" placeholder="PHONE NUMBER" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Selected Protocol</label>
                    <select 
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-trust-blue focus:bg-white outline-none transition-all font-bold text-trust-blue appearance-none"
                    >
                      <option value="Furnace Repair">Furnace Repair & Recovery</option>
                      <option value="Heat Pump Quote (Ontario Rebate)">Heat Pump Optimization ($7,100 Rebate)</option>
                      <option value="AC Installation">Cooling Node Installation</option>
                      <option value="Water Heater Service">Thermal Water Management</option>
                      <option value="Other - Please Specify">Custom Mechanical Requirement</option>
                    </select>
                  </div>

                  {serviceNeeded === 'Other - Please Specify' && (
                    <div className="animate-in slide-in-from-top-4 duration-300">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Protocol Details</label>
                      <input 
                        required 
                        type="text" 
                        value={otherService}
                        onChange={(e) => setOtherService(e.target.value)}
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-trust-blue focus:bg-white outline-none transition-all font-bold text-trust-blue" 
                        placeholder="SPECIFY REQUIREMENT" 
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transmission Memo</label>
                    <textarea className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-trust-blue focus:bg-white outline-none transition-all font-bold text-trust-blue h-32 resize-none" placeholder="ADDITIONAL TECHNICAL LOGS..."></textarea>
                  </div>
                  <button type="submit" className="w-full emergency-orange text-white py-6 rounded-[2rem] font-black text-2xl hover:scale-[1.02] transition-all shadow-[0_20px_60px_rgba(234,88,12,0.4)] uppercase tracking-tighter">
                    Broadcast Request
                  </button>
                </form>
              )}
            </div>

            {/* Visual Map & Details */}
            <div className="space-y-12">
              <div className="trust-blue text-white p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(30,58,138,0.2)] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/[0.03] -mr-32 -mb-32 rounded-full blur-3xl"></div>
                <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none">Emergency <br/><span className="text-emergency-orange">Hotline.</span></h2>
                <p className="text-blue-100 mb-12 text-xl font-medium leading-relaxed italic opacity-80">Absolute field engineers are on standby 24/7 for zero-latency emergency recovery.</p>
                <a href="tel:6477465959" className="emergency-orange text-white px-10 py-8 rounded-[2rem] font-black text-3xl text-center hover:scale-[1.05] transition-all shadow-[0_25px_60px_rgba(234,88,12,0.5)] flex items-center justify-center gap-4 uppercase tracking-tighter">
                  <svg className="w-10 h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (647) 746-5959
                </a>
              </div>

              {/* High-Fidelity Map Component */}
              <div className="bg-white rounded-[4rem] border-4 border-slate-50 overflow-hidden shadow-2xl h-[450px] relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.4862214349696!2d-79.67389142345638!3d43.53381467110825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4260f8549301%3A0x6b45e99d8d69785!2sAbsolute%20Heating%20%26%20Cooling%20Inc.!5e0!3m2!1sen!2sca!4v1711736450000!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                ></iframe>
                <div className="absolute top-10 left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[250px] group-hover:translate-y-[-10px] transition-transform duration-700">
                  <p className="text-[10px] font-black text-emergency-orange uppercase tracking-widest mb-2">Flagship Node</p>
                  <p className="text-sm font-black text-trust-blue uppercase tracking-tighter leading-tight">3092 Mavis Rd, Mississauga, ON L5L 5X1</p>
                  <p className="text-[9px] text-slate-400 font-bold mt-2 uppercase italic leading-none">Located Inside Flea Market</p>
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
