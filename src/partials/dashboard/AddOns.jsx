import React from 'react';
import Tooltip from '../../components/Tooltip';

function AddOns() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-10 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
      <img src="./src/images/CyberPOlicy Pro.png" height={48} width={48} />
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Add-Ons</h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">Add-Ons for both Customers and Businesses.</div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">For your use</div>
        </div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">Extended Data Storage: Additional storage for privacy policy documents and reports.<p><br></br></p>Multi-Language Support: Support for multiple languages.<p><br></br></p>Legal Consultation: Access to legal experts for advice on privacy and cybersecurity regulations.</div>
      </div>
    </div>
  );
}

export default AddOns;
