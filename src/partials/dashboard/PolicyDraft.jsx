import React from 'react';

function PolicyDraft() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/AfriCare.png" height={48} width={48} />
        </header>
        <h2 className="text-1xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Draft Privacy Policies</h2>
        <div className="flex items-start">
        </div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">Every business is unique, and so are its privacy needs. We draft customized privacy policies tailored to your specific business requirements, ensuring comprehensive coverage and legal compliance.<p><br></br></p>Tailored Policies: Policies designed to fit your business model and industry requirements.<p><br></br></p>Expert Review: Our legal experts review and refine your policy to ensure accuracy and completeness.<p><br></br></p>Comprehensive Coverage: All aspects of data collection, usage, and protection are covered in your custom policy.</div>
      </div>
    </div>
  );
}

export default PolicyDraft;
