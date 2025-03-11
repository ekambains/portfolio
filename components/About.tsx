import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className='text-gray-400 py-8'>
        <h1 className='text-white text-3xl sm:text-4xl tracking-wide font-bold py-4 mt-4'>Hey, I'm Ekampreet 👋🏻</h1>
        <p className='text-xl py-2'>
            I'm a web developer passionate about crafting modern, high-performance websites and applications. With a strong foundation in the MERN stack, I specialize in building scalable front-end experiences and efficient back-end systems.
            <br />
            <br />
            I enjoy turning ideas into functional, user-friendly interfaces while ensuring performance, responsiveness, and clean code. My development process emphasizes best practices, reusability, and maintainability, allowing me to create solutions that not only work but also scale effectively.
            <br />
            <br />
            Beyond web development, I enjoy solving LeetCode and data structures & algorithms (DSA) problems to sharpen my problem-solving skills and write more efficient code. This logical approach helps me build optimized applications that perform well under real-world conditions.
            <br />
            <br />
            If you're looking for a developer who values clean architecture, performance, and modern design, <Link className='text-white hover:text-blue-500' href={`/contact`}>Let's connect!</Link>
        </p>
    </div>
  )
}

export default About