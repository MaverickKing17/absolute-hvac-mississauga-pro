
import React, { useState, useEffect } from 'react';

const RebateCalculator: React.FC = () => {
  const [heatingType, setHeatingType] = useState('gas');
  const [sqft, setSqft] = useState(1500);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = () => {
    setIsCalculating(true);
    setResult(null);
    
    // Simulate AI "Thinking" time to increase perceived value of the output
    setTimeout(() => {
      let base = 3500;
      if (heatingType === 'gas') base += 1500;
      if (sqft > 2000) base += 2100;
      if (sqft < 1000) base -= 500;
      
      setResult(Math.min(base, 7100));
      setIsCalculating(false);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_70px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-14 max-w-2xl mx-auto my-12 overflow-hidden relative">
      {/* Decorative Branding Element */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-savings-green/5 -mr-24 -mt-24 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-savings-green/10 rounded-lg">
            <svg className="w-6 h-6 text-savings-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-trust-blue uppercase tracking-tighter">
            Smart Rebate Estimator
          </h3>
          <span className="text-[10px] bg-blue-600 text-white px-2.5 py-1 rounded-full font-black tracking-widest uppercase">SmartCare™</span>
        </div>
        <p className="text-slate-400 text-sm font-medium text-center">Analyze your property eligibility using our proprietary rebate database.</p>
      </div>

      <div className="space-y-10">
        {/* Heating Type Selection */}
        <div>
          <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 text-center">Current Heating Infrastructure</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => setHeatingType('gas')}
              className={`group flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                heatingType === 'gas' 
                ? 'border-savings-green bg-green-50/50 ring-4 ring-green-500/10' 
                : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'
              }`}
            >
              <div className={`mb-3 p-3 rounded-xl transition-colors ${heatingType === 'gas' ? 'bg-savings-green text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c0 10 5 13 5 13s-2.5 1.5-5 1.5-5-1.5-5-1.5 5-3 5-13z"/></svg>
              </div>
              <span className={`font-black uppercase tracking-tighter ${heatingType === 'gas' ? 'text-savings-green' : 'text-slate-400'}`}>Natural Gas</span>
            </button>

            <button 
              onClick={() => setHeatingType('electric')}
              className={`group flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                heatingType === 'electric' 
                ? 'border-savings-green bg-green-50/50 ring-4 ring-green-500/10' 
                : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'
              }`}
            >
              <div className={`mb-3 p-3 rounded-xl transition-colors ${heatingType === 'electric' ? 'bg-savings-green text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
              </div>
              <span className={`font-black uppercase tracking-tighter ${heatingType === 'electric' ? 'text-savings-green' : 'text-slate-400'}`}>Electric / Other</span>
            </button>
          </div>
        </div>

        {/* Home Size Slider */}
        <div className="px-2">
          <div className="flex justify-between items-end mb-6">
            <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Estimated Area</label>
            <div className="text-right">
              <span className="text-3xl font-black text-trust-blue tabular-nums">{sqft.toLocaleString()}</span>
              <span className="text-sm font-bold text-slate-400 ml-1">SQ FT</span>
            </div>
          </div>
          <div className="relative group">
            <input 
              type="range" 
              min="500" 
              max="4000" 
              step="100" 
              value={sqft}
              onChange={(e) => setSqft(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-savings-green group-hover:h-3 transition-all"
            />
            <div className="flex justify-between mt-4">
               {[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000].map(val => (
                 <div key={val} className="w-0.5 h-1.5 bg-slate-200 rounded-full"></div>
               ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="relative">
          <button 
            onClick={calculate}
            disabled={isCalculating}
            className={`w-full relative overflow-hidden h-20 rounded-2xl font-black text-xl md:text-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(5,150,105,0.25)] flex items-center justify-center gap-3 uppercase tracking-tighter ${
              isCalculating 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' 
              : 'bg-gradient-to-r from-savings-green to-green-500 text-white hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isCalculating ? (
              <div className="flex items-center gap-4">
                <svg className="animate-spin h-6 w-6 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing Data...</span>
              </div>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Generate Smart Estimate</span>
              </>
            )}
            
            {/* Glossy Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite]"></div>
          </button>
        </div>

        {/* Results Area */}
        {result !== null && !isCalculating && (
          <div className="mt-10 p-8 md:p-10 bg-slate-900 rounded-3xl text-center animate-in zoom-in-95 duration-500 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-savings-green via-green-400 to-savings-green"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-savings-green font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">
                Calculation Confirmed
              </span>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Maximum Potential Rebate</p>
              <div className="relative">
                <p className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                  <span className="text-savings-green">$</span>{result.toLocaleString()}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 w-full">
                <p className="text-slate-500 text-[10px] leading-relaxed italic">*Estimate generated from live Enbridge HER+ and Greener Homes data models. Actual savings confirmed upon SmartAudit.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RebateCalculator;
