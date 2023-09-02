import React from 'react'

export default function commentScaliton() {
  return (
    <div className='my-4 px-8'>
        <div className='flex gap-4'>
            <div className='w-12 h-12 scaliton rounded-full'></div>
            <div className='flex flex-col justify-between py-2'>
                <h1 className='font-semibold w-32 scaliton h-5 mb-1 rounded'></h1>
                <h2 className='text-sm font-normal w-24 scaliton h-4 rounded'></h2>
            </div>
        </div>
        <p className='mt-3 text-sm px-4 scaliton h-4 mb-2 rounded'></p>
        <p className='mt-3 text-sm px-4 scaliton h-4 mb-2 rounded'></p>
        <p className='mt-3 text-sm px-4 scaliton h-4 mb-2 w-4/5 rounded'></p>
    </div>
  )
}
