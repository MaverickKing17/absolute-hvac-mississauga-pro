
import React from 'react';

const reviews = [
  {
    author: "Amir K.",
    location: "Erin Mills",
    sentiment: "Trustworthy",
    highlight: "The team was incredibly <span class='font-black text-trust-blue'>Punctual</span> and the new hybrid system is whisper quiet. Their energy assessment was thorough.",
    tags: ["Energy-efficient", "Knowledgeable"]
  },
  {
    author: "Sarah L.",
    location: "Port Credit",
    sentiment: "Expertise",
    highlight: "I was confused about the grants but they are true <span class='font-black text-trust-blue'>Knowledgeable</span> experts. Saved me thousands on my install.",
    tags: ["Patient", "Clean"]
  },
  {
    author: "Michael W.",
    location: "Cooksville",
    sentiment: "Quality",
    highlight: "From quote to install, the process was seamless. My home is finally <span class='font-black text-trust-blue'>Energy-efficient</span> and warm.",
    tags: ["Professional", "Fair Price"]
  }
];

const AIReviewCarousel: React.FC = () => {
  return (
    <div className="py-12">
      <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x">
        {reviews.map((rev, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-lg border border-slate-100 snap-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">★★★★★</div>
              <span className="text-xs font-black bg-blue-50 text-trust-blue px-2 py-1 rounded uppercase tracking-tighter">AI Verified Sentiment: {rev.sentiment}</span>
            </div>
            <p className="text-slate-600 italic text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `"${rev.highlight}"` }}></p>
            <div className="flex flex-wrap gap-2 mb-6">
              {rev.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded">#{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-trust-blue">
                {rev.author[0]}
              </div>
              <div>
                <p className="font-black text-slate-900">{rev.author}</p>
                <p className="text-xs text-slate-500">{rev.location}, ON</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIReviewCarousel;
