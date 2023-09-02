'use client'
import React, { useState } from 'react'
import moment from 'moment';

export default function comment({data}) {
    const [isShow,setIsShow]=useState(false);
  return (
    <div className='my-4 px-8' key={data._id}>
        <div className='flex gap-4'>
            <img className='border-2 rounded-full' loading='lazy' src={data.user_ID.image} height={48} width={48} alt={data.user_ID.name} />
            <div>
                <h1 className='font-semibold'>{data.user_ID.name}</h1>
                <h2 className='text-sm font-normal'>{moment(data.updatedAt).startOf('minute').fromNow()}</h2>
            </div>
        </div>
        {isShow?
        <p className='mt-3 text-sm px-4'>{data.comment}</p>:
        <p className='mt-3 text-sm px-4'>{data.comment.length>450?data.comment.slice(0,450).concat(".... "):data.comment}{data.comment.length>450?<span className='hover:underline cursor-pointer'onClick={()=>{setIsShow(true)}}>see more</span>:null}</p>}
    </div>
  )
}
