
import React from 'react';

const reviews = [
  {
    author: "Amir K.",
    location: "Erin Mills",
    classification: "Punctual",
    confidence: "98.7%",
    sentiment: "Trustworthy",
    highlight: "The team was incredibly <span class='text-trust-blue font-black underline decoration-emergency-orange/30'>Punctual</span> and the new hybrid system is whisper quiet. Their energy assessment was thorough.",
    tags: ["Efficiency [High]", "Noise: Low"],
    vectorWeight: 92
  },
  {
    author: "Sarah L.",
    location: "Port Credit",
    classification: "Expertise",
    confidence: "99.2%",
    sentiment: "Expertise",
    highlight: "I was confused about the grants but they are true <span class='text-trust-blue font-black underline decoration-emergency-orange/30'>Knowledgeable</span> experts. Saved me thousands on my install.",
    tags: ["Grant: Success", "ROI: Max"],
    vectorWeight: 96
  },
  {
    author: "Michael W.",
    location: "Cooksville",
    classification: "Seamless",
    confidence: "97.5%",
    sentiment: "Quality",
    highlight: "From quote to install, the process was seamless. My home is finally <span class='text-trust-blue font-black underline decoration-emergency-orange/30'>Energy-efficient</span> and warm.",
    tags: ["Process: Fast", "Thermal: Opt"],
    vectorWeight: 89
  }
];

const AIReviewCarousel: React.FC = () => {
  return (
    <div className="py-4 relative">
      <div className="flex overflow-x-auto pb-12 gap-4 md:gap-8 no-scrollbar snap-x snap-mandatory px-4 -mx-4">
        {reviews.map((rev, i) => (
          <div key={i} className="min-w-[85vw] sm:min-w-[420px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 snap-center flex flex-col overflow-hidden group">
            
            {/* AI Report Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-5 md:p-6 flex justify-between items-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-emergency-orange opacity-10 group-hover:opacity-100 transition-opacity"></div>
               <div>
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Class: {rev.sentiment}</span>
                 </div>
                 <h4 className="font-black text-trust-blue text-base md:text-lg uppercase tracking-tighter">Report ID: #{(Math.random()*10000).toFixed(0)}</h4>
               </div>
               <div className="text-right">
                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Conf. Score</p>
                 <p className="text-lg md:text-xl font-black text-emergency-orange leading-none">{rev.confidence}</p>
               </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-1 mb-4 md:mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 md:w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1.000-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="relative">
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 italic relative z-10" dangerouslySetInnerHTML={{ __html: `"${rev.highlight}"` }}></p>
                <div className="absolute -top-4 -left-2 text-5xl md:text-6xl text-slate-100 font-serif leading-none select-none">“</div>
              </div>

              {/* Data Visualization Bars */}
              <div className="mt-auto space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none">Intensity</span>
                    <span className="text-xs font-black text-trust-blue">{rev.vectorWeight}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-trust-blue transition-all duration-1000 group-hover:bg-emergency-orange" 
                      style={{ width: `${rev.vectorWeight}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {rev.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black text-trust-blue bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl trust-blue text-white flex items-center justify-center font-black text-lg md:text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                  {rev.author[0]}
                </div>
                <div>
                  <p className="font-black text-trust-blue uppercase tracking-tighter leading-none mb-1">{rev.author}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{rev.location}, ON</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll indicator with swipe hint for mobile */}
      <div className="flex items-center justify-center gap-4 mt-2 md:hidden">
         <svg className="w-4 h-4 text-slate-300 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
         <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Swipe to explore reports</span>
         <svg className="w-4 h-4 text-slate-300 animate-bounce-x-right" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </div>
    </div>
  );
};

export default AIReviewCarousel;
