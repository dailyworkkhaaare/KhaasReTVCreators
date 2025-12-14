import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { generateBotResponse } from '../services/geminiService';
import { ChatMessage, ChatState } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaskar! I am the Khaas AI Assistant. Ask me anything about Khaas Re TV, our shows like Trump Tatya, or our latest stats!' }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || status === ChatState.THINKING) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setStatus(ChatState.THINKING);

    const botReply = await generateBotResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: botReply }]);
    setStatus(ChatState.SUCCESS);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-[90vw] md:w-[400px] h-[500px] flex flex-col mb-4 overflow-hidden animate-fade-in-up origin-bottom-right">
          
          {/* Header */}
          <div className="p-4 bg-orange-600 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full">
                <Bot size={20} className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Khaas Bot</h3>
                <p className="text-orange-100 text-xs">Powered by Gemini AI</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {status === ChatState.THINKING && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-orange-500" />
                  <span className="text-xs text-slate-400">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Khaas Re TV..."
                className="flex-1 bg-slate-900 border border-slate-600 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500 placeholder-slate-500"
              />
              <button 
                onClick={handleSend}
                disabled={status === ChatState.THINKING || !input.trim()}
                className="bg-orange-600 hover:bg-orange-500 disabled:bg-slate-700 disabled:text-slate-500 text-white p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-orange-600 hover:bg-orange-500 text-white p-4 rounded-full shadow-lg shadow-orange-900/40 transition-transform hover:scale-110 flex items-center gap-2 group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-semibold whitespace-nowrap">Chat with AI</span>}
      </button>
    </div>
  );
};

export default ChatWidget;