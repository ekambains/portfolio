import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='mt-[30px] sm:mt-[50px]'>
        <h1 className='text-2xl tracking-widest font-bold py-2 text-gray-400'>PROJECTS</h1>
        <Project title="Bainsenormous" stack="Javascript, React, Tailwind CSS" img="/bainsenormous.png" 
        src="https://bainsenormous.ekambains.com/" 
        description="A gym website for generating workouts according to your choices, body type and aim. Responsive design and simple yet beautiful UI to interact."  />
    </div>
  )
}

export default Projects