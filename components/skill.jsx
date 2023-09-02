import React from 'react'
import Tiltcom from './Tiltcom'

export default function skill() {
  return (
    <section className='text-center mt-28 overflow-hidden mx-auto px-28 max-w-[1440px] text-white'>
      <h1 className='mt-28 mb-[53px] font-medium text-5xl'>Skills</h1>
        <div className='flex items-center flex-col'>
          <Tiltcom className='s-button text-5xl font-medium w-[261px] h-[192px]'title="Figma"/>
          <Tiltcom className='s-button text-5xl font-medium w-[220px] h-[165px] -left-24 -top-14'title="XD"/>
          <Tiltcom className='s-button text-5xl font-medium w-[192px] h-[137px] -top-48 left-24'title="AI"/>
          <Tiltcom className='s-button text-5xl font-medium w-[179px] h-[130px] -top-56 -left-9'title="PS"/>
        </div>
      <svg className='mx-auto' width="821" height="2" viewBox="0 0 821 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H820" stroke="url(#paint0_radial_15_2072)" stroke-linecap="round" />
        <defs>
          <radialGradient id="paint0_radial_15_2072" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(424.5 1) rotate(180) scale(383 313677)">
            <stop stop-color="#82FDCB" />
            <stop offset="1" stop-color="#82FDCB" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  )
}
