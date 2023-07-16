import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameRequired, setIsNameRequired] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageRequired, setIsMessageRequired] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      setIsNameRequired(true);
      return;
    }

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    if (message.trim() === '') {
      setIsMessageRequired(true);
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
    setIsNameRequired(false);
    setIsEmailValid(true);
    setIsMessageRequired(false);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {isNameRequired && <span className="error-message">Name is required</span>}
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && <span className="error-message">Invalid email address</span>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {isMessageRequired && <span className="error-message">Message is required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

