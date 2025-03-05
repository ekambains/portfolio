import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row py-8 mt-[50px] gap-6'>
        <div>
            <img src={`/vercel.svg`} alt='Profile Picture' height={100} width={50} className='rounded-full' />
        </div>
        <div className='flex flex-col items-center justify-center bg-red-500'>
          <div className='text-center'>
            <p className='text-3xl font-bold'>Hey, I am Ekampreet. I am a Software Engineer.</p>
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Intro