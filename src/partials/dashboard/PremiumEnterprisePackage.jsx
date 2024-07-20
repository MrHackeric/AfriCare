import React from 'react';

function PremiumEnterprisePackage() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/AfriCare.png" height={48} width={48} />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Premium Enterprise Package</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Billed Monthly</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$200</div>
        </div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">Unlimited Simplification of privacy policies for your customers and users.<p><br></br></p>AI Chatbot access for real-time assistance<p><br></br></p>Comprehensive Compliance Checks with all relevant legal frameworks for your policies; for users to use.<p><br></br></p>Expert assistance in drafting and reviewing multiple privacy policies tailored to different aspects of the business.<p><br></br></p>Daily Reports on privacy policy simplifications and compliance status.<p><br></br></p>Dedicated Account Manager for personalized support and guidance.<p><br></br></p>Regular training sessions and workshops on privacy policy management and compliance.<p><br></br></p>24/7 Support for urgent queries and issues.</div>
      </div>
    </div>
  );
}

export default PremiumEnterprisePackage;
