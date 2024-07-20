import React from 'react';

function BasicEnterprisePackage() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <div className="px-5 pt-5">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                <img src="./src/images/AfriCare.png" height={48} width={48} />
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Basic Enterprise Package</h2>
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Freemium account</div>
            <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$0</div>
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">Automatic simplification of up to 50 privacy policies per month.<p><br></br></p>AI Chatbot access for real-time assistance.<p><br></br></p>Basic compliance checks with major legal frameworks for up to 25 policies.<p><br></br></p>Basic monthly reports on privacy policy simplifications and compliance status.<p><br></br></p>Policy assistance in drafting and reviewing privacy policies for the business.<p><br></br></p>Email Support for troubleshooting and queries.</div>
        </div>
    </div>
  );
}

export default BasicEnterprisePackage;
