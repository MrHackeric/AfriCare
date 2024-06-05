import React from 'react';

function BasicConsumerPackage() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/CyberPOlicy Pro.png" height={48} width={48} />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Basic Consumer Package</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Freemium Account</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$0</div>
        </div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">Privacy Policy Simplification of up to 50 privacy policies per month.<p><br></br></p>AI Chatbot Assistance for real-time help with privacy policies.<p><br></br></p>Basic compliance checks with major legal frameworks (e.g., GDPR, CCPA) for up to 5 policies.<p><br></br></p>Monthly summary reports of the privacy policies analyzed and simplified.<p><br></br></p>Email Support for queries and issues.</div>
      </div>
    </div>
  );
}

export default BasicConsumerPackage;
