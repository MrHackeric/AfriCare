import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const legalComplianceOptions = [
  'GDPR',
  'CCPA',
  'HIPAA',
  'COPPA',
];

const dataTypesOptions = [
  'Personal Information',
  'Financial Information',
  'Health Information',
];

const collectionMethodsOptions = [
  'Online Forms',
  'Cookies',
  'Third-Party Sources',
];

const dataUsageOptions = [
  'Marketing',
  'Service Improvement',
  'Legal Compliance',
];

const dataSharingOptions = [
  'Third-Party Partners',
  'Service Providers',
  'Legal Authorities',
];

const dataStorageOptions = [
  'Cloud Storage',
  'On-Premise Servers',
  'Third-Party Services',
];

const userRightsOptions = [
  'Access',
  'Rectification',
  'Erasure',
];

const cookiesInfoOptions = [
  'Essential Cookies',
  'Analytical Cookies',
  'Advertising Cookies',
];

const policyChangesOptions = [
  'Email Notification',
  'Website Notification',
];

const childrenPrivacyOptions = [
  'Yes',
  'No'
];

const disputeResolutionOptions = [
  'Arbitration',
  'Mediation',
  'Court Proceedings',
];

function DraftaPolicy() {
  const [messages, setMessages] = useState([]);
  const [policyDetails, setPolicyDetails] = useState({
    companyName: '',
    contactInfoEmail: '',
    contactInfoPhone: '',
    physicalAddress: '',
    dataTypes: [],
    collectionMethods: [],
    dataUsage: [],
    dataSharing: [],
    dataStorage: [],
    userRights: [],
    cookiesInfo: [],
    policyChanges: [],
    legalCompliance: [],
    childrenPrivacy: '',
    effectiveDate: new Date(),
    disputeResolution: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'dataTypes' || name === 'collectionMethods' || name === 'dataUsage' || name === 'dataSharing' || name === 'dataStorage' || name === 'userRights' || name === 'cookiesInfo' || name === 'policyChanges' || name === 'legalCompliance' || name === 'disputeResolution') {
      const updatedOptions = checked
        ? [...policyDetails[name], value]
        : policyDetails[name].filter((option) => option !== value);
      setPolicyDetails({ ...policyDetails, [name]: updatedOptions });
    } else {
      setPolicyDetails({ ...policyDetails, [name]: value });
    }
  };

  const handleDateChange = (date) => {
    setPolicyDetails({ ...policyDetails, effectiveDate: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/drafts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(policyDetails),
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.response };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard');
    });
  };

  const downloadText = (text) => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'privacy_policy.txt';
    document.body.appendChild(element);
    element.click();
  };


  return (
    <div className="flex flex-col col-span-full sm:col-span-60 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/CyberPolicy Pro.png" height={48} width={48} alt="Logo" />
        </header>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Draft your Privacy Policy</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* COMPANY NAME */}
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="p-2 border rounded-sm w-full dark:bg-slate-800 dark:border-slate-700"
            value={policyDetails.companyName}
            onChange={handleChange}
          />

          {/* CONTACT INFO EMAIL */}
          <input
            type="text"
            name="contactInfoEmail"
            placeholder="Company Email"
            className="p-2 border rounded-sm w-full dark:bg-slate-800 dark:border-slate-700"
            value={policyDetails.contactInfoEmail}
            onChange={handleChange}
          />

          {/* CONTACT INFO PHONE*/}
          <input
            type="text"
            name="contactInfoPhone"
            placeholder="Phone Contact"
            className="p-2 border rounded-sm w-full dark:bg-slate-800 dark:border-slate-700"
            value={policyDetails.contactInfoPhone}
            onChange={handleChange}
          />

           {/* PHYSICAL ADDRESS */}
           <input
            type="text"
            name="physicalAddress"
            placeholder="Physical Address"
            className="p-2 border rounded-sm w-full dark:bg-slate-800 dark:border-slate-700"
            value={policyDetails.physicalAddress}
            onChange={handleChange}
          />
          
          {/* FRAMEWORK */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Which legal framework do you want your privacy policy to be compliant to?</label>
            {legalComplianceOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="legalCompliance"
                  value={option}
                  checked={policyDetails.legalCompliance.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* DATA TYPES */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Which type of data do you collect for Processing?</label>
            {dataTypesOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="dataTypes"
                  value={option}
                  checked={policyDetails.dataTypes.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* COLLECTION METHODS */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">How do you collect users' data?</label>
            {collectionMethodsOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="collectionMethods"
                  value={option}
                  checked={policyDetails.collectionMethods.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* DATA USAGE */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">How do you use users' data?</label>
            {dataUsageOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="dataUsage"
                  value={option}
                  checked={policyDetails.dataUsage.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* DATA SHARING */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">How do you share users' data?</label>
            {dataSharingOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="dataSharing"
                  value={option}
                  checked={policyDetails.dataSharing.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* DATA STORAGE */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">How do you store your data?</label>
            {dataStorageOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="dataStorage"
                  value={option}
                  checked={policyDetails.dataStorage.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* USER RIGHTS */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Which rights will your users have to the information you collect?</label>
            {userRightsOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="userRights"
                  value={option}
                  checked={policyDetails.userRights.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* COOKIES COLLECTED */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Which cookies do you collect?</label>
            {cookiesInfoOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="cookiesInfo"
                  value={option}
                  checked={policyDetails.cookiesInfo.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* POLICY CHANGES */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">How do you want to notify your clients on policy changes?</label>
            {policyChangesOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="policyChanges"
                  value={option}
                  checked={policyDetails.policyChanges.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* CHILDREN INFO */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Do you collect information on children?</label>
            {childrenPrivacyOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="childrenPrivacy"
                  value={option}
                  checked={policyDetails.childrenPrivacy.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* DISPUTE RESOLUTIONS */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">How do you want dispute resolved?</label>
            {disputeResolutionOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="disputeResolution"
                  value={option}
                  checked={policyDetails.disputeResolution.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* DATE EFFECTED */}
          <label className="block font-medium text-gray-700 dark:text-gray-300">Date when this Privacy Policy is effective</label>
          <DatePicker
            selected={policyDetails.effectiveDate}
            onChange={handleDateChange}
            className="p-2 border rounded-sm w-full dark:bg-slate-800 dark:border-slate-700" placeholderText="Effective Date"/>
          {/* Include all the form fields with handleChange and handleDateChange for the effectiveDate */}
          <br></br>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4">Submit</button>
        </form>        
        <div className="mt-4 p-4 border rounded-sm dark:bg-slate-700 dark:border-slate-600">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
              <div className="flex mt-2">
                <button 
                className="bg-gray-500 text-white p-2 rounded-sm mr-2"
                onClick={() => copyToClipboard(msg.text)}
                >
                  Copy to Clipboard
                </button>
                <button 
                className="bg-green-500 text-white p-2 rounded-sm"
                onClick={() => downloadText(msg.text)}
                >
                  Download Text
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DraftaPolicy;
