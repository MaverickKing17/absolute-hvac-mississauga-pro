
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-trust-blue group-hover:text-savings-green transition-colors">{question}</span>
        <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-savings-green' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Rebates: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-savings-green text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 animate-pulse">
            Mississauga Exclusive: $7,100 Instant Savings
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Get Up to <span className="text-savings-green">$7,100 Back</span> on a New Heat Pump
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Absolute Heating is your Mississauga partner for navigating the latest Enbridge and Federal HVAC rebates. We handle the paperwork, you keep the savings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:6477465959" className="savings-green hover:scale-105 transition-transform text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl">
              Lock In My Rebate: (647) 746-5959
            </a>
          </div>
        </div>
      </section>

      {/* How It Works (3-Step Process) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-trust-blue mb-4">Your Path to $7,100 Savings</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We've simplified the complex government processes. Here is how we get your money back.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-savings-green">
                <span className="text-3xl font-black text-savings-green">1</span>
              </div>
              <h3 className="text-xl font-bold text-trust-blue mb-3">Free Consultation</h3>
              <p className="text-slate-600">We assess your home and eligibility, ensuring you qualify for the maximum possible grants before you spend a dime.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-savings-green">
                <span className="text-3xl font-black text-savings-green">2</span>
              </div>
              <h3 className="text-xl font-bold text-trust-blue mb-3">Expert Installation</h3>
              <p className="text-slate-600">Our 5-star rated, TSSA-certified team installs your energy-efficient system to the highest regulatory standards.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-savings-green">
                <span className="text-3xl font-black text-savings-green">3</span>
              </div>
              <h3 className="text-xl font-bold text-trust-blue mb-3">Collect Your Rebate</h3>
              <p className="text-slate-600">We help with the documentation and post-install audit to ensure you get your money back directly from Enbridge/Greener Homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator / Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-trust-blue mb-4">Savings Calculator</h2>
            <p className="text-slate-600">Compare the upfront investment against your final after-rebate cost.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-slate-100">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-trust-blue text-white">
                  <th className="px-8 py-6 text-lg font-bold">System Type</th>
                  <th className="px-8 py-6 text-lg font-bold">Typical Upfront Cost</th>
                  <th className="px-8 py-6 text-lg font-bold">Available Rebate</th>
                  <th className="px-8 py-6 text-lg font-bold bg-savings-green">Your Final Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-6">
                    <span className="font-bold text-slate-900 block">High-Efficiency Gas Furnace</span>
                    <span className="text-sm text-slate-500 italic">Standard Replacement</span>
                  </td>
                  <td className="px-8 py-6 text-slate-600">$4,500 - $6,500</td>
                  <td className="px-8 py-6 text-slate-400">$0 - $250</td>
                  <td className="px-8 py-6 font-bold text-slate-900">$4,250 - $6,250</td>
                </tr>
                <tr className="bg-green-50/30 hover:bg-green-50 transition-colors">
                  <td className="px-8 py-6">
                    <span className="font-bold text-trust-blue block">Hybrid Heat Pump System</span>
                    <span className="text-xs font-bold bg-savings-green text-white px-2 py-0.5 rounded uppercase">Most Popular</span>
                  </td>
                  <td className="px-8 py-6 text-slate-600">$11,500 - $14,000</td>
                  <td className="px-8 py-6 text-savings-green font-bold">-$7,100</td>
                  <td className="px-8 py-6 font-black text-2xl text-savings-green">$4,400 - $6,900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600 italic text-center">
              *Estimated costs. Every home in Mississauga is unique. Absolute Heating manages all <strong>TSSA requirements and licensing checks</strong> for the customer to ensure a valid rebate claim.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-trust-blue mb-4">Rebate & Performance FAQ</h2>
            <p className="text-slate-600">Everything you need to know about heat pump technology and the Ontario rebate process.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
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
            <FAQItem 
              question="What is a 'Hybrid' or 'Dual Fuel' system?"
              answer="A hybrid system combines an electric heat pump with your existing or a new high-efficiency gas furnace. The heat pump handles the heating for the majority of the year, while the furnace automatically takes over when temperatures drop below a certain 'switch-point.' This offers the best of both worlds: maximum rebates and total comfort."
            />
            <FAQItem 
              question="Can I use a heat pump with my existing ductwork?"
              answer="In most cases, yes. Our technicians will inspect your current ductwork during the free consultation to ensure it can handle the airflow required by a modern heat pump system. If minor modifications are needed, we handle that as part of the installation."
            />
            <FAQItem 
              question="Which brands qualify for the maximum rebate?"
              answer="We install rebate-eligible equipment from premium brands like Mitsubishi, Daikin, and Lennox. To qualify for the $7,100, the equipment must be NRCan certified as a Cold Climate Heat Pump. We only quote systems that are officially listed on the eligible equipment list."
            />
            <FAQItem 
              question="Is the cost of the energy audit covered?"
              answer="Yes! The Enbridge HER+ program includes an additional $600 reimbursement specifically to cover the cost of your pre- and post-retrofit energy audits. This means the professional assessment is effectively free once you complete your upgrades."
            />
            <FAQItem 
              question="What maintenance does a heat pump require?"
              answer="Similar to an air conditioner or furnace, heat pumps require annual maintenance to ensure peak efficiency. This typically involves cleaning the outdoor condenser coils, checking refrigerant levels, and replacing indoor air filters. We offer affordable annual maintenance plans to keep your system running optimally."
            />
          </div>
        </div>
      </section>

      {/* Final CTA - High Visibility FOMO Box */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl transform hover:scale-[1.01] transition-transform">
            <div className="absolute top-0 right-0 w-64 h-64 bg-savings-green opacity-20 blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-20 blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative p-10 md:p-20 text-center flex flex-col items-center">
              <div className="bg-red-600 text-white px-4 py-1 rounded font-black text-sm uppercase tracking-widest mb-6 animate-pulse">
                Action Required
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Rebate Windows Are Closing</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Government funding for the HER+ program is limited and allocated on a first-come, first-served basis. Don't leave $7,100 on the table.
              </p>
              <a 
                href="tel:6477465959" 
                className="w-full sm:w-auto bg-white text-trust-blue px-12 py-6 rounded-2xl font-black text-2xl hover:bg-slate-100 transition shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
              >
                Call (647) 746-5959 to Lock In Savings
              </a>
              <p className="mt-8 text-slate-500 font-bold uppercase tracking-tighter text-sm">
                Absolute Heating & Cooling - Your TSSA Certified Mississauga Partner
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rebates;
