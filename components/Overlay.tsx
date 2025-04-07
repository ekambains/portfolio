import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Overlay = ({ close }: { close: () => void }) => {
  return (
    <div className='fixed inset-0 bg-black z-50 flex flex-col px-10 py-7 gap-4 text-xl text-white sm:hidden'>
      <div className='flex justify-end'>
        <button onClick={close}>
          <XMarkIcon className='size-8' />
        </button>
      </div>
      <Link href={`/`}>
        <span onClick={close}>Home</span>
      </Link>
      <Link href={`/about`}>
        <span onClick={close}>About</span>
      </Link>
      <Link href={`/contact`}>
        <span onClick={close}>Contact</span>
      </Link>
    </div>
  )
}

export default Overlay