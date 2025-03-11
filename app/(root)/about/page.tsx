import React from 'react'
import Navbar from '@/components/Navbar'
import About from '@/components/About'

const page = () => {
  return (
    <div className="flex justify-center items-center h-max max-w-screen">
      <div className="max-w-screen mx-6 sm:max-w-2xl sm:px-8 sm:py-8 px-7 py-7">
        <Navbar />
        <About />
      </div>
    </div>
  )
}

export default page