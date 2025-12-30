
import React, { useRef } from 'react';

const reviews = [
  {
    id: "4027",
    author: "AMIR K.",
    location: "ERIN MILLS, ON",
    classification: "TRUSTWORTHY",
    confidence: "98.7%",
    highlight: "The team was incredibly <span class='text-trust-blue font-black underline decoration-emergency-orange/30'>Punctual</span> and the new hybrid system is whisper quiet. Their energy assessment was thorough.",
    tags: ["EFFICIENCY [HIGH]", "NOISE: LOW"],
    intensity: 92
  },
  {
    id: "521",
    author: "SARAH L.",
    location: "PORT CREDIT, ON",
    classification: "EXPERTISE",
    confidence: "99.2%",
    highlight: "I was confused about the grants but they are true <span class='text-trust-blue font-black underline decoration-emergency-orange/30'>Knowledgeable</span> experts. Saved me thousands on my install.",
    tags: ["GRANT: SUCCESS", "ROI: MAX"],
    intensity: 96
  },
  {
    id: "7385",
    author: "MICHAEL W.",
    location: "COOKSVILLE, ON",
    classification: "QUALITY",
    confidence: "97.5%",
    highlight: "From quote to install, the process was seamless. My home is finally <span class='text-trust-blue font-black underline decoration-emergency-orange/30'>Energy-efficient</span> and warm.",
    tags: ["PROCESS: FAST", "THERMAL: OPT"],
    intensity: 89
  },
  {
    id: "9122",
    author: "LINDA G.",
    location: "STREETSVILLE, ON",
    classification: "RELIABILITY",
    confidence: "99.0%",
    highlight: "The AI audit accurately predicted my <span class='text-trust-blue font-black underline decoration-emergency-orange/30'>Savings Potential</span>. No hidden fees, just pure engineering excellence.",
    tags: ["ACCURACY: HIGH", "SAVINGS: OPT"],
    intensity: 94
  }
];

const AIReviewCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-4 group/carousel">
      {/* Navigation Controls - Hidden on mobile, visible on hover desktop */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button 
          onClick={() => scroll('left')}
          className="bg-white p-4 rounded-full shadow-2xl border border-slate-100 text-trust-blue hover:text-emergency-orange transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
        </button>
      </div>
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button 
          onClick={() => scroll('right')}
          className="bg-white p-4 rounded-full shadow-2xl border border-slate-100 text-trust-blue hover:text-emergency-orange transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-12 gap-6 md:gap-10 no-scrollbar snap-x snap-mandatory px-4 md:px-10 -mx-4 md:-mx-10"
      >
        {reviews.map((rev, i) => (
          <div 
            key={i} 
            className="min-w-[85vw] sm:min-w-[420px] bg-white rounded-[2rem] shadow-[0_30px_70px_-20px_rgba(30,58,138,0.15)] border border-slate-100/50 snap-center flex flex-col overflow-hidden group/card hover:scale-[1.01] transition-transform duration-500"
          >
            {/* AI Report Header - Matches Image Perfectly */}
            <div className="p-6 md:p-8 flex justify-between items-start relative bg-white border-b border-slate-50">
               <div>
                 <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">CLASS: {rev.classification}</span>
                 </div>
                 <h4 className="font-black text-trust-blue text-lg md:text-xl uppercase tracking-tighter">REPORT ID: #{rev.id}</h4>
               </div>
               <div className="text-right">
                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">CONF. SCORE</p>
                 <p className="text-xl md:text-2xl font-black text-emergency-orange leading-none tabular-nums">{rev.confidence}</p>
               </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-10 flex-1 flex flex-col bg-white">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="relative mb-10 flex-grow">
                <span className="absolute -top-6 -left-2 text-6xl text-slate-100 font-serif leading-none select-none opacity-50">“</span>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic relative z-10" dangerouslySetInnerHTML={{ __html: rev.highlight }}></p>
              </div>

              {/* Data Visualization Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 leading-none">INTENSITY</span>
                    <span className="text-xs font-black text-trust-blue tabular-nums">{rev.intensity}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-trust-blue transition-all duration-1000 group-hover/card:bg-emergency-orange origin-left" 
                      style={{ width: `${rev.intensity}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {rev.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black text-trust-blue bg-blue-50/50 border border-blue-100 px-4 py-2 rounded-xl uppercase tracking-widest">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Profiler */}
            <div className="p-8 md:p-10 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl trust-blue text-white flex items-center justify-center font-black text-xl md:text-2xl shadow-xl transform transition-transform group-hover/card:rotate-0 -rotate-3">
                  {rev.author[0]}
                </div>
                <div>
                  <p className="font-black text-trust-blue uppercase tracking-tighter text-base leading-none mb-1.5">{rev.author}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{rev.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer to prevent cutting out on the right side */}
        <div className="min-w-[1px] md:min-w-[40px]"></div>
      </div>
      
      {/* Scroll indicator with swipe hint for mobile */}
      <div className="flex items-center justify-center gap-4 mt-2 md:hidden">
         <svg className="w-4 h-4 text-slate-300 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
         <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Neural Stream: Swipe to Browse Reports</span>
         <svg className="w-4 h-4 text-slate-300 animate-bounce-x-right" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </div>
    </div>
  );
};

export default AIReviewCarousel;
