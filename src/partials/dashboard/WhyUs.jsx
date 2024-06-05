import React from 'react';

function WhyUs() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/CyberPOlicy Pro.png" height={48} width={48} />
        </header>
        <h2 className="text-1xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Why Choose Us?</h2>
        <div className="flex items-start">
        </div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-500 mb-1">Expertise: Our team of cybersecurity and legal experts brings a wealth of knowledge and experience to ensure you receive top-notch service.<p><br></br></p>Simplicity: We believe in making complex information simple and accessible, ensuring you stay informed and compliant without the headache.<p><br></br></p>Innovation: Leveraging advanced AI technology, we provide innovative solutions that make managing privacy policies and compliance easier than ever.<p><br></br></p>Customer Focus: Your privacy and compliance needs are our top priority. We work closely with you to provide personalized, effective solutions.</div>
      </div>
    </div>
  );
}

export default WhyUs;
