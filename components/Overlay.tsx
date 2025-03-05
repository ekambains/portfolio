import React from 'react'
import Link from 'next/link'

const Overlay = () => {
  return (
    <div className='flex flex-col h-screen z-50 px-8 py-5 gap-4 text-xl text-white sm:hidden'>
      <Link href={`/`}>
        <span>Home</span>
      </Link>
      <Link href={`/about`}>
        <span>About</span>
      </Link>
      <Link href={`/projects`}>
        <span>Projects</span>
      </Link>
    </div>
  )
}

export default Overlay