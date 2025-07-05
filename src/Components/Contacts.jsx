import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavigationCircles from './NavigationCircles';

const Contacts = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EJS_SID,
  import.meta.env.VITE_EJS_TID,
  form.current,
  import.meta.env.VITE_EJS_KEY
    )
    .then(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setStatus('Failed to send message, please try again.');
    });
  };

  return (
    <div id='Contacts' className='h-screen flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-light md-mb-32 mb-24'>Connect with me</h2>

      <form ref={form} onSubmit={sendEmail} className='flex flex-col lg:space-y-12 space-y-8'>
        
        {/* Name - MUST be 'name' */}
        <input
          type="email"
          name="name"
          placeholder="Your e-mail"
          required
          className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500'
        />

        {/* Time - auto-filled hidden field */}
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}  // or use toISOString()
        />

        {/* Message - MUST be 'message' */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 min-h-[100px] max-h-[200px] resize-y p-3 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500'
        />

        <input
          type="submit"
          value="Stay Connected"
          className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500'
        />
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}

      <NavigationCircles section='Contacts' />
    </div>
  );
};

export default Contacts;
