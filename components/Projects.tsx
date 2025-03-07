import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='mt-[10px] sm:mt-[50px] py-4'>
        <h1 className='text-2xl tracking-widest font-bold py-2 text-gray-400'>PROJECTS</h1>

        <Project title='That Hood Barber' stack='Typescript, Nextjs, Aceternity UI' img='hood.png'
        src='https://thathoodbarber.com'
        description='Built using Nextjs and Aceternity UI for a smooth user experience with seemless booking using calendly. Increased profits by 70% also bringing in 200% more traffic than usual for the barber shop.' />

        <Project title="Bainsenormous" stack="Javascript, React, Tailwind CSS" img="/bainsenormous.png" 
        src="https://bainsenormous.ekambains.com/" 
        description="A gym website for generating workouts according to your choices, body type and aim. Responsive design and simple yet beautiful UI to interact."  />

        <Project title='YC Directory' stack='Typescript, Nextjs, Sanity, ShadCN' img='/yc.png'
        src='https://yc.ekambains.com'
        description='A directory for the new era of startups. Built using nextjs with smooth UI and an efficient backend using Sanity.'
        />
    </div>
  )
}

export default Projects