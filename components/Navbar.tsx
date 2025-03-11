"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Overlay from './Overlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [overlay, setOverlay] = useState(false);
    const sidebar = () => {
        setOverlay(!overlay);
    };
  return (
    <>
    <div className='flex justify-between text-gray-400 min-w-[350px] sm:min-w-2xl'>
        <div>
            <Link href={`/`}><span className='font-semibold text-xl hover:cursor-pointer tracking-widest hover:text-blue-500'>BAINS</span></Link>
        </div>
        <div className='sm:flex sm:justify-between sm:items-center gap-8 hidden'>
            <Link href={`/about`}>
                <span className='hover:text-blue-500'>About</span>
            </Link>
            <Link href={`/contact`}>
                <span className='hover:text-blue-500'>Contact</span>
            </Link>
        </div>
        <div className='sm:hidden'>
            <button onClick={sidebar}>
                {overlay ? (<XMarkIcon className='size-8' />) : (<Bars3Icon className='size-8' />)}
            </button>
        </div>
    </div>
    {overlay && (<Overlay />)}
    </>
  )
}

export default Navbar