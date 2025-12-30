
import React, { useState, useEffect } from 'react';

const UrgencyBanner: React.FC = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [location, setLocation] = useState<string>("Mississauga");

  useEffect(() => {
    // Simulated weather API check
    const mockTemp = -4; // Setting specifically to -4 per user feedback
    setTemp(mockTemp);
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(() => {
        // Logically we'd update location here in a production environment
      });
    }
  }, []);

  if (temp === null) return null;

  // Cold Weather Urgency State (Enterprise Alert UI)
  if (temp <= 0) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-2.5 px-4 shadow-[0_4px_25px_rgba(220,38,38,0.4)] z-[60]">
        {/* Animated Sweep Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white">
          
          {/* Real-time Status Badge */}
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Dispatch: HIGH</span>
          </div>

          <div className="h-4 w-px bg-white/20 hidden md:block"></div>

          {/* Core Message */}
          <p className="text-sm font-black uppercase tracking-tight flex items-center gap-2">
            <svg className="w-5 h-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Emergency Furnace Crews Deployed in <span className="underline decoration-white/40 decoration-2 underline-offset-4">{location}</span>
          </p>

          <div className="h-4 w-px bg-white/20 hidden md:block"></div>

          {/* Technical Sensor Readout */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded border border-white/10">
              <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-2 0v10a3.5 3.5 0 107 0V9a1 1 0 10-2 0v7a1.5 1.5 0 11-3 0z" />
              </svg>
              <span className="text-[11px] font-mono font-bold tracking-tighter">DATA_EXT: {temp}°C</span>
            </div>
          </div>

          {/* Direct Response CTA */}
          <a href="tel:6477465959" className="bg-white text-red-600 px-5 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all shadow-lg ml-2 hover:scale-105">
            Call Tech Dispatch
          </a>
        </div>
      </div>
    );
  }

  // Savings Logic (Normal Weather)
  return (
    <div className="bg-gradient-to-r from-savings-green via-green-500 to-savings-green text-white py-2 px-4 shadow-[0_4px_15px_rgba(5,150,105,0.2)]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm font-bold uppercase tracking-tight">
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Cold snap expected. Priority Maintenance Available in {location}.
        </span>
        <a href="tel:6477465959" className="text-[10px] bg-black/10 hover:bg-black/20 px-3 py-1 rounded transition-colors tracking-widest font-black uppercase">Schedule Now</a>
      </div>
    </div>
  );
};

export default UrgencyBanner;
