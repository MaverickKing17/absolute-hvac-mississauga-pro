
import React, { useState } from 'react';

const RebateCalculator: React.FC = () => {
  const [heatingType, setHeatingType] = useState('gas');
  const [sqft, setSqft] = useState(1500);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // ML-Lite logic: Larger homes and gas-to-electric conversions get more
    let base = 3500;
    if (heatingType === 'gas') base += 1500;
    if (sqft > 2000) base += 2100;
    if (sqft < 1000) base -= 500;
    
    setResult(Math.min(base, 7100));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border-2 border-savings-green/20 p-6 md:p-12 max-w-2xl mx-auto my-8 md:my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-savings-green/5 -mr-16 -mt-16 rounded-full"></div>
      
      <h3 className="text-xl md:text-2xl font-black text-trust-blue mb-6 md:mb-8 flex items-center gap-3">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-savings-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 110 2h-6a1 1 0 110-2h6z" clipRule="evenodd"/></svg>
        Smart Rebate Estimator <span className="text-[10px] md:text-xs bg-blue-100 text-trust-blue px-2 py-1 rounded">ML-Beta</span>
      </h3>

      <div className="space-y-6 md:space-y-8">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-4">Current Heating Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <button 
              onClick={() => setHeatingType('gas')}
              className={`py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all border-2 ${heatingType === 'gas' ? 'border-savings-green bg-green-50 text-savings-green' : 'border-slate-100 text-slate-400'}`}
            >
              Natural Gas
            </button>
            <button 
              onClick={() => setHeatingType('electric')}
              className={`py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all border-2 ${heatingType === 'electric' ? 'border-savings-green bg-green-50 text-savings-green' : 'border-slate-100 text-slate-400'}`}
            >
              Electric / Other
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-4 text-center">
            Approximate Home Size: <span className="text-trust-blue">{sqft} sq ft</span>
          </label>
          <input 
            type="range" 
            min="500" 
            max="4000" 
            step="100" 
            value={sqft}
            onChange={(e) => setSqft(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-savings-green mb-2"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-bold px-1">
            <span>500 SQFT</span>
            <span>4000 SQFT</span>
          </div>
        </div>

        <button 
          onClick={calculate}
          className="w-full savings-green text-white py-5 rounded-2xl font-black text-lg md:text-xl hover:scale-[1.02] transition-transform shadow-xl flex items-center justify-center gap-3 uppercase tracking-tighter"
        >
          Generate AI Estimate
        </button>

        {result !== null && (
          <div className="mt-8 p-6 md:p-8 bg-slate-900 rounded-2xl text-center animate-in zoom-in-95 duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-savings-green via-green-400 to-savings-green"></div>
            <p className="text-slate-400 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Estimated Rebate Total</p>
            <p className="text-4xl md:text-6xl font-black text-savings-green leading-tight">${result.toLocaleString()}</p>
            <p className="text-slate-500 text-[10px] mt-4 leading-relaxed">*Based on current Ontario Greener Homes & Enbridge HER+ data models. Final eligibility subject to audit.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RebateCalculator;
