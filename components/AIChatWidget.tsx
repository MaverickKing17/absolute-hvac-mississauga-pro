
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm Absolute's AI Assistant. Are you looking for a quote or do you have an emergency repair?", isBot: true }
  ]);

  const handleQuickReply = (type: string) => {
    let response = "";
    if (type === 'rebate') response = "Our systems show you could qualify for up to $7,100 in Ontario rebates. Would you like a free eligibility assessment?";
    if (type === 'emergency') response = "Emergency detected. Please call our priority line at (647) 746-5959 immediately for the next available crew.";
    if (type === 'inspection') response = "Great choice. Regular maintenance prevents 90% of mid-winter breakdowns. When would you like us to visit?";

    setMessages(prev => [...prev, { text: type.replace('_', ' '), isBot: false }, { text: response, isBot: true }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-sans">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center p-2"
          aria-label="Open AI Chat Assistant"
        >
          {/* High-intensity pulsing rings for maximum visibility */}
          <div className="absolute inset-0 bg-emergency-orange rounded-full animate-ping opacity-60"></div>
          <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-20 scale-125"></div>
          
          <div className="emergency-orange text-white w-20 h-20 rounded-full shadow-[0_15px_60px_rgba(234,88,12,0.6)] flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative z-10 border-4 border-white">
            <svg className="w-8 h-8 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-tighter leading-none">Ask AI</span>
            
            {/* High-contrast Live Badge */}
            <div className="absolute -top-2 -right-2 bg-trust-blue text-white text-[10px] font-black px-2.5 py-1 rounded-full border-2 border-white shadow-lg flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              LIVE
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-white w-[350px] md:w-[400px] h-[550px] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 fade-in duration-300">
          {/* Premium Glassmorphism Header */}
          <div className="trust-blue p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-12 -mt-12 rounded-full blur-2xl"></div>
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-trust-blue rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">Absolute AI</h4>
                  <p className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold">Online | Certified Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.isBot 
                    ? 'bg-white text-slate-700 rounded-tl-none border border-slate-100' 
                    : 'trust-blue text-white rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div id="chat-end"></div>
          </div>

          {/* Quick Replies & Input */}
          <div className="p-5 bg-white border-t border-slate-100 space-y-4">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => handleQuickReply('rebate')} 
                className="text-[11px] font-bold bg-white text-slate-600 hover:border-savings-green hover:text-savings-green px-4 py-2 rounded-xl transition-all border border-slate-200 shadow-sm"
              >
                💰 Heat Pump Rebates
              </button>
              <button 
                onClick={() => handleQuickReply('emergency')} 
                className="text-[11px] font-bold bg-white text-slate-600 hover:border-emergency-orange hover:text-emergency-orange px-4 py-2 rounded-xl transition-all border border-slate-200 shadow-sm"
              >
                🚨 Emergency Repair
              </button>
              <button 
                onClick={() => handleQuickReply('inspection')} 
                className="text-[11px] font-bold bg-white text-slate-600 hover:border-trust-blue hover:text-trust-blue px-4 py-2 rounded-xl transition-all border border-slate-200 shadow-sm"
              >
                📅 Book Inspection
              </button>
            </div>
            
            <div className="relative group">
              <input 
                disabled 
                type="text" 
                placeholder="AI is listening..." 
                className="w-full text-sm bg-slate-100 border-none rounded-2xl py-4 pl-5 pr-12 italic text-slate-400 cursor-not-allowed group-hover:bg-slate-200 transition-colors" 
              />
              <Link 
                to="/contact" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-trust-blue hover:scale-110 transition-transform p-2 bg-white rounded-xl shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </Link>
            </div>
            <p className="text-[10px] text-center text-slate-400 font-medium">Powered by Absolute SmartCare™</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
