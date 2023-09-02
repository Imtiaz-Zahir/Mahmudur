import React from 'react'
import Tiltcom from './Tiltcom'
import MiniWindow from './miniWindow'
import { connectToDB } from '@/database';
import OtherDesign from '@/models/otherDesign';

export default async function other() {
  await connectToDB();
  const data = await OtherDesign.find({});
  return (
    <section id='Design' className='flex flex-col items-center py-28 gap-28 mx-auto px-28 max-w-[1440px] text-white'>
        <Tiltcom className='button text-5xl font-medium text-center' title={<>Other<br/>Design</>}/>
        <div className='flex justify-between flex-wrap gap-y-28 w-full'>
          {data.map((item)=>{return(<MiniWindow data={item}/>)})}
        </div>
    </section>
  )
}
