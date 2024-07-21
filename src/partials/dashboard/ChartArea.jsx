import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { FaPaperPlane } from 'react-icons/fa'; // Import the send icon

const socket = io('http://localhost:3000'); // Adjust the server URL as needed

function ChatArea() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.on('chat response', (response) => {
      setMessages((prevMessages) => [...prevMessages, { user: 'Server', content: response, timestamp: new Date() }]);
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
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 h-full">
      <div className="px-5 pt-5 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Live Chat</h2>
        <div className="chat-messages bg-slate-50 dark:bg-slate-700 p-4 rounded-sm overflow-y-auto flex-1">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-2 ${msg.user === 'User1' ? 'justify-end' : ''}`}>
              <div className={`flex items-start ${msg.user === 'User1' ? 'ml-2' : 'mr-2'}`}>
                <img src="/src/images/AfriCare.png" alt="Avatar" className="w-8 h-8 rounded-full" />
              </div>
              <div className={`bg-blue-500 text-white p-3 rounded-lg shadow-lg max-w-xs ${msg.user === 'User1' ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                <div className="text-xs font-semibold">{msg.user}</div>
                <div className="text-xs">{msg.content}</div>
                <div className="text-xs text-right mt-1">{new Date(msg.timestamp).toLocaleTimeString()}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} /> {/* This div is used to scroll to the bottom */}
        </div>
      </div>
      <form onSubmit={handleSendMessage} className="flex items-center mt-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="text-xs p-2 border rounded-sm flex-1 dark:bg-slate-800 dark:border-slate-700"
          value={message}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="text-xs bg-blue-500 text-white p-2 rounded-sm ml-2 flex items-center justify-center"
        >
          <FaPaperPlane className="text-lg" />
        </button>
      </form>
    </div>
  );
}

export default ChatArea;
