import React, { useState, useEffect, useRef } from 'react';

const Chats = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! Welcome to Love Matrimony AI. How can I help you find your partner?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll logic
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
      // Apnar index.js er /chat route-e request pathachhe
      const response = await fetch('http://localhost:3000/chat', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMsg = { role: 'bot', text: data.reply || "I am feeling a bit shy, can you ask again?" };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', text: "Ollama is not responding. Please check your PC." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-rose-100 font-sans">
      {/* Header */}
      <div className="bg-pink-600 p-4 text-white text-center font-bold text-lg shadow-md">
        Love Matrimony AI
      </div>
      
      {/* Chat Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-rose-50 flex flex-col gap-3">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
              msg.role === 'user' 
                ? 'self-end bg-pink-500 text-white rounded-tr-none' 
                : 'self-start bg-white text-rose-900 border border-rose-200 rounded-tl-none'
            }`}
          >
            {msg.text}
          </div>
        ))}
        
        {isLoading && (
          <div className="self-start bg-white text-rose-400 p-3 rounded-2xl rounded-tl-none text-sm animate-pulse border border-rose-100">
            AI is thinking...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-rose-100 flex items-center gap-2">
        <input
          className="flex-1 bg-rose-50 border border-rose-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask your matchmaking assistant..."
        />
        <button 
          onClick={sendMessage}
          className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chats;