"use client";

import React, { useEffect, useState } from "react";

// framer motion
import { toast } from "react-toastify";

const ContactUs = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromMail: email,
          name: name,
          message: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        // Handle success (e.g., show a success message)
        console.log(result.message);
      } else {
        // Handle error (e.g., show an error message)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      toast.success('Email Sent Successfully');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div
      id="kontakt"
      className="bg-[#E9EEE8] w-full mx-auto flex justify-between items-center flex-col gap-12 py-12 lg:px-0 sm:px-12 px-6"
    >
      <div className="w-full max-w-[600px] px-5 py-6 sm:px-10 sm:py-10 bg-white shadow-md gap-y-5 grid sm:grid-cols-2">
        <div>
          <p className="text-lg">Owner: Pedja Petkovic</p>
          <p className="text-base my-1">bigbins</p>
          <a href="tel:4164584324" className="text-base hover:underline underline-offset-4 transition-all duration-300 ">Call: <span className="font-bold">
            416-458-4324
          </span> </a>
        </div>
        <div>
          <p className="text-lg">Sales: Domenic Augurusa</p>
          <a href="mailto:augurusadomenic@gmail.com" className="text-base hover:underline underline-offset-4 transition-all duration-300 block my-1">Mail: <span className="font-bold">
            augurusadomenic@gmail.com
          </span> </a>
          <a href="tel:4168818399" className="text-base hover:underline underline-offset-4 hover:transition-all hover:duration-1000">Call: <span className="font-bold">
            416-881-8399
          </span> </a>
        </div>
      </div>
      <div className="w-full max-w-[600px] px-5 py-6 sm:px-10 sm:py-10 bg-white shadow-md">
        <form onSubmit={handleButtonClick} className="flex flex-col gap-4 sm:gap-8">
          <div>
            <h3 className="mb-2 text-base">Email *</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full form-textarea py-2 px-4 rounded border border-gray-300 outline-none focus:ring focus:ring-brand-1 focus:ring-opacity-50"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mb-2">Name *</h3>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full form-textarea py-2 px-4 rounded border border-gray-300 outline-none focus:ring focus:ring-brand-1 focus:ring-opacity-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <h3 className="mb-2">Message </h3>
            <textarea
              name="Wiadomość"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message"
              className="w-full form-textarea py-2 px-4 rounded border border-gray-300 outline-none focus:ring focus:ring-brand-1 focus:ring-opacity-50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* <div className="mt-4"> */}
          <button type='submit' disabled={isLoading} className="py-[10px] px-6 bg-brand-1 hover:bg-brand-1/90 text-white rounded transition-colors duration-200 disabled:bg-gray-400 font-bold sm:text-xl">
            Submit
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
