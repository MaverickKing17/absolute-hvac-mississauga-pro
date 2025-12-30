
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RebateCalculator from '../components/RebateCalculator';

/**
 * AIScanOverlay Component
 * Adds a neural scan animation and data points to images for ML aesthetic
 */
const AIScanOverlay: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:bg-trust-blue/10 transition-colors duration-700">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] ai-scan-line z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-emergency-orange rounded-full animate-pulse delay-700 shadow-[0_0_8px_rgba(234,88,12,1)]"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-1000 shadow-[0_0_8px_rgba(74,222,128,1)]"></div>
    </div>
  </div>
);

const ServiceFAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-trust-blue group-hover:text-emergency-orange transition-colors pr-4">{question}</span>
        <svg 
          className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emergency-orange' : 'text-slate-400'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed font-medium">{answer}</p>
      </div>
    </div>
  );
};

const AIPredictiveHub: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [metrics, setMetrics] = useState({
    sessionTime: 0,
    scrollDepth: 0,
    focusArea: 'Heating',
    interactionScore: 0
  });

  const scrollRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        sessionTime: prev.sessionTime + 1,
        interactionScore: Math.min(prev.interactionScore + Math.random() * 2, 100)
      }));
    }, 1000);

    const handleScroll = () => {
      const depth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      scrollRef.current = depth;
      setMetrics(prev => ({ ...prev, scrollDepth: depth }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <pattern id="dotGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="#1e293b" />
          </pattern>
          <rect width="100" height="100" fill="url(#dotGrid)" />
          <circle cx="50" cy="50" r="40" fill="url(#glow)" className="animate-pulse" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-[10px] text-blue-300 font-black uppercase tracking-[0.3em]">Absolute SmartCare™ Live Node</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
              Predictive <br/><span className="text-emergency-orange italic">Service Engine</span>
            </h2>
            
            <p className="text-blue-100 text-lg mb-10 font-medium leading-relaxed max-w-lg">
              Our neural network is currently mapping your session intent. By analyzing your scroll patterns and service focus, we can preemptively identify the optimal maintenance protocol for your home.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { label: 'Session Dwell', value: `${metrics.sessionTime}s`, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Intent Strength', value: `${Math.round(metrics.interactionScore)}%`, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { label: 'Scroll Velocity', value: `${metrics.scrollDepth}%`, icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
                { label: 'Geo-Context', value: 'Mississauga', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md group hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                    </svg>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <p className="text-xl font-black text-white tabular-nums tracking-tighter">{stat.value}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={runAnalysis}
              disabled={isAnalyzing}
              className="group relative w-full sm:w-auto overflow-hidden bg-white text-trust-blue px-12 py-6 rounded-2xl font-black text-xl hover:scale-[1.03] transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] uppercase tracking-tighter flex items-center justify-center gap-4"
            >
              <span className="relative z-10">{isAnalyzing ? 'Decoding Intent...' : 'Initialize Analysis'}</span>
              {!isAnalyzing && (
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10 aspect-square max-w-[500px] mx-auto">
              {isAnalyzing && (
                <div className="absolute inset-0 flex items-center justify-center z-50">
                   <div className="relative">
                      <div className="w-32 h-32 border-4 border-blue-500/20 rounded-full animate-[ping_2s_infinite]"></div>
                      <div className="absolute inset-0 w-32 h-32 border-t-4 border-blue-400 rounded-full animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-black text-blue-400 uppercase tracking-widest animate-pulse">Scanning</span>
                      </div>
                   </div>
                </div>
              )}

              <div className={`h-full w-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-10 md:p-14 transition-all duration-1000 ${isAnalyzing ? 'opacity-40 blur-md scale-90' : 'opacity-100 scale-100'}`}>
                {!showResult ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                    <div className="w-32 h-32 bg-white/5 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-white/10 group-hover:border-blue-500/50 transition-colors">
                      <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tighter mb-4 italic">Waiting for Interaction Stream</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">Continue browsing to increase analysis accuracy. Our AI matches your patterns against 50,000+ local Mississauga service logs.</p>
                    </div>
                  </div>
                ) : (
                  <div className="animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-700">
                    <div className="flex items-center justify-between mb-10">
                      <div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-1">Session Summary</h3>
                        <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Profile: Efficiency Oriented</p>
                      </div>
                      <div className="text-right">
                        <div className="bg-emergency-orange text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">97% Match</div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden group/card">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-4">Recommended Protocol:</h4>
                        <p className="text-2xl font-black text-blue-300 uppercase tracking-tighter mb-4">Hybrid Heating Optimization</p>
                        <ul className="space-y-3">
                          {['CCASHP Load Balancing', 'Rebate Compliance Verification', 'Digital Thermostat Calibration'].map(task => (
                            <li key={task} className="flex items-center gap-3 text-sm text-slate-300">
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <Link to="/contact" className="flex-1 emergency-orange text-white py-5 rounded-2xl font-black text-center text-sm uppercase tracking-tighter hover:scale-[1.02] transition shadow-2xl">
                          Claim Optimized Quote
                        </Link>
                        <button onClick={() => setShowResult(false)} className="px-6 border border-white/20 text-white rounded-2xl hover:bg-white/5 transition flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoCard: React.FC<{ video: { title: string; description: string; embedId: string; category: string; duration: string; level: string } }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_rgba(30,58,138,0.2)] hover:-translate-y-2 hover:border-trust-blue/60 hover:ring-4 hover:ring-trust-blue/5 transition-all duration-700 flex flex-col h-full group border border-slate-100 relative">
      <div className="aspect-video bg-slate-900 flex overflow-hidden group/video relative border-b border-slate-100">
        {!isPlaying ? (
          <div className="flex w-full h-full">
            <div className="relative flex-[7] overflow-hidden">
               <img 
                src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`} 
                alt={video.title}
                onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg` }}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent"></div>
              <AIScanOverlay />
              <div className="absolute top-4 left-4 z-20 flex items-baseline gap-2">
                 <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg tracking-widest uppercase shadow-2xl">
                    {video.duration}
                 </span>
              </div>
            </div>

            <div className="flex-[3] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 20 20"><pattern id="tactical" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="white"/></pattern><rect width="100%" height="100%" fill="url(#tactical)"/></svg>
               </div>
               
               <button onClick={handlePlay} className="relative z-10 w-16 h-16 flex items-center justify-center group/playbtn">
                  <div className="absolute inset-0 bg-emergency-orange/20 rounded-full animate-ping group-hover:animate-none group-hover:scale-125 transition-all"></div>
                  <div className="w-14 h-14 emergency-orange text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(234,88,12,0.6)] transform transition-all duration-500 group-hover/playbtn:scale-110 active:scale-90 border-2 border-white/20">
                    <svg className="w-6 h-6 ml-1 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" /></svg>
                  </div>
               </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-black relative">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-30">
                <div className="w-12 h-12 border-4 border-emergency-orange border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-widest animate-pulse">Initializing Interface...</p>
              </div>
            )}
            <iframe 
              className="absolute inset-0 w-full h-full z-20"
              src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
        )}
      </div>
      
      <div className="p-8 flex-1 flex flex-col bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emergency-orange animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] leading-none">
              {video.category} Service Module
            </span>
          </div>
        </div>
        <h3 className="text-xl font-black text-trust-blue mb-4 leading-none uppercase tracking-tighter group-hover:text-emergency-orange transition-colors">{video.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">{video.description}</p>
        <div className="pt-6 border-t border-slate-50">
          <button onClick={() => !isPlaying && handlePlay()} className="group/link flex items-center justify-between w-full text-trust-blue font-black uppercase tracking-widest text-[11px] hover:text-emergency-orange transition-all">
            <div className="flex items-center gap-3">
               <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-emergency-orange text-white' : 'bg-slate-100 group-hover/link:bg-trust-blue group-hover/link:text-white'}`}>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
               </div>
               <span>Initialize Protocol</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const AISmartSystemMatch: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState<null | {
    title: string;
    description: string;
    matchScore: number;
    benefits: string[];
    tag: string;
  }>(null);

  const triggerMatch = () => {
    setAnalyzing(true);
    setRecommendation(null);
    setTimeout(() => {
      setAnalyzing(false);
      setRecommendation({
        title: "Absolute Platinum Hybrid™ Series",
        tag: "Optimal Efficiency Match",
        description: "Based on your focus on 'Furnace Noises' and 'AC Efficiency', our AI recommends a Dual-Fuel Hybrid system combining Cold-Climate Heat Pump technology with an ultra-quiet 2-stage gas backup.",
        matchScore: 98,
        benefits: ["Eligible for $7,100 Max Rebate", "Whisper-Quiet 48dB Operation", "Neural Load Balancing"]
      });
    }, 2500);
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="#3b82f6" strokeWidth="0.1" fill="none" className="animate-pulse" />
          <path d="M0,70 Q25,45 50,70 T100,70" stroke="#ea580c" strokeWidth="0.1" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-16">
          <span className="text-emergency-orange font-black uppercase tracking-[0.4em] text-xs mb-4 block">SmartSystem™ Recommendation Engine</span>
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Your Session <span className="text-blue-400 italic">Analyzed.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Our neural engine has tracked your educational focus. Click below to synthesize a precision hardware match tailored to your home's thermal load profile.
          </p>
        </div>

        {!recommendation && !analyzing && (
          <button 
            onClick={triggerMatch}
            className="group relative inline-flex items-center gap-4 bg-white text-trust-blue px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] uppercase tracking-tighter"
          >
            Generate AI System Match
            <svg className="w-6 h-6 animate-bounce-x-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        )}

        {analyzing && (
          <div className="flex flex-col items-center gap-8 py-10">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-blue-500/20 rounded-full animate-spin border-t-blue-400"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-blue-400 font-mono text-xs uppercase tracking-widest animate-pulse">Mapping Interaction Vectors...</p>
              <p className="text-slate-500 font-mono text-[10px] uppercase">Dwell Time: Optimized | Modality: Video Focus</p>
            </div>
          </div>
        )}

        {recommendation && (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-700">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-8 md:p-16 text-left relative overflow-hidden group/reco">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover/reco:bg-blue-500/20 transition-all duration-1000"></div>
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                  <div className="flex-1">
                    <div className="inline-block bg-savings-green text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6">
                      {recommendation.tag}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                      {recommendation.title}
                    </h3>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                      {recommendation.description}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {recommendation.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-4 text-white font-bold uppercase tracking-tight text-sm">
                          <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-4 bg-emergency-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition-all shadow-2xl uppercase tracking-tighter">
                      Lock-in Precision Consultation
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </Link>
                  </div>

                  <div className="md:w-64 text-center">
                    <div className="relative inline-block mb-6">
                      <svg className="w-48 h-48 transform -rotate-90">
                        <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                        <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="553" strokeDashoffset={553 - (553 * recommendation.matchScore / 100)} className="text-blue-400 transition-all duration-1000" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-black text-white tracking-tighter tabular-nums">{recommendation.matchScore}%</span>
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Match Strength</span>
                      </div>
                    </div>
                    <button onClick={() => setRecommendation(null)} className="text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">Reset Model</button>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const troubleshootingVideos = [
    {
      title: "Strange Furnace Noises?",
      description: "Differentiate between normal system startup sounds and critical failure warnings like screeching or banging.",
      embedId: "_fP_H9V0R48",
      category: "Heating",
      duration: "3:42",
      level: "Essential"
    },
    {
      title: "AC Efficiency Secrets",
      description: "Learn how to optimize your air conditioner's cooling power while reducing peak-hour energy consumption.",
      embedId: "P1p67W5iH-Y",
      category: "Cooling",
      duration: "5:15",
      level: "Intermediate"
    },
    {
      title: "Filter Health 101",
      description: "A deep dive into why high-MERV filters might be hurting your blower motor and when to swap them.",
      embedId: "f04L7-c8L-U",
      category: "Maintenance",
      duration: "2:10",
      level: "DIY-Safe"
    },
    {
      title: "Smart Thermostat Logic",
      description: "Troubleshooting digital communication errors between your smart thermostat and your furnace control board.",
      embedId: "zV9m-8r3_7Y",
      category: "Electrical",
      duration: "4:30",
      level: "Technical"
    }
  ];

  const serviceFAQs = [
    {
      question: "How often should I have my HVAC system serviced?",
      answer: "We recommend a professional tune-up twice a year: once in the spring for your AC and once in the fall for your furnace. Regular maintenance ensures peak efficiency, prevents mid-season breakthroughs, and is often a requirement to keep your manufacturer's warranty valid."
    },
    {
      question: "What are the warning signs my furnace needs repair?",
      answer: "Common warning signs include unusual noises (banging, whistling, or rattling), a sudden increase in energy bills, the furnace cycling on and off frequently, or yellow/flickering burner flames instead of a steady blue. If you notice any of these, it's best to call us immediately."
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <section className="trust-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 pointer-events-none">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Certified HVAC Engineering</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
            Professional solutions for every season. We specialize in high-efficiency equipment tailored for the GTA climate.
          </p>
        </div>
      </section>

      {/* Heating Section - Industrial Match */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue uppercase tracking-tighter">Heating Architecture</h2>
            <div className="w-24 h-2 bg-emergency-orange"></div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Data-driven furnace solutions. Our licensed technicians handle everything from precision thermal coupling diagnostics to full high-efficiency gas furnace installations.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 emergency-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition shadow-2xl uppercase tracking-tighter">
              Book Furnace Repair
            </Link>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-slate-900/5 rounded-[3rem] -z-10 group-hover:bg-trust-blue/5 transition-colors duration-700"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000&h=800&sat=-100&con=10" 
                alt="Industrial Heating System Diagnostic" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
              />
              <AIScanOverlay />
            </div>
          </div>
        </div>
      </section>

      {/* Cooling Section - Industrial Match */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue uppercase tracking-tighter">Cooling Optimization</h2>
            <div className="w-24 h-2 bg-trust-blue"></div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              We provide quiet, efficient, and reliable central air conditioning and ductless mini-split systems that keep your home comfortable while lowering energy costs.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 trust-blue text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition shadow-2xl uppercase tracking-tighter">
              Get Cooling Audit
            </Link>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-trust-blue/5 rounded-[3rem] -z-10 group-hover:bg-emergency-orange/5 transition-colors duration-700"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000&h=800&sat=-100&con=10" 
                alt="High-Efficiency Cooling Unit Analysis" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
              />
              <AIScanOverlay />
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Precision - Integrated User Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
               ML-Diagnostic Unit V2.5
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-trust-blue uppercase tracking-tighter">Diagnostic Precision</h2>
            <div className="w-24 h-2 bg-emergency-orange"></div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Absolute Engineering uses neural analysis of blower motor frequency and thermal discharge to detect system failures <span className="text-trust-blue font-bold">before they happen</span>.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-5 border-2 border-slate-50 rounded-2xl bg-slate-50/50">
                  <p className="text-xl font-black text-trust-blue leading-none mb-2">99.4%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Diagnostic Accuracy</p>
               </div>
               <div className="p-5 border-2 border-slate-50 rounded-2xl bg-slate-50/50">
                  <p className="text-xl font-black text-trust-blue leading-none mb-2">0ms</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Latency</p>
               </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-slate-100">
              <img 
                src="https://i.ibb.co/KccR7Vvy/gpt-image-1-5-b-Replace-the-current-1.png" 
                alt="Diagnostic Technician" 
                className="w-full h-full object-cover transition-all duration-1000" 
              />
              <AIScanOverlay />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                 <p className="text-[9px] font-black text-blue-300 uppercase tracking-[0.3em] mb-1">Session Data Feed</p>
                 <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 animate-[shimmer_3s_infinite] w-1/2"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIPredictiveHub />

      {/* Video Learning Center */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-6">
            HVAC Video <br/><span className="text-slate-400 italic">Learning Center</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {troubleshootingVideos.map((video, idx) => (
            <VideoCard key={idx} video={video} />
          ))}
        </div>
      </section>

      <AISmartSystemMatch />

      {/* Warranty Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-trust-blue uppercase tracking-tighter leading-none mb-6">Heat Pump <span className="text-savings-green">Warranty Architecture</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-savings-green/30 transition-all duration-500 group">
               <h3 className="text-2xl font-black text-trust-blue uppercase tracking-tighter mb-4">10-Year Parts Protection</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">Full coverage for critical components including the inverter compressor and thermal exchange coils.</p>
               <div className="pt-6 border-t border-slate-50 flex items-center justify-between font-black uppercase tracking-widest text-[10px] text-slate-400">
                  <span>Type: AI-Monitored</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
               </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-savings-green/30 transition-all duration-500 group">
               <h3 className="text-2xl font-black text-trust-blue uppercase tracking-tighter mb-4">10-Year Labor Assurance</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">Absolute covers 100% of the technical repair labor costs for verified manufacturing defects.</p>
               <div className="pt-6 border-t border-slate-50 flex items-center justify-between font-black uppercase tracking-widest text-[10px] text-slate-400">
                  <span>Status: Active Coverage</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
               </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-savings-green/30 transition-all duration-500 group">
               <h3 className="text-2xl font-black text-trust-blue uppercase tracking-tighter mb-4">Absolute Unit Exchange</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">Zero-fault replacement if a primary compressor failure occurs within the first 12 months.</p>
               <div className="pt-6 border-t border-slate-50 flex items-center justify-between font-black uppercase tracking-widest text-[10px] text-slate-400">
                  <span>Grade: Platinum</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RebateCalculator />
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-inner space-y-2">
            {serviceFAQs.map((faq, index) => (
              <ServiceFAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-none">Ready for a Technical Upgrade?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:6477465959" className="emergency-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl flex items-center gap-3 justify-center">
              Call Engineer: (647) 746-5959
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
