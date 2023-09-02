'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  const[button,setButton]=useState('send')
  async function submitHandel(e) {
    e.preventDefault();
    setButton('sending')
    const res=await fetch('/api/contract',{
      method:'POST',
      body:JSON.stringify({
        name:e.target.name.value,
        email:e.target.email.value,
        subject:e.target.subject.value,
        message:e.target.comment.value
      })
    });
    if(res.status===201){
      alert('massage saved')
      e.target.reset();
    }else{alert('internal error')}
    
    setButton('send');
  }

  return (
    <section className='flex items-center justify-center flex-col'>
      <h1 className='text-5xl font-bold text-white mt-12'>Contract</h1>
      <div className='w-[950px] h-[650px] my-16 aboutDiv flex justify-between'>
        <div className='flex items-center justify-center w-1/2'>
          <ul className='flex flex-col gap-6 text-white items-start justify-center'>
            <Link href='' className='flex items-center justify-center gap-2 hover:underline'><Image src='/facebook.png' width={32} height={32}/>Facebook</Link>
            <Link href='' className='flex items-center justify-center gap-2 hover:underline'><Image src='/linkedin.png' width={32} height={32}/>linked in</Link>
            <Link href='' className='flex items-center justify-center gap-2 hover:underline'><Image src='/behance.png' width={32} height={32}/>Behance</Link>
            {/* <li><Image src='/' width={32} height={32}/></li> */}
          </ul>
        </div>
        <form className='flex flex-col items-center w-1/2 gap-8 justify-center' onSubmit={submitHandel}>
          <input className='aboutForm' type="text" name="name" id="name"  placeholder='Name :' required/>
          <input className='aboutForm' type="email" name="email" id="email"  placeholder='Email Address :' required/>
          <input className='aboutForm' type="text" name="subject" id="subject"  placeholder='Subject :' required/>
          <textarea className='aboutForm' name="comment" id="comment" cols="30" rows="7" placeholder='Your message......' required></textarea>
          <button type="submit" className='aboutSend'>{button}</button>
        </form>
      </div>
    </section>
  )
}
