"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "e33141c5-aa36-45fc-887d-4b6ab49aaf43",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  const [confirm, setConfirm] = useState(false);
  const confirmation = () => {
    setConfirm(prevConfirm => !prevConfirm);
    const timer = setTimeout(() => {
      setConfirm(prevConfirm => !prevConfirm);
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <>
    <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg max-w-md mx-auto my-10'>
        <form className='flex flex-col items-center gap-6' onSubmit={handleSubmit} method="POST">

            <h1 className='text-white text-2xl sm:text-3xl font-bold'>Send Me a Message 🚀</h1>

            <input className='bg-black w-full h-10 rounded-md p-2 hover:border-2 hover:border-white' type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Full Name' required />

            <input className='bg-black w-full h-10 rounded-md p-2 hover:border-2 hover:border-white' type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required />

            <textarea className='bg-black w-full h-28 rounded-md p-2 hover:border-2 hover:border-white' name='message' value={formData.message} onChange={handleChange} placeholder='Message' required></textarea>

            <button className='bg-white text-black h-10 w-full rounded-md p-2 hover:cursor-pointer' onClick={confirmation} type='submit'>Send Message</button>
            
        </form>
    </div>
    {confirm && (
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg max-w-md mx-auto my-10">
        <p className="text-white text-lg sm:text-xl">
          Confirmation, Message Recieved! Will get back to you shortly.
        </p>
      </div>
    )}
    </>
  )
}

export default Contact