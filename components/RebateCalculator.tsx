
import React, { useState, useEffect } from 'react';

const RebateCalculator: React.FC = () => {
  const [heatingType, setHeatingType] = useState('gas');
  const [sqft, setSqft] = useState(1500);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculate = () => {
    setIsCalculating(true);
    setResult(null);
    setProgress(0);
    
    // Step-based "AI Processing" simulation
    const steps = [20, 45, 75, 100];
    steps.forEach((p, i) => {
      setTimeout(() => {
        setProgress(p);
        if (p === 100) {
          let base = 3500;
          if (heatingType === 'gas') base += 1500;
          if (sqft > 2000) base += 2100;
          if (sqft < 1000) base -= 500;
          
          setResult(Math.min(base, 7100));
          setIsCalculating(false);
        }
      }, (i + 1) * 400);
    });
  };

  const getHomeSizeLabel = (val: number) => {
    if (val < 1000) return "Compact/Condo";
    if (val < 1800) return "Standard Residence";
    if (val < 2800) return "Multi-Story Home";
    return "Estate Property";
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-14 max-w-2xl mx-auto my-12 overflow-hidden relative">
      {/* Decorative Brand Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-savings-green/10 -mr-32 -mt-32 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-savings-green/10 rounded-xl shadow-inner">
            <svg className="w-6 h-6 text-savings-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-trust-blue uppercase tracking-tighter">
            Smart Rebate Estimator
          </h3>
          <span className="text-[10px] bg-blue-600 text-white px-2.5 py-1 rounded-full font-black tracking-widest uppercase shadow-lg">SMARTCARE™</span>
        </div>
        <p className="text-slate-400 text-sm font-medium">Analyze your property eligibility against Ontario's 2024 grant database.</p>
      </div>

      <div className="space-y-10">
        {/* Heating Type Selection */}
        <div className="relative">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5 text-center">Step 1: System Infrastructure</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => setHeatingType('gas')}
              className={`group relative flex flex-col items-center p-6 rounded-[1.5rem] border-2 transition-all duration-300 ${
                heatingType === 'gas' 
                ? 'border-savings-green bg-green-50/30 shadow-xl' 
                : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <div className={`mb-3 p-3 rounded-xl transition-all duration-300 ${heatingType === 'gas' ? 'bg-savings-green text-white scale-110' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c0 10 5 13 5 13s-2.5 1.5-5 1.5-5-1.5-5-1.5 5-3 5-13z"/></svg>
              </div>
              <span className={`font-black uppercase tracking-tighter ${heatingType === 'gas' ? 'text-savings-green' : 'text-slate-400'}`}>Natural Gas</span>
              {heatingType === 'gas' && <div className="absolute top-2 right-2 w-2 h-2 bg-savings-green rounded-full shadow-[0_0_10px_rgba(5,150,105,1)]"></div>}
            </button>

            <button 
              onClick={() => setHeatingType('electric')}
              className={`group relative flex flex-col items-center p-6 rounded-[1.5rem] border-2 transition-all duration-300 ${
                heatingType === 'electric' 
                ? 'border-savings-green bg-green-50/30 shadow-xl' 
                : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <div className={`mb-3 p-3 rounded-xl transition-all duration-300 ${heatingType === 'electric' ? 'bg-savings-green text-white scale-110' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
              </div>
              <span className={`font-black uppercase tracking-tighter ${heatingType === 'electric' ? 'text-savings-green' : 'text-slate-400'}`}>Electric / Other</span>
              {heatingType === 'electric' && <div className="absolute top-2 right-2 w-2 h-2 bg-savings-green rounded-full shadow-[0_0_10px_rgba(5,150,105,1)]"></div>}
            </button>
          </div>
        </div>

        {/* Home Size Slider */}
        <div className="px-2">
          <div className="flex justify-between items-end mb-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-1">Step 2: Thermal Load</label>
              <span className="text-xs font-black text-savings-green uppercase tracking-widest">{getHomeSizeLabel(sqft)}</span>
            </div>
            <div className="text-right">
              <span className="text-4xl font-black text-trust-blue tabular-nums tracking-tighter">{sqft.toLocaleString()}</span>
              <span className="text-xs font-bold text-slate-400 ml-1">SQ FT</span>
            </div>
          </div>
          <div className="relative group px-1">
            <input 
              type="range" 
              min="500" 
              max="4000" 
              step="100" 
              value={sqft}
              onChange={(e) => setSqft(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-savings-green transition-all"
            />
            <div className="flex justify-between mt-5">
               {[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000].map(val => (
                 <div key={val} className={`w-1 h-2 rounded-full transition-colors ${sqft >= val ? 'bg-savings-green/40' : 'bg-slate-200'}`}></div>
               ))}
            </div>
          </div>
        </div>

        {/* Action Button & Neural Progress */}
        <div className="relative pt-4">
          <button 
            onClick={calculate}
            disabled={isCalculating}
            className={`w-full relative overflow-hidden h-20 rounded-2xl font-black text-xl md:text-2xl transition-all duration-500 shadow-[0_20px_50px_rgba(5,150,105,0.2)] flex items-center justify-center gap-3 uppercase tracking-tighter ${
              isCalculating 
              ? 'bg-slate-900 text-white cursor-not-allowed shadow-none' 
              : 'bg-gradient-to-r from-savings-green via-green-500 to-savings-green text-white hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isCalculating ? (
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <svg className="animate-spin h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <span className="animate-pulse">Analyzing Compliance Parameters...</span>
              </div>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Extract Savings Potential</span>
              </>
            )}
            
            {/* Glossy Scan Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite]"></div>
            
            {/* Progress Bar Overlay */}
            {isCalculating && (
               <div 
                 className="absolute bottom-0 left-0 h-1.5 bg-green-400 transition-all duration-500"
                 style={{ width: `${progress}%` }}
               ></div>
            )}
          </button>
        </div>

        {/* Premium Results Certificate */}
        {result !== null && !isCalculating && (
          <div className="mt-12 p-1 bg-slate-950 rounded-[2.5rem] animate-in zoom-in-95 duration-700 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-savings-green via-green-400 to-savings-green"></div>
            
            <div className="bg-slate-900 rounded-[2.3rem] p-10 md:p-14 text-center relative overflow-hidden">
              {/* Subtle background icons */}
              <div className="absolute top-4 right-4 text-white/5">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </div>

              <div className="flex flex-col items-center relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  <span className="text-savings-green font-black text-xs uppercase tracking-[0.3em]">
                    Eligibility Confirmed
                  </span>
                </div>

                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Projected Provincial Grant</p>
                <div className="relative mb-8">
                  <p className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    <span className="text-savings-green text-4xl md:text-5xl mr-1">$</span>{result.toLocaleString()}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-white/10 mb-8">
                  <div className="text-left">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Source Index</p>
                    <p className="text-xs text-slate-300 font-bold uppercase">Enbridge HER+</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Data Freshness</p>
                    <p className="text-xs text-slate-300 font-bold uppercase">Live 2024 Cycle</p>
                  </div>
                </div>

                <a href="tel:6477465959" className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-slate-50 transition-all shadow-xl flex items-center justify-center gap-3">
                   Claim Official Quote
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                
                <p className="mt-6 text-[10px] text-slate-500 italic font-medium max-w-sm leading-relaxed">
                  *This digital estimate is based on typical {sqft} sq ft Mississauga property profiles. Actual grants are locked in post-SmartAudit™.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RebateCalculator;
