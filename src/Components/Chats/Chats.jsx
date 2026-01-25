import React, { useState, useEffect, useRef } from 'react';

const Chats = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! Welcome to Love Matrimony AI. How can I help you find your partner?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    // Outer Wrapper - Full screen niye majhkane alignment thik rakhbe kintu container size fixed hobe
    <div className="flex items-center justify-center bg-rose-50 p-6 min-h-[700px]">
      
      {/* Main Chat Container - Fixed Standard Size */}
      <div className="flex flex-col w-full max-w-[450px] h-[600px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-rose-100 font-sans">
        
        {/* Header - Compact & Elegant */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-500 p-5 text-white text-center shadow-md">
          <h1 className="font-bold text-xl tracking-tight">Love Matrimony AI</h1>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] text-rose-100 uppercase font-semibold">Online Assistant</span>
          </div>
        </div>
        
        {/* Chat Messages Area */}
        <div className="flex-1 p-5 overflow-y-auto bg-[#fffcfc] flex flex-col gap-4 scrollbar-hide">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`max-w-[85%] p-3.5 rounded-2xl text-[14px] leading-snug shadow-sm ${
                msg.role === 'user' 
                  ? 'self-end bg-pink-500 text-white rounded-tr-none' 
                  : 'self-start bg-rose-50 text-rose-900 border border-rose-100 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
          ))}
          
          {isLoading && (
            <div className="self-start bg-white text-rose-400 p-3 rounded-2xl rounded-tl-none text-xs border border-rose-100 flex items-center gap-2">
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                 <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-75"></div>
                 <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-150"></div>
               </div>
               <span>AI is typing...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area - Compact & Integrated */}
        <div className="p-4 bg-white border-t border-rose-50">
          <div className="flex items-center gap-2 bg-rose-50 rounded-2xl px-4 py-1.5 border border-rose-100 focus-within:ring-2 focus-within:ring-pink-200 transition-all">
            <input
              className="flex-1 bg-transparent border-none py-2.5 text-sm focus:outline-none placeholder:text-rose-300 text-rose-900"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
            />
            <button 
              onClick={sendMessage}
              className="bg-pink-600 hover:bg-pink-700 text-white p-2.5 rounded-xl transition-all active:scale-90 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-center text-rose-300 mt-2 italic">Powered by Ollama Local AI</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;