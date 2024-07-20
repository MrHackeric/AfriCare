import React from 'react';

function Simplification() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/AfriCare.png" height={48} width={48} />
        </header>
        <h2 className="text-1xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Privacy Policy Simplification</h2>
        <div className="flex items-start">
        </div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">We know that privacy policies can be lengthy, dense, and hard to understand. Our experts break down these complex documents into simple, digestible summaries, highlighting the most critical points that matter to you.<p><br></br></p>Key Point Summarization: We provide concise summaries of privacy policies, making it easy for you to understand the essentials.<p><br></br></p>Jargon Explanation: Technical and legal terms are defined in plain language.<p><br></br></p>Red Flag Identification: Potentially concerning clauses that might impact your privacy are pointed out and explained.</div>
      </div>
    </div>
  );
}

export default Simplification;
