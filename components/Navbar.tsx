import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between text-gray-400 px-8 py-8 min-w-[380px] sm:min-w-2xl'>
        <div>
            <span className='font-semibold text-xl'>BAINS</span>
        </div>
        <div className='sm:flex sm:justify-between sm:items-center gap-8 hidden'>
            <Link href={`/about`}>
                <span>About</span>
            </Link>
            <Link href={`/projects`}>
                <span>Projects</span>
            </Link>
        </div>
        <div className='sm:hidden'>
            Icon
        </div>
    </div>
  )
}

export default Navbar