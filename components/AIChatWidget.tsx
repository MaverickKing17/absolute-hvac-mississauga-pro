
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Absolute's AI Assistant. Are you looking for a quote or do you have an emergency repair?", isBot: true }
  ]);
  
  const messagesEndRef = useRef(null);
  const chatSessionRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const initChat = () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSessionRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are Absolute AI, a highly professional and helpful customer support assistant for Absolute Heating & Cooling Inc. in Mississauga. 
        Your goal is to assist users with HVAC queries, rebate eligibility ($7,100), and emergency repairs.
        If an emergency is detected (no heat in winter, gas leak, major water leak), strongly advise calling (647) 746-5959 immediately.
        Keep responses concise, professional, and data-driven. Use a helpful and empathetic tone.`,
      },
    });
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputText("");
    setIsTyping(true);

    if (!chatSessionRef.current) {
      initChat();
    }

    try {
      const responseStream = await chatSessionRef.current.sendMessageStream({ message: text });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { text: "", isBot: true }]);

      for await (const chunk of responseStream) {
        const newText = chunk.text;
        if (newText) {
          fullResponse += newText;
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { text: fullResponse, isBot: true };
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("AI Communication Error:", error);
      setMessages(prev => [...prev, { text: "I'm having trouble connecting to my neural network. Please call us directly at (647) 746-5959 for immediate assistance.", isBot: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReply = (type) => {
    let text = "";
    if (type === 'rebate') text = "Tell me about the $7,100 heat pump rebates.";
    if (type === 'emergency') text = "I have an HVAC emergency!";
    if (type === 'inspection') text = "I'd like to book a maintenance inspection.";
    handleSendMessage(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-sans">
      {!isOpen ? (
        <button 
          onClick={() => {
            setIsOpen(true);
            if (!chatSessionRef.current) initChat();
          }}
          className="relative group flex items-center justify-center p-2"
          aria-label="Open AI Chat Assistant"
        >
          <div className="absolute inset-0 bg-emergency-orange rounded-full animate-ping opacity-60"></div>
          <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-20 scale-125"></div>
          
          <div className="emergency-orange text-white w-20 h-20 rounded-full shadow-[0_15px_60px_rgba(234,88,12,0.6)] flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative z-10 border-4 border-white">
            <svg className="w-8 h-8 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-tighter leading-none">Ask AI</span>
            
            <div className="absolute -top-2 -right-2 bg-trust-blue text-white text-[10px] font-black px-2.5 py-1 rounded-full border-2 border-white shadow-lg flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              LIVE
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-white w-[350px] md:w-[400px] h-[600px] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 fade-in duration-300">
          <div className="trust-blue p-5 text-white relative overflow-hidden shrink-0">
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
                  <p className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold">ONLINE | CERTIFIED ASSISTANT</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.isBot ? 'bg-white text-slate-700 rounded-tl-none border border-slate-100' : 'trust-blue text-white rounded-tr-none'
                }`}>
                  {msg.text || (isTyping && i === messages.length - 1 ? "..." : "")}
                </div>
              </div>
            ))}
            {isTyping && messages[messages.length - 1]?.isBot === false && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-400 p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="p-5 bg-white border-t border-slate-100 space-y-4 shrink-0">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => handleQuickReply('rebate')} className="text-[11px] font-bold bg-white text-slate-600 hover:border-savings-green hover:text-savings-green px-4 py-2 rounded-xl transition-all border border-slate-200 shadow-sm">💰 Heat Pump Rebates</button>
              <button onClick={() => handleQuickReply('emergency')} className="text-[11px] font-bold bg-white text-slate-600 hover:border-emergency-orange hover:text-emergency-orange px-4 py-2 rounded-xl transition-all border border-slate-200 shadow-sm">🚨 Emergency Repair</button>
              <button onClick={() => handleQuickReply('inspection')} className="text-[11px] font-bold bg-white text-slate-600 hover:border-trust-blue hover:text-trust-blue px-4 py-2 rounded-xl transition-all border border-slate-200 shadow-sm">📅 Book Inspection</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputText); }} className="relative group">
              <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Type your message..." className="w-full text-sm bg-slate-100 border-none rounded-2xl py-4 pl-5 pr-12 text-slate-700 focus:ring-2 focus:ring-trust-blue/20 outline-none transition-all" />
              <button type="submit" disabled={!inputText.trim() || isTyping} className="absolute right-3 top-1/2 -translate-y-1/2 text-trust-blue hover:scale-110 disabled:opacity-30 disabled:scale-100 transition-all p-2 bg-white rounded-xl shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </form>
            <p className="text-[10px] text-center text-slate-400 font-medium">Powered by Absolute SmartCare™</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
