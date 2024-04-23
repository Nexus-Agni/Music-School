"use client";
import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(name, email, message);
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields')
            return
        }
        //validating email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email')
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch(
            "https://script.google.com/macros/s/AKfycbyPHuF2CGCew0SmFrvRjXUUmVZJ2Zoty5oGBf32WtJcooopL8IAWeo9WKqQh_T60uu12g/exec",
            {
              method: "POST",
              body: formData,
              mode: "no-cors",
            }
          )
            .then(() => {
              alert("Form Submitted Successfully");
              setName("");
              setEmail("");
              setMessage("");
            })
            .catch((error) => {
              alert("Error in submitting the form");
              console.log(error);
            });
    }

  return (
    <div className="w-full md:w-1/3 z-50 flex flex-col space-y-5 border-white border-2 px-6 py-10 rounded-xl backdrop-blur-md bg-opacity-80">
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="name"
    >
      Name
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      type="text"
      placeholder="Enter your name"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    ></input>
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="email"
    >
      Email
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      type="email"
      placeholder="Enter your email"
      id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    ></input>
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="message"
    >
      Message
    </label>
   <div className='flex items-center justify-center space-x-3'>
    <input 
        className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-black  border-white border-2 transition-all duration-300 ease-in-out"
        onClick={(e)=>handleSubmit(e)}
      >
        Send 
      </button> 
   </div>
  </div>
  )
}

export default Form