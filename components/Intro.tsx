import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row py-8 mt-[50px] gap-6'>
        <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          <div className="w-36 h-36 rounded-full overflow-hidden relative">
            <Image src="/saitama.png" alt="Profile Picture" className="w-full h-full object-cover" fill />
          </div>
        </div>
        <div className='flex flex-col text-gray-400'>
          <div>
            <p className='text-2xl font-bold tracking-wider'><Link href={`/about`}><span className='text-white hover:text-blue-500'>Hey, I&apos;m Ekampreet.</span></Link> I am a Software Engineer and a Freelancer.</p>
          </div>
          <div className='flex sm:flex-row flex-col mt-6 gap-4 text-xl'>
            <Link href={`https://www.twitter.com/ekam_bains_`} target='_blank' className='flex flex-row items-center gap-1 hover:text-white'>
              <FaXTwitter className='size-5' /> Twitter
            </Link>
            <Link href={`https://www.linkedin.com/in/ekambains`} target='_blank' className='flex flex-row items-center gap-1 hover:text-blue-600'>
              <FaLinkedin className='size-5' /> LinkedIn
            </Link>
            <Link href={`https://www.github.com/ekambains`} target='_blank' className='flex flex-row items-center gap-1 hover:text-purple-500'>
              <FaGithub className='size-5' /> Github
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Intro