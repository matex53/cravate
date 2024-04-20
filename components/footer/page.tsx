import React from 'react'
import Link from 'next/link'

export default function footer() {
  return (
    <footer className='border-neutral-300 bg-neutral-50'>
     <div className='mx-auto max-w-7xl px-4 lg:px-8'>
      <div className='grid grid-cols-3 gap-8 py-16'>
        <div><h3 className='text-sm font-semibold text-neutral-900'>Saleor</h3>
        <ul className='mt-4 space-y-4 [&>li]:text-neutral-500'>
          <li className='text-sm'><a href="/">About</a></li>
          <li className='text-sm'><a href="/">Documantition</a></li>
        </ul>
        </div>
        <div>
          <h3 className='text-sm font-semibold text-neutral-900'>Collection</h3>
          <ul className='mt-4 space-y-4 [&>li]:text-neutral-500'>
            <li className='text-sm'><a href="/">Featured Products</a></li>
            <li className='text-sm'><a href="/">Summer Picks</a></li>
          </ul>
        </div>
        </div>
        <div className='mb-4 text-neutral-500'>
          <div className='flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row'>
            <p className='text-sm text-neutral-500'>Copyright ©   2024  Your Store, Inc.</p>
            <p className='flex gap-1 text-sm text-neutral-500'>Powered by
            <a target="_blank" href='/'>Engin Ç</a>
            <a target="_blank" className="opacity-30" href="/">
              
            </a>
            </p>
          </div>
        </div>

     </div>
    </footer>
  )
}
