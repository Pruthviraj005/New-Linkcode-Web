"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

export const Header = () => {
  const [inputText, setInputText] = useState(""); // Input from the user
  const [response, setResponse] = useState(""); // Response from the backend
  const [loading, setLoading] = useState(false); // Loading state
  const [isChatOpen, setIsChatOpen] = useState(false); // Chat widget visibility

  

  // Function to get response from the backend
  const getOpenAIResponse = async () => {
    if (!inputText) {
      alert("Please enter a query!");
      return;
    }

    setLoading(true);
    setResponse(""); // Clear previous response

    try {
      const res = await axios.post("https://fastapi-3exb.onrender.com/essay/invoke/invoke", {
        input: { topic: inputText }
      });
      // Extract content from the response
      setResponse(res.data.output.content);

    }
    catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Failed to fetch response from the server.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 left-0 top-0 bg-sky-50">
          
          <h1 className="text-2xl md:text-7xl font-bold bg-gradient-to-r from-purple-700 via-blue-600 to-green-500 bg-clip-text text-transparent animate-fadeIn pl-4">
            Unlock Your Coding Potential. <br /> Linking To The Corporate World
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-950 pl-4">
            Unleash your coding potential with Linkcode. Decode the digital world and build the future.
          </p>

          <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 mt-10 ml-4">
            Get Started
          </button>
        </div>

        {/* Floating Chat Icon */}
        {!isChatOpen && (
          <div className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full flex items-center justify-center px-4 py-2 shadow-lg cursor-pointer transform transition-transform hover:scale-110 hover:bg-blue-700 z-20" onClick={() => setIsChatOpen(true)}>
            <span className="text-xl mr-2"><Image width={0} height={0} src="/assets/chatbot.png" alt="chatbot" className="w-10" /></span>
            {/* <span className="text-sm">Chat with Assistant</span> */}
          </div>
        )}

        {/* Chat Widget */}
        {isChatOpen && (
          <div className="fixed bottom-5 right-5 w-80  bg-sky-50 rounded-lg shadow-lg z-20 border border-green-300">
            <div className="flex justify-between items-center bg-sky-100 px-4 py-2 rounded-t-lg">
              <h2 className=" text-lg tracking-tight font-bold"><Image width={0} height={0} src="/assets/chatbot.png" alt="chatbot" className="w-10" /></h2>
              <button className="text-gray-500 text-xl" onClick={() => setIsChatOpen(false)}>
                ✖
              </button>
            </div>

            <div className="flex flex-col gap-3 px-4 py-3">
              {loading &&
                (
                  <>
                    <p className="p-3 bg-green-100 rounded-md text-blue-600 text-sm w-4/5">{inputText}</p>
                    <p className="text-gray-400 italic">Thinking...</p>
                  </>
                )
              }
              {response && (
                <div>
                  <p className="p-3 bg-green-100 rounded-md text-blue-600 text-sm w-4/5 ml-auto">{inputText}</p>
                  <Image width={0} height={0} src="/assets/chatbot.png" alt="chatbot" className="w-8" />
                  <div className="p-3 bg-green-100 rounded-md">
                    {/* <h3 className="text-blue-700 mb-1">Response:</h3> */}
                    <p className="text-blue-700 text-sm w-4/5 mr-auto">{response}</p>
                  </div>
                </div>
              )}
              <div className="flex flex-row">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask me anything..."
                  className="p-2 rounded-md border bg-green-50 text-blue-700 text-sm w-96"
                />
                <button className="p-2 text-white rounded-md" onClick={getOpenAIResponse}>
                  <Image width={0} height={0} src="/assets/send.png" alt="send-icon" className="w-8 hover:bg-sky-100 hover:p-0.5 hover:rounded-lg" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

