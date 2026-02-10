import React, { useState, useEffect, useRef } from 'react';

const Chats = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! Welcome to Love Matrimony AI. How can I help you find your partner?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll logic - latest message e niye jabe
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/chat', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMsg = { role: 'bot', text: data.reply || "I am having trouble connecting to AI." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', text: "Ollama is not responding. Please check your PC." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-rose-50 p-4 min-h-screen">
      
      {/* Container - Height bariye 700px kora hoyeche */}
      <div className="flex flex-col w-full max-w-[500px] h-[700px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-rose-100 font-sans relative">
        
        {/* Header - Fixed at top */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-500 p-6 text-white text-center shadow-lg z-10">
          <h1 className="font-bold text-2xl tracking-tight">Love Matrimony AI</h1>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse border-2 border-white"></span>
            <span className="text-[11px] text-rose-50 uppercase font-bold tracking-wider">Online Matchmaker</span>
          </div>
        </div>
        
        {/* Chat Messages Area - Scrollable */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#fffcfc] flex flex-col gap-5 scroll-smooth custom-scrollbar">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`max-w-[88%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm transition-all duration-300 ${
                msg.role === 'user' 
                  ? 'self-end bg-pink-500 text-white rounded-tr-none shadow-pink-100' 
                  : 'self-start bg-white text-rose-900 border border-rose-100 rounded-tl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          ))}
          
          {isLoading && (
            <div className="self-start bg-rose-50 text-rose-400 p-4 rounded-2xl rounded-tl-none text-xs border border-rose-100 flex items-center gap-3">
               <div className="flex gap-1.5">
                 <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                 <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                 <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
               </div>
               <span className="font-medium">AI is crafting a response...</span>
            </div>
          )}
          {/* Invisible element to trigger scroll */}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area - Fixed at bottom */}
        <div className="p-5 bg-white border-t border-rose-50 shadow-[0_-10px_20px_rgba(244,114,182,0.03)]">
          <div className="flex items-center gap-3 bg-rose-50 rounded-2xl px-5 py-2 border border-rose-100 focus-within:ring-2 focus-within:ring-pink-300 focus-within:bg-white transition-all duration-300">
            <input
              className="flex-1 bg-transparent border-none py-3 text-sm focus:outline-none placeholder:text-rose-300 text-rose-900"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Search for your perfect match..."
            />
            <button 
              onClick={sendMessage}
              className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-xl transition-all active:scale-90 shadow-lg shadow-pink-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-center text-rose-300 mt-3 font-medium uppercase tracking-tighter">Secure & Private Matchmaking</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;