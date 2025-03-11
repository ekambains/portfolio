import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg max-w-md mx-auto my-10'>
        <form className='flex flex-col items-center gap-6' action="">
            <h1 className='text-white text-2xl sm:text-3xl font-bold'>Send Me a Message 🚀</h1>
            <input className='bg-black w-full h-10 rounded-md p-2 hover:border-2 hover:border-white' type='text' name='name' placeholder='Full Name' required />
            <input className='bg-black w-full h-10 rounded-md p-2 hover:border-2 hover:border-white' type='email' name='email' placeholder='Email' required />
            <textarea className='bg-black w-full h-28 rounded-md p-2 hover:border-2 hover:border-white' name='message' placeholder='Message' required></textarea>
            <button className='bg-white text-black h-10 w-full rounded-md p-2 hover:cursor-pointer' type='submit'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact