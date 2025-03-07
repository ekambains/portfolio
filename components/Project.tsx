import React from 'react'

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
        <a href={src}><h1 className='py-2 text-xl font-bold text-white'>{title}</h1></a>
        <h2 className='py-2 text-lg'>Tech Stack: {stack}</h2>
        <a href={src} className='py-2'><img src={img} /></a>
        <p className='py-2 text-lg'>{description}</p>
    </div>
  )
}

export default Project