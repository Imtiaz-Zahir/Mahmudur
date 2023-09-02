'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function miniWindow({data}) {
    const [count, setCount] = useState(0)

    return (
        <div className='w-[485px]'>
            <h1 className='text-xl font-bold ml-5 mb-5'>{data.catagory}</h1>
            <div className='miniWindow flex items-center'>
                <svg onClick={() => { setCount((count) => count==0?data.image.length-1:count - 1) }} className='mx-1 cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" transform="translate(32) rotate(90)" fill="url(#paint0_radial_73_336)" />
                    <path d="M2.66666 16C2.66666 23.364 8.636 29.3333 16 29.3333C23.364 29.3333 29.3333 23.364 29.3333 16C29.3333 8.63596 23.364 2.66663 16 2.66663C8.636 2.66663 2.66666 8.63596 2.66666 16Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.68 11.2933L12.9867 16L17.68 20.7067" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <radialGradient id="paint0_radial_73_336" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
                            <stop stop-color="#040F2E" stop-opacity="0.34" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

                <div className='my-5 overflow-hidden'>
                    <div style={{ right: `${count}00%` }} className='flex w-[406px] relative transition-all duration-500 ss'>
                        {data.image.map((item, index) => {
                            return (<Image key={index} src={item} loading='lazy' width={406} height={406} alt="" />)
                        })}
                    </div>
                </div>
                <svg onClick={() => { setCount((count) => count==data.image.length-1? 0 :count + 1) }} className='mx-1 rotate-180 cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" transform="translate(32) rotate(90)" fill="url(#paint0_radial_73_336)" />
                    <path d="M2.66666 16C2.66666 23.364 8.636 29.3333 16 29.3333C23.364 29.3333 29.3333 23.364 29.3333 16C29.3333 8.63596 23.364 2.66663 16 2.66663C8.636 2.66663 2.66666 8.63596 2.66666 16Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.68 11.2933L12.9867 16L17.68 20.7067" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <radialGradient id="paint0_radial_73_336" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
                            <stop stop-color="#040F2E" stop-opacity="0.34" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <Link className='conta font-medium flex mx-auto justify-center items-center mt-10 gap-1' href="./contract">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3817 22 8.81782 21.6146 7.41286 20.888L3.58704 21.9553C2.92212 22.141 2.23258 21.7525 2.04691 21.0876C1.98546 20.8676 1.98549 20.6349 2.04695 20.4151L3.11461 16.5922C2.38637 15.186 2 13.6203 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 13.4696 3.87277 14.8834 4.57303 16.1375L4.72368 16.4072L3.61096 20.3914L7.59755 19.2792L7.86709 19.4295C9.12006 20.1281 10.5322 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" fill="white" />
                </svg>
                Contact now
            </Link>
        </div>
    )
}
