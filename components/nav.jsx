'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProviders, signIn, signOut } from "next-auth/react"

export default function nav({user}) {
    const[provider,setProvider]=useState(false);
  
    useEffect(()=>{
      async function setUpProvider(){
        const providers = Object.values(await getProviders())[0];
        setProvider(providers);
      }
      setUpProvider();
    },[])

    function scrollDown(e) {
      document.getElementById(e.target.innerText).scrollIntoView()
    }

  return (
    <nav className='h-[60px] flex justify-between items-center mx-auto px-28 max-w-[1440px] text-white'>
        <Image src="/RADIANTGRAFX.svg" alt="RADIANTGRAFX" width={174} height={29} />
        <ul className='flex gap-14'>
          <Link href="/">Home</Link>
          <li className='cursor-pointer' onClick={scrollDown}>UI/UX</li>
          <li className='cursor-pointer' onClick={scrollDown}>Design</li>
          <Link href="/about">About</Link>
          <Link href="">career</Link>
        </ul>
        <div className='flex gap-9 items-center'>
          <Link className='contact' href="./contract">Contact</Link>
          {user?
          <button className='font-medium text-[#7177FF] cursor-pointer' onClick={signOut}>Sign out</button>
          :<button className={`font-medium text-[#7177FF] ${provider?'cursor-pointer':"cursor-not-allowed"}`} onClick={()=>signIn(provider?.id)}>Sign in</button>}
        </div>
    </nav>
  )
}
