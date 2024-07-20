import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Adjust the server URL as needed

function ChatArea() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);


  useEffect(() => {
    socket.on('chat response', (response) => {
      setMessages((prevMessages) => [...prevMessages, { user: 'Server', content: response }]);
    });

    return () => {
      socket.off('chat response');
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat when a new message is added
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const newMessage = {
        user: 'User1', // Replace with actual user info
        content: message,
        timestamp: new Date(),
      };
      socket.emit('send_message', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-20 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <img src="./src/images/AfriCare.png" height={48} width={48} alt="Logo" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Live Chat</h2>
        <div className="chat-messages bg-slate-50 dark:bg-slate-700 p-4 rounded-sm overflow-y-auto h-64">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-2 ${msg.user === 'User1' ? 'justify-end' : ''}`}>
              <div className={`flex items-start ${msg.user === 'User1' ? 'ml-2' : 'mr-2'}`}>
                <img src="path_to_avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
              </div>
              <div className={`bg-blue-500 text-white p-3 rounded-lg shadow-lg max-w-xs ${msg.user === 'User1' ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                <div className="text-xs font-semibold">{msg.user}</div>
                <div className="text-sm">{msg.content}</div>
                <div className="text-xs text-right mt-1">{new Date(msg.timestamp).toLocaleTimeString()}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} /> {/* This div is used to scroll to the bottom */}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="p-2 border rounded-sm flex-1 dark:bg-slate-800 dark:border-slate-700"
            value={message}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-sm ml-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatArea;
