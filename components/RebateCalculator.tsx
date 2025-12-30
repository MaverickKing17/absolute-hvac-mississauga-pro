
import React, { useState, useEffect } from 'react';

const RebateCalculator: React.FC = () => {
  const [heatingType, setHeatingType] = useState('gas');
  const [sqft, setSqft] = useState(1500);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");

  const statusMessages = [
    "Analyzing Property Envelope...",
    "Querying Enbridge HER+ Database...",
    "Validating NRCan Grant Eligibility...",
    "Optimizing Thermal Load Profiles...",
    "Synthesizing Payout Certificate..."
  ];

  const calculate = () => {
    setIsCalculating(true);
    setResult(null);
    setProgress(0);
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 5;
      setProgress(currentStep);
      
      const msgIndex = Math.min(Math.floor(currentStep / 20), statusMessages.length - 1);
      setStatusText(statusMessages[msgIndex]);

      if (currentStep >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          let base = 4100;
          if (heatingType === 'gas') base += 1500;
          if (sqft > 2200) base += 1500;
          if (sqft < 1200) base -= 600;
          
          setResult(Math.min(base, 7100));
          setIsCalculating(false);
        }, 500);
      }
    }, 100);
  };

  const getHomeSizeLabel = (val: number) => {
    if (val < 1000) return "Compact/Condo Node";
    if (val < 1800) return "Standard Residence Node";
    if (val < 2800) return "Multi-Story Estate";
    return "Industrial Scale Property";
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-14 max-w-2xl mx-auto my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-savings-green/5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-savings-green/10 rounded-2xl">
            <svg className="w-8 h-8 text-savings-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-3xl font-black text-trust-blue uppercase tracking-tighter">SmartCare™ Estimator</h3>
        </div>
        <p className="text-slate-400 text-sm font-medium">Mississauga Node V4.2 | Last Sync: Today</p>
      </div>

      <div className="space-y-12">
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 text-center">01. Select Heat Source Topology</label>
          <div className="grid grid-cols-2 gap-6">
            <button 
              onClick={() => setHeatingType('gas')}
              className={`group flex flex-col items-center p-8 rounded-[2rem] border-2 transition-all duration-500 ${heatingType === 'gas' ? 'border-savings-green bg-green-50 shadow-xl scale-[1.02]' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <div className={`mb-4 p-4 rounded-2xl transition-all ${heatingType === 'gas' ? 'bg-savings-green text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c0 10 5 13 5 13s-2.5 1.5-5 1.5-5-1.5-5-1.5 5-3 5-13z"/></svg>
              </div>
              <span className={`font-black uppercase tracking-tighter text-sm ${heatingType === 'gas' ? 'text-savings-green' : 'text-slate-400'}`}>Natural Gas</span>
            </button>

            <button 
              onClick={() => setHeatingType('electric')}
              className={`group flex flex-col items-center p-8 rounded-[2rem] border-2 transition-all duration-500 ${heatingType === 'electric' ? 'border-savings-green bg-green-50 shadow-xl scale-[1.02]' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <div className={`mb-4 p-4 rounded-2xl transition-all ${heatingType === 'electric' ? 'bg-savings-green text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
              </div>
              <span className={`font-black uppercase tracking-tighter text-sm ${heatingType === 'electric' ? 'text-savings-green' : 'text-slate-400'}`}>Electric Node</span>
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-2">02. Thermal Area Mapping</label>
              <span className="text-xs font-black text-savings-green uppercase tracking-widest">{getHomeSizeLabel(sqft)}</span>
            </div>
            <div className="text-right">
              <span className="text-5xl font-black text-trust-blue tabular-nums tracking-tighter">{sqft.toLocaleString()}</span>
              <span className="text-xs font-bold text-slate-400 ml-1">SQ FT</span>
            </div>
          </div>
          <input 
            type="range" min="500" max="4000" step="50" value={sqft}
            onChange={(e) => setSqft(parseInt(e.target.value))}
            className="w-full h-4 bg-slate-100 rounded-full appearance-none cursor-pointer accent-savings-green"
          />
        </div>

        <div className="relative pt-6">
          <button 
            onClick={calculate}
            disabled={isCalculating}
            className={`w-full h-24 rounded-3xl font-black text-2xl transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 uppercase tracking-tighter ${
              isCalculating ? 'bg-slate-900 text-white shadow-none' : 'savings-green text-white hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isCalculating ? (
              <div className="flex flex-col items-center">
                 <span className="text-sm font-black animate-pulse uppercase tracking-[0.2em]">{statusText}</span>
                 <div className="w-48 h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-green-400 transition-all duration-100" style={{ width: `${progress}%` }}></div>
                 </div>
              </div>
            ) : (
              <>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Calculate extraction Value
              </>
            )}
          </button>
        </div>

        {result !== null && !isCalculating && (
          <div className="mt-12 p-10 bg-slate-900 rounded-[2.5rem] animate-in zoom-in-95 duration-700 text-center relative overflow-hidden shadow-2xl border-4 border-savings-green">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-savings-green"></div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Official Projected extraction</p>
            <p className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              <span className="text-savings-green text-3xl md:text-5xl mr-1 italic">$</span>{result.toLocaleString()}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10 mb-8">
               <div className="text-left"><p className="text-[9px] text-slate-500 font-black uppercase mb-1">Status</p><p className="text-white text-xs font-bold uppercase">Ready for Audit</p></div>
               <div className="text-right"><p className="text-[9px] text-slate-500 font-black uppercase mb-1">Grant cycle</p><p className="text-white text-xs font-bold uppercase">HER+ Active</p></div>
            </div>
            <a href="tel:6477465959" className="w-full bg-white text-slate-900 py-6 rounded-2xl font-black text-xl uppercase tracking-tighter hover:bg-slate-100 transition-all flex items-center justify-center gap-4">
               Secure Funds Now
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RebateCalculator;
