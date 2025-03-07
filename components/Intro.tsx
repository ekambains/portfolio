import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row py-8 mt-[50px] gap-6'>
        <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          <div className="w-36 h-36 rounded-full overflow-hidden">
            <img src="/saitama.png" alt="Profile Picture" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className='flex flex-col text-gray-400'>
          <div>
            <p className='text-2xl font-bold tracking-wider'><span className='text-white'>Hey, I'm Ekampreet.</span> I am a Software Engineer and a Freelancer.</p>
          </div>
          <div className='flex sm:flex-row flex-col mt-6 gap-4 text-xl'>
            <Link href={`https://www.twitter.com/ekam_bains_`}>Twitter</Link>
            <Link href={`https://www.linkedin.com/ekambains`}>LinkedIn</Link>
            <Link href={`https://www.github.com/ekambains`}>Github</Link>
          </div>
        </div>
    </div>
  )
}

export default Intro