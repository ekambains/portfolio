import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between w-full py-4 text-lg'>
        <div>
            <span>&copy; Bains</span>
        </div>
        <div className='flex items-center gap-4'>
            <span><FaXTwitter /></span>
            <span><FaLinkedin /></span>
            <span><FaGithub /></span>
        </div>
    </div>
  )
}

export default Footer