import React from 'react';
import { useState } from 'react';

// Create a separate MessageItem component to avoid recursion
const MessageItem = ({ name }) => {
  return <div>My name is {name}</div>;
};

const Message = () => {
  const [messages, setMessages] = useState([]);
  
  const [form, setForm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    
    const newMessage = {
      name: form,
    };

    setMessages([...messages, newMessage]);
    setForm(''); // Clear the input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={form} 
            onChange={(e) => setForm(e.target.value)} 
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>
          {messages.map((msg, index) => (
            <MessageItem key={index} name={msg.name} />
          ))}
        </h3>
      </div>
    </div>
  );
};

export default Message;