"use client";

import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatSupport: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <>
      {/* Chat Popover */}
      {isChatOpen && (
        <div className="mb-3 fixed bottom-24 right-4 w-[30vw] h-[60vh] bg-gradient-to-br from-[#2995D3]/10 to-white dark:from-[#1e1e1e]/10 dark:to-[#2e2e2e] rounded-2xl shadow-2xl z-[1200] flex flex-col backdrop-blur-2xl border border-[#2995D3]/20 dark:border-[#444] transform transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(41,149,211,0.3)]">
          <div className="flex justify-between items-center p-2 border-b border-[#2995D3]/20 dark:border-[#444] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2995D3]/10 to-transparent dark:from-[#1e1e1e]/10 opacity-30 rounded-t-lg" />
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 z-10">
              Ask Zagol{" "}
              <p className="text-sm font-thin text-neutral-500 dark:text-neutral-400">
                {" "}
                Get AI-powered help
              </p>
            </h3>
            <button
              onClick={toggleChat}
              className="text-2xl text-neutral-900 dark:text-neutral-100 hover:text-[#1e7bb5] dark:hover:text-[#2995D3] transition-colors z-10"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Bot Initial Message */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <DotLottieReact
                  src="https://lottie.host/afc5e6de-7813-4dec-9f3b-0662bfef1681/VIlNDp30hj.lottie"
                  loop
                  autoplay
                />
              </div>
              <div className="relative flex flex-col max-w-[75%] p-4 bg-gradient-to-br from-[#2995D3] to-[#1e7bb5] text-white rounded-2xl shadow-md before:absolute before:-inset-1 before:bg-gradient-to-r before:from-[#2995D3]/30 before:to-transparent before:rounded-2xl before:animate-shine">
                <p className="text-sm font-medium">
                  Hey! How can I help you today?
                </p>
              </div>
            </div>

            {/* User Messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative max-w-[75%] p-4 rounded-2xl shadow-md ${
                    msg.sender === "user"
                      ? "bg-gradient-to-br from-[#b6bec3] to-[#adcadc] text-white dark:from-[#444] dark:to-[#555]"
                      : "bg-gray-100 dark:bg-[#333]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 dark:to-[#444]/10 rounded-2xl" />
                  <p className="text-sm relative z-10 dark:text-neutral-100">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 pt-0 relative">
            <div className="flex items-center gap-1 backdrop-blur-sm rounded-xl px-2 py-1 shadow-inner border-b dark:border-none">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="block py-2.5 px-0 text-sm text-gray-900 dark:text-neutral-100 bg-transparent border-0 appearance-none dark:border-gray-600 dark:focus:border-[#2995D3] focus:outline-none focus:ring-0 focus:border-[#2995D3] peer w-[90%]"
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="w-7 h-7 text-[#2995D3]"
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="w-20 h-20 fixed bottom-4 right-4 z-[1100]">
        <button
          onClick={toggleChat}
          className="w-16 h-16 p-1 bg-[#036ca8] rounded-full flex items-center justify-center shadow-lg focus:outline-none"
        >
          <DotLottieReact
            src="https://lottie.host/afc5e6de-7813-4dec-9f3b-0662bfef1681/VIlNDp30hj.lottie"
            loop
            autoplay
          />
        </button>
      </div>

      {/* Add global animations */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(15deg);
          }
          100% {
            transform: translateX(200%) rotate(15deg);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </>
  );
};

export default ChatSupport;
