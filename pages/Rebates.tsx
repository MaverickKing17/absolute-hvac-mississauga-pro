
import React, { useState } from 'react';
import RebateCalculator from '../components/RebateCalculator';

const FAQItem: React.FC<{ question: string; answer: string; category: string; icon: React.ReactNode }> = ({ question, answer, category, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Financial': case 'Eligibility': case 'Timeline': return 'text-green-600 bg-green-50';
      case 'Technical': case 'Performance': return 'text-blue-600 bg-blue-50';
      case 'Urgency': return 'text-red-600 bg-red-50';
      default: return 'text-slate-500 bg-slate-50';
    }
  };

  return (
    <div className={`group mb-4 transition-all duration-500 border-2 rounded-2xl overflow-hidden ${isOpen ? 'border-trust-blue shadow-[0_15px_40px_rgba(30,58,138,0.1)] bg-white' : 'border-slate-50 bg-slate-50/30 hover:border-slate-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-xl transition-colors ${isOpen ? 'bg-trust-blue text-white' : 'bg-white text-slate-400 group-hover:text-trust-blue group-hover:bg-blue-50'}`}>
            {icon}
          </div>
          <div>
            <span className={`inline-block text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-md mb-1.5 ${getCategoryColor(category)}`}>
              {category}
            </span>
            <span className={`block text-base md:text-lg font-bold leading-tight transition-colors ${isOpen ? 'text-trust-blue' : 'text-slate-700'}`}>{question}</span>
          </div>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-trust-blue text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 pb-6 pt-2 ml-14 border-t border-slate-50">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProcessTimeline: React.FC = () => {
  const steps = [
    { 
      step: 1, 
      title: "Neural SmartAudit™", 
      desc: "Our AI model analyzes your home's thermal load profile and historical energy logs to verify eligibility for the top-tier $7,100 grant bracket.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tag: "Step 01: Analysis",
      logs: ["Thermal Map: OK", "Enbridge DB: Active", "Grant Prob: 98%"]
    },
    { 
      step: 2, 
      title: "Precision Install", 
      desc: "TSSA-Certified field engineers deploy your hybrid system. Every component is logged into the Enbridge HER+ compliance portal in real-time.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
      tag: "Step 02: Deployment",
      logs: ["TSSA Audit: PASSED", "Serial Log: STORED", "Node ID: ACTIVE"]
    },
    { 
      step: 3, 
      title: "Rebate Harvesting", 
      desc: "Post-installation data packets are transmitted for final audit. Absolute manages all portal communication to secure your direct deposit.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tag: "Step 03: Payout",
      logs: ["NRCan Sync: COMPLETE", "Audit File: UPLOADED", "Status: FUNDED"]
    }
  ];

  return (
    <div className="relative py-12">
      {/* Desktop Infographic Connector (Neural Path) */}
      <div className="hidden lg:block absolute top-[148px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0">
        <div className="h-full bg-savings-green w-full origin-left animate-[shimmer_2s_infinite]"></div>
        {/* Connection Pulse Nodes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-savings-green rounded-full shadow-[0_0_15px_rgba(5,150,69,0.8)] border-4 border-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-savings-green rounded-full shadow-[0_0_15px_rgba(5,150,69,0.8)] border-4 border-white"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-savings-green rounded-full shadow-[0_0_15px_rgba(5,150,69,0.8)] border-4 border-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 relative z-10">
        {steps.map((item, idx) => (
          <div key={item.step} className="group relative">
            {/* Visual Step Counter & Icon */}
            <div className="flex flex-col items-center mb-8">
               <div className="relative">
                  <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center border-4 border-slate-50 group-hover:border-savings-green transition-all duration-700 relative z-10">
                    <div className="text-trust-blue group-hover:text-savings-green transition-colors duration-500 transform group-hover:scale-110">
                      {item.icon}
                    </div>
                  </div>
                  {/* Neural Scan Line (AI Visual) */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-lg ai-scan-line z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm border-2 border-white shadow-xl z-20 group-hover:bg-savings-green transition-colors">
                    {item.step}
                  </div>
               </div>
            </div>

            {/* Infographic Content Card */}
            <div className="bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 group-hover:border-savings-green/20 relative overflow-hidden flex flex-col h-full">
              {/* Data Visualization Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 -mr-12 -mt-12 rounded-full opacity-50 group-hover:bg-savings-green/10 transition-colors"></div>
              
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-savings-green mb-3 block">{item.tag}</span>
                <h3 className="text-2xl font-black text-trust-blue mb-4 uppercase tracking-tighter group-hover:text-savings-green transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">{item.desc}</p>
              </div>

              {/* Technical Log Overlay (ML Aesthetics) */}
              <div className="mt-auto pt-6 border-t border-slate-50">
                <div className="grid grid-cols-1 gap-2">
                   {item.logs.map((log, lIdx) => (
                     <div key={lIdx} className="flex items-center justify-between text-[8px] font-mono font-black uppercase text-slate-400 group-hover:text-savings-green/70 transition-colors">
                        <span>{log.split(':')[0]}</span>
                        <span className="text-slate-200">..................</span>
                        <span className="text-slate-500 font-bold">{log.split(':')[1]}</span>
                     </div>
                   ))}
                </div>
              </div>

              {/* Mobile Progress Line */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden absolute left-1/2 bottom-[-40px] w-1 h-10 bg-slate-200 z-0">
                  <div className="w-full h-1/2 bg-savings-green animate-pulse"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Infographic Milestone - Success Certificate UI */}
      <div className="mt-24 flex flex-col items-center">
        <div className="relative group max-w-xl w-full">
          <div className="absolute inset-0 bg-savings-green blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative bg-slate-900 rounded-[3.5rem] p-1 border-2 border-white/10 shadow-2xl overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
            
            <div className="bg-slate-950 rounded-[3.3rem] p-8 md:p-12 text-center border border-white/5">
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-savings-green/20 rounded-2xl flex items-center justify-center mb-6 border border-savings-green/30">
                    <svg className="w-10 h-10 text-savings-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">Rebate Secured</h4>
                  <div className="h-1 w-20 bg-savings-green rounded-full mb-6"></div>
                  <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Maximum Funding Extraction Authorized</p>
                  <p className="text-4xl md:text-6xl font-black text-savings-green tracking-tighter tabular-nums">$7,100.00</p>
                  <p className="mt-8 text-[9px] font-mono text-slate-600 uppercase tracking-widest">Protocol: Direct Deposit Cycle | Frequency: Final Audit Verified</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rebates: React.FC = () => {
  const faqData = [
    {
      question: "Am I eligible for the $7,100 rebate?",
      answer: "Eligibility is primarily based on being an Enbridge Gas customer in Ontario and owning a detached, semi-detached, or row townhouse. During our SmartAudit™, we verify your existing insulation and heating efficiency to ensure you qualify for the maximum tier of government funding.",
      category: "Eligibility",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      question: "Do heat pumps really work in Ontario's extreme cold?",
      answer: "Absolutely. We only install 'Cold Climate' Heat Pumps (ccASHP) rated for operation down to -25°C. For peak safety, we often configure a Hybrid System where your existing or new gas furnace acts as a supplementary heat source only on the few days where temperatures drop into extreme ranges.",
      category: "Performance",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16V6a1 1 0 00-2 0v10a3.5 3.5 0 107 0V9a1 1 0 10-2 0v7a1.5 1.5 0 11-3 0z" /></svg>
    },
    {
      question: "How long does it take to receive the rebate check?",
      answer: "Once the post-install energy audit is uploaded, the processing time by Enbridge and NRCan typically ranges from 12 to 20 weeks. We handle 100% of the portal documentation to ensure there are zero administrative delays in your payout.",
      category: "Timeline",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      question: "Do I need to keep my gas furnace as a backup?",
      answer: "It is recommended in Ontario. A Hybrid Dual-Fuel system allows the Heat Pump to handle 90% of the season's load while keeping the furnace for high-intensity cold snaps. This configuration is actually required for many of the higher-tier $7,100 rebates.",
      category: "Technical",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.547 2.188a2 2 0 00.75 2.227l1.722 1.292a2 2 0 002.574-.3l1.166-1.166a2 2 0 00.702-2.227l-.547-2.188z" /></svg>
    },
    {
      question: "Is there a deadline for the $7,100 grant program?",
      answer: "Yes, funding for the HER+ program is finite and allocated by the Federal government. Once the budget is exhausted, the rebate will close without notice. We recommend starting your SmartAudit™ immediately to lock in your spot in the current funding cycle.",
      category: "Urgency",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <section className="relative py-16 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-savings-green text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 md:mb-8 animate-pulse">Mississauga Exclusive: $7,100 Instant Savings</div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-none tracking-tighter uppercase">Get Up to <span className="text-savings-green">$7,100 Back</span> on a New Heat Pump</h1>
          <p className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">Absolute Heating is your Mississauga partner for navigating the latest Enbridge and Federal HVAC rebates. We handle the paperwork, you keep the savings.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:6477465959" className="savings-green hover:scale-[1.02] transition-transform text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-lg md:text-xl shadow-2xl uppercase tracking-tighter text-center">Lock In My Rebate</a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-trust-blue uppercase tracking-tighter">AI Savings Analysis</h2>
            <p className="text-slate-500 text-sm mt-2">Enter your home details for a real-time provincial grant estimate.</p>
          </div>
          <RebateCalculator />
        </div>
      </section>

      <section className="py-24 bg-slate-50 overflow-hidden relative border-y border-slate-100">
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
            <h2 className="text-4xl md:text-5xl font-black text-trust-blue mb-6 uppercase tracking-tighter leading-none">The <span className="text-savings-green">$7,100 Retrieval</span> Architecture</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">We've engineered a frictionless 3-stage process to extract the maximum available government funding for your Mississauga residence.</p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue mb-4 uppercase tracking-tighter">Investment vs Reward</h2>
            <p className="text-slate-600 font-medium">Compare the upfront investment against your final after-rebate cost.</p>
          </div>
          <div className="relative">
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
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-trust-blue mb-4 uppercase tracking-tighter leading-none">Rebate & <span className="text-emergency-orange">Performance</span> FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} category={faq.category} icon={faq.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl transform hover:scale-[1.01] transition-transform">
            <div className="relative p-10 md:p-20 text-center flex flex-col items-center">
              <div className="bg-red-600 text-white px-4 py-1 rounded font-black text-xs uppercase tracking-[0.2em] mb-6 animate-pulse">Action Required</div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Rebate Windows Are Closing</h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">Government funding for the HER+ program is limited and allocated on a first-come, first-served basis. Don't leave $7,100 on the table.</p>
              <a href="tel:6477465959" className="w-full sm:w-auto bg-white text-trust-blue px-10 md:px-12 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-slate-100 transition shadow-2xl uppercase tracking-tighter text-center">(647) 746-5959</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rebates;
