import React from 'react'
import Link from 'next/link';

interface ProjectProps {
  title: string;
  stack: string;
  img: string;
  src: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, stack, src, img, description }) => {
  return (
    <div className='text-gray-400 py-2'>
        <Link href={src} target='_blank'><h1 className='py-2 text-xl font-bold text-white hover:text-blue-500'>{title}</h1></Link>
        <h2 className='py-2 text-lg'>Tech Stack: {stack}</h2>
        <Link href={src} target='_blank' className='py-2'><img src={img} /></Link>
        <p className='py-2 text-lg'>{description}</p>
    </div>
  )
}

export default Project