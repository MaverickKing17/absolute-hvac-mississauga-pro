
import React from 'react';
import { Link } from 'react-router-dom';

const Rebates: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="emergency-orange py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Ontario Heat Pump Rebates</h1>
          <p className="text-orange-50 text-xl max-w-3xl mx-auto leading-relaxed">
            Don't miss out on your share of the Greener Homes Grant and Enbridge HER+ programs. Claim up to <span className="font-extrabold underline">$7,100 in government incentives</span>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-bold text-trust-blue mb-8">How The $7,100 Rebate Works</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 trust-blue text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pre-Retrofit Energy Audit</h3>
                  <p className="text-slate-600 leading-relaxed">
                    A registered energy advisor must assess your home before any work begins. This is a mandatory step to qualify for the HER+ program.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 trust-blue text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Absolute Heating & Cooling installs a qualifying high-efficiency Cold Climate Heat Pump. We ensure the equipment meets all technical specs for the rebate.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 trust-blue text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Post-Retrofit Audit & Payout</h3>
                  <p className="text-slate-600 leading-relaxed">
                    The advisor returns to confirm the installation. You submit the receipts, and the government sends you a check for up to $7,100!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-trust-blue rounded-r-lg">
              <h4 className="font-bold text-trust-blue mb-2 italic">Why Choose A Heat Pump?</h4>
              <p className="text-blue-900 leading-relaxed">
                Heat pumps are up to 300% more efficient than traditional gas furnaces. They provide both heating in the winter and cooling in the summer using a single, quiet unit. With current rebates, the "net cost" of a heat pump is often lower than a new furnace/AC combo!
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-trust-blue mb-6">Are You Eligible?</h3>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Eligiblity depends on your location (must be in Ontario), your current heating source, and utility provider (Enbridge customers get priority access).</p>
            <Link 
              to="/contact" 
              className="emergency-orange text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition shadow-2xl inline-block"
            >
              Start Your Free Rebate Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Rebate Chart */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-trust-blue mb-12">Potential Savings Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="trust-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Upgrade Type</th>
                  <th className="px-6 py-4 text-right">Max Rebate Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 text-left font-medium text-slate-800">Cold Climate Heat Pump (ccASHP)</td>
                  <td className="px-6 py-4 text-right font-bold text-emergency-orange">$6,500 - $7,100</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-left font-medium text-slate-800">Standard Heat Pump</td>
                  <td className="px-6 py-4 text-right font-bold text-slate-600">$4,000 - $5,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-left font-medium text-slate-800">Hybrid Heating System</td>
                  <td className="px-6 py-4 text-right font-bold text-slate-600">$4,500+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-left font-medium text-slate-800">Audit Cost Reimbursement</td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">$600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rebates;
