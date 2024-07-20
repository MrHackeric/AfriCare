import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [url, setUrl] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const sendMessage = async () => {
    if (!url.trim()) return;

    const userMessage = { sender: 'user', text: url.trim() };

    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: userMessage.text }),
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.response };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setUrl('');
  };

  const toggleChatWindow = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-icon-button bg-blue-500 text-white p-3 rounded-full"
        onClick={toggleChatWindow}
      >
        <img src="./src/images/AfriCare.png" height={24} width={24} />
      </button>
      <h2 className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2">Chatbot</h2>
      {isChatOpen && (
        <div className="chat-window-container flex flex-col col-span-full sm:col-span-60 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <div className="px-5 pt-5">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <img src="./src/images/AfriCare.png" height={48} width={48} alt="Logo" />
              <button onClick={toggleChatWindow} className="text-xl">×</button>
            </header>
            <h2 className="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-2">Chatbot</h2>
            <div className="chat-window bg-slate-50 dark:bg-slate-900 p-4 rounded-sm h-80 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                  <span className={`inline-block p-2 rounded-md ${msg.sender === 'bot' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-blue-500 text-white'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4 flex space-x-2">
              <input
                type="text"
                placeholder="Interact with AfriCare Chatbot for assistance..."
                className="p-2 border rounded-sm flex-grow dark:bg-slate-800 dark:border-slate-700"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded-sm"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
            <br></br>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
















// import React, { useState } from 'react';

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [url, setUrl] = useState('');

//   const sendMessage = async () => {
//     if (!url.trim()) return;

//     const userMessage = { sender: 'user', text: url.trim() };

//     const response = await fetch('http://localhost:3000/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ text: userMessage.text }),
//     });

//     const data = await response.json();
//     const botMessage = { sender: 'bot', text: data.response };

//     setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
//     setUrl('');
//   };

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-60 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
//       <div className="px-5 pt-5">
//         <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
//           <img src="./src/images/CyberPolicy Pro.png" height={48} width={48} alt="Logo" />
//         </header>
//         <h2 className="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-2">Chatbot</h2>
//         <div className="chat-window bg-slate-50 dark:bg-slate-900 p-4 rounded-sm h-80 overflow-y-auto">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
//               <span className={`inline-block p-2 rounded-md ${msg.sender === 'bot' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-blue-500 text-white'}`}>
//                 {msg.text}
//               </span>
//             </div>
//           ))}
//         </div>
//         <div className="pt-4 flex space-x-2">
//           <input
//             type="text"
//             placeholder="Interact with CyberPolicy Pro for any enquiries..."
//             className="p-2 border rounded-sm flex-grow dark:bg-slate-800 dark:border-slate-700"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//           />
//           <button
//             className="bg-blue-500 text-white p-2 rounded-sm"
//             onClick={sendMessage}
//           >
//             Send
//           </button>
//         </div>
//         <br></br>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;

