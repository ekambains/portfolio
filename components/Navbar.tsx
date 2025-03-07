"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Overlay from './Overlay';

const Navbar = () => {
    const [overlay, setOverlay] = useState(false);
    const sidebar = () => {
        setOverlay(!overlay);
    };
  return (
    <>
    <div className='flex justify-between text-gray-400 min-w-[350px] sm:min-w-2xl'>
        <div>
            <span className='font-semibold text-xl hover:cursor-pointer tracking-widest'>BAINS</span>
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
            <button onClick={sidebar}>Icon</button>
        </div>
    </div>
    {overlay && (<Overlay />)}
    </>
  )
}

export default Navbar