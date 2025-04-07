import React from 'react'
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between w-full py-4 text-lg'>
        <div>
            <span>&copy; Bains</span>
        </div>
        <div className='flex items-center gap-4 text-2xl'>
            <Link href={`https://www.twitter.com/ekam_bains_`} target='_blank'><FaXTwitter /></Link>
            <Link href={`https://www.linkedin.com/in/ekambains`} target='_blank'><FaLinkedin /></Link>
            <Link href={`https://www.github.com/ekambains`} target='_blank'><FaGithub /></Link>
        </div>
    </div>
  )
}

export default Footer