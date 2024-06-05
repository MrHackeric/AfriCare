import React, { useState } from 'react';

function SimplifyPolicies() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/simplify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(response);
  };

  const handleDownload = () => {
    const blob = new Blob([response], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Simplified_Privacy_Policy.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-20 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/CyberPolicy Pro.png" height={48} width={48} alt="Logo" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Simplify Policies</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter URL or text"
            className="p-2 border rounded-sm w-full dark:bg-slate-800 dark:border-slate-700"
            value={input}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-sm mt-2"
          >
            Submit
          </button>
        </form>


        {response && (
          <div className="mt-4 p-4 border rounded-sm dark:bg-slate-700 dark:border-slate-600">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">A Summary of the Privacy Policy Provided</h3>
            <p className="text-slate-800 dark:text-slate-200 whitespace-pre-line">{response}</p>
            <div className="flex mt-2">
              <button
                onClick={handleCopyToClipboard}
                className="bg-gray-500 text-white p-2 rounded-sm mr-2"
              >
                Copy to Clipboard
              </button>
              <button
                onClick={handleDownload}
                className="bg-green-500 text-white p-2 rounded-sm"
              >
                Download Text
              </button>
            </div>
          </div>
        )}

        
      </div>
      <br></br>
    </div>
  );
}

export default SimplifyPolicies;
