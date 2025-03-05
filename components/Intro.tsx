import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='flex py-8'>
        <div>
            <img src={`/vercel.svg`} alt='Profile Picture' height={100} width={50} className='rounded-full' />
        </div>
    </div>
  )
}

export default Intro