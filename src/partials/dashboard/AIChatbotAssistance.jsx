import React from 'react';

function AIChatbot() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/CyberPOlicy Pro.png" height={48} width={48} />
        </header>
        <h2 className="text-1xl font-semibold text-slate-800 dark:text-slate-100 mb-2">AI Chatbot Assistance</h2>
        <div className="flex items-start">
        </div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">Meet CyberPolicy Pro, your friendly AI chatbot assistant.<p><br></br></p>Available 24/7, our chatbot is here to help you navigate cybersecurity and privacy concerns with ease.<p><br></br></p>Real-Time Assistance: Get instant answers to your cybersecurity and privacy questions.<p><br></br></p>User-Friendly Interaction: Simple, conversational interface makes it easy to get the information you need.<p><br></br></p>Educational Support: Learn about complex cybersecurity topics and privacy policies through engaging, easy-to-understand dialogue.</div>
      </div>
    </div>
  );
}

export default AIChatbot;
