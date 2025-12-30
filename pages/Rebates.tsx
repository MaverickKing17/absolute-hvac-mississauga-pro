
import React, { useState } from 'react';
import RebateCalculator from '../components/RebateCalculator';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-bold text-trust-blue group-hover:text-savings-green transition-colors">{question}</span>
        <svg className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-savings-green' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const ProcessTimeline: React.FC = () => {
  const steps = [
    { 
      step: 1, 
      title: "Free Consultation", 
      desc: "Our data-driven specialists assess your property's specific load requirements and eligibility, ensuring you qualify for the full $7,100 before we start.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      tag: "Zero Cost Audit"
    },
    { 
      step: 2, 
      title: "Precision Install", 
      desc: "Our TSSA-Certified engineering team installs your high-efficiency system. We prioritize technical compliance to meet strict Enbridge standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tag: "Certified Setup"
    },
    { 
      step: 3, 
      title: "Rebate Harvesting", 
      desc: "Post-install, we manage the final audit documentation and portal submission. Your rebate check is processed directly for maximum payout.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tag: "Direct Deposit"
    }
  ];

  return (
    <div className="relative py-12">
      {/* Desktop Horizontal Line */}
      <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-1 bg-slate-200 z-0">
        <div className="h-full bg-savings-green w-2/3 animate-[shimmer_3s_infinite] origin-left"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
        {steps.map((item, idx) => (
          <div key={item.step} className="group flex flex-col items-center">
            {/* Step Bubble */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border-4 border-slate-50 group-hover:border-savings-green transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                <div className="text-trust-blue group-hover:text-savings-green transition-colors">
                  {item.icon}
                </div>
              </div>
              
              {/* Step Number Overlay */}
              <div className="absolute -top-3 -right-3 w-10 h-10 savings-green text-white rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-lg">
                {item.step}
              </div>

              {/* Connector for Mobile */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden absolute left-1/2 bottom-[-64px] w-1 h-16 bg-slate-200">
                  <div className="w-full h-1/2 bg-savings-green animate-pulse"></div>
                </div>
              )}
            </div>

            {/* Content Box */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-savings-green/20 text-center flex flex-col h-full max-w-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-savings-green mb-3 block">
                {item.tag}
              </span>
              <h3 className="text-2xl font-black text-trust-blue mb-4 uppercase tracking-tighter group-hover:text-savings-green transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                {item.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Standard Protocol Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Final Outcome Marker */}
      <div className="mt-24 flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="savings-green px-10 py-4 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 cursor-default group">
          <div className="flex items-center gap-4 text-white">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none mb-1">Target Achievement</p>
              <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">$7,100 Rebate Secured</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rebates: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-savings-green text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 md:mb-8 animate-pulse">
            Mississauga Exclusive: $7,100 Instant Savings
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-none tracking-tighter uppercase">
            Get Up to <span className="text-savings-green">$7,100 Back</span> on a New Heat Pump
          </h1>
          <p className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
            Absolute Heating is your Mississauga partner for navigating the latest Enbridge and Federal HVAC rebates. We handle the paperwork, you keep the savings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:6477465959" className="savings-green hover:scale-[1.02] transition-transform text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-lg md:text-xl shadow-2xl uppercase tracking-tighter text-center">
              Lock In My Rebate
            </a>
          </div>
        </div>
      </section>

      {/* Smart Calculator Feature */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-trust-blue uppercase tracking-tighter">AI Savings Analysis</h2>
            <p className="text-slate-500 text-sm mt-2">Enter your home details for a real-time provincial grant estimate.</p>
          </div>
          <RebateCalculator />
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="timeline-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#timeline-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span className="text-[10px] text-green-700 font-black uppercase tracking-widest">Efficiency Optimized Protocol</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-trust-blue mb-6 uppercase tracking-tighter leading-none">
              The <span className="text-savings-green">$7,100 Retrieval</span> Architecture
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
              We've engineered a frictionless 3-stage process to extract the maximum available government funding for your Mississauga residence.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue mb-4 uppercase tracking-tighter">Investment vs Reward</h2>
            <p className="text-slate-600 font-medium">Compare the upfront investment against your final after-rebate cost.</p>
          </div>

          <div className="relative">
            {/* Mobile Scroll Indicator */}
            <div className="md:hidden flex items-center justify-center gap-2 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 py-2 rounded-xl">
               <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
               Scroll to view full table
               <svg className="w-4 h-4 animate-bounce-x-right" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>

            <div className="overflow-x-auto rounded-[2rem] shadow-2xl border border-slate-100 no-scrollbar">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-trust-blue text-white">
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">System Type</th>
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Typical Upfront</th>
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Available Rebate</th>
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest bg-savings-green">Final Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-6">
                      <span className="font-black text-slate-900 block uppercase tracking-tighter">Gas Furnace</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Standard High Efficiency</span>
                    </td>
                    <td className="px-8 py-6 text-slate-600 font-bold">$4,500 - $6,500</td>
                    <td className="px-8 py-6 text-slate-400 font-bold">$0 - $250</td>
                    <td className="px-8 py-6 font-black text-lg text-slate-900">$4,250 - $6,250</td>
                  </tr>
                  <tr className="bg-green-50/30 hover:bg-green-50 transition-colors">
                    <td className="px-8 py-6">
                      <span className="font-black text-trust-blue block uppercase tracking-tighter">Hybrid Heat Pump</span>
                      <span className="text-[9px] font-black bg-savings-green text-white px-2 py-0.5 rounded uppercase tracking-widest inline-block mt-1">Ontario Top Choice</span>
                    </td>
                    <td className="px-8 py-6 text-slate-600 font-bold">$11,500 - $14,000</td>
                    <td className="px-8 py-6 text-savings-green font-black">-$7,100</td>
                    <td className="px-8 py-6 font-black text-2xl text-savings-green tracking-tighter">$4,400 - $6,900</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <p className="text-[10px] md:text-sm text-slate-500 italic font-medium leading-relaxed">
              *Estimated costs for Mississauga properties. Absolute Heating manages all <strong>TSSA compliance and certification checks</strong> to ensure your rebate claim is 100% valid.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue mb-4 uppercase tracking-tighter">Rebate & Performance FAQ</h2>
            <p className="text-slate-600 font-medium">Everything you need to know about heat pump technology and the Ontario rebate process.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl p-6 md:p-12 border border-slate-100">
            <FAQItem 
              question="Am I eligible for the $7,100 rebate?"
              answer="Most Ontario homeowners who use Enbridge gas and are upgrading their primary residence qualify for the HER+ program. We conduct a free eligibility check during our first visit to confirm your home meets the insulation and equipment requirements."
            />
            <FAQItem 
              question="Do heat pumps really work in Ontario's extreme cold?"
              answer="Yes! Modern 'Cold Climate' heat pumps (ccASHP) are specifically designed to operate efficiently at temperatures as low as -25°C or -30°C. For added peace of mind, many Mississauga homeowners opt for a 'Hybrid' system that uses a gas furnace as a backup for the few extreme deep-freeze days per year."
            />
            <FAQItem 
              question="How long does it take to receive the rebate check?"
              answer="Generally, the rebate checks arrive within 12 to 24 weeks after the post-retrofit energy audit is submitted and approved by Enbridge/NRCan. Absolute Heating provides all the necessary technical documentation and assists you through the portal to ensure your application is processed as quickly as possible."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl transform hover:scale-[1.01] transition-transform">
            <div className="absolute top-0 right-0 w-64 h-64 bg-savings-green opacity-20 blur-3xl -mr-20 -mt-20"></div>
            <div className="relative p-10 md:p-20 text-center flex flex-col items-center">
              <div className="bg-red-600 text-white px-4 py-1 rounded font-black text-xs uppercase tracking-[0.2em] mb-6 animate-pulse">
                Action Required
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Rebate Windows Are Closing</h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
                Government funding for the HER+ program is limited and allocated on a first-come, first-served basis. Don't leave $7,100 on the table.
              </p>
              <a 
                href="tel:6477465959" 
                className="w-full sm:w-auto bg-white text-trust-blue px-10 md:px-12 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-slate-100 transition shadow-2xl uppercase tracking-tighter text-center"
              >
                (647) 746-5959
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rebates;
