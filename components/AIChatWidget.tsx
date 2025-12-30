
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
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="trust-blue text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/></svg>
        </button>
      ) : (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="trust-blue p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold">Absolute AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot ? 'bg-white text-slate-700 shadow-sm border border-slate-100' : 'trust-blue text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 space-y-2">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => handleQuickReply('rebate')} className="text-xs bg-slate-100 hover:bg-savings-green hover:text-white px-3 py-2 rounded-full transition-colors border border-slate-200">Heat Pump Rebates</button>
              <button onClick={() => handleQuickReply('emergency')} className="text-xs bg-slate-100 hover:bg-emergency-orange hover:text-white px-3 py-2 rounded-full transition-colors border border-slate-200">Emergency Repair</button>
              <button onClick={() => handleQuickReply('inspection')} className="text-xs bg-slate-100 hover:bg-trust-blue hover:text-white px-3 py-2 rounded-full transition-colors border border-slate-200">Book Inspection</button>
            </div>
            <div className="pt-2 flex items-center gap-2">
               <input disabled type="text" placeholder="AI is processing..." className="flex-1 text-sm bg-slate-50 border-none focus:ring-0 p-2 italic text-slate-400" />
               <Link to="/contact" className="text-trust-blue">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
               </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
