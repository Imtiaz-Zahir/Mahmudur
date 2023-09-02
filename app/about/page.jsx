import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <section className='mx-auto px-28 max-w-[1440px] text-white'>
      <h1 className='text-5xl font-bold text-center mt-12'>About</h1>
      <div className='flex py-16'>
        <h2 className='text-6xl font-bold'>Hi,</h2>
        <p className='text-2xl pt-8 px-8 text-justify'><strong>This is dolor</strong> sit amet consectetur. Tincidunt enim congue adipiscing eleifend pellentesque venenatis neque ullamcorper. Vel tristique adipiscing sit cursus ipsum amet mattis sit. Suspendisse urna mi dictumst enim facilisi tellus consectetur. Nunc egestas tellus nisl sed tortor at pretium. Vel ultrices etiam facilisis faucibus orci id mi in massa. Fermentum egestas netus tincidunt a nibh in pharetra lectus felis. Mattis maecenas dapibus et porttitor donec a blandit ullamcorper. Nulla felis tempus nulla mauris neque. Amet vitae nibh et amet sit nec. In vel in est turpis habitant. Feugiat massa sem gravida nunc sed blandit nam ac habitant. Tortor rhoncus vulputate amet velit elit pellentesque urna. Duis faucibus malesuada justo faucibus egestas nibh. Phasellus urna arcu nunc vestibulum blandit et sed. Nec vitae orci volutpat donec quam dictum. Nec consectetur morbi scelerisque urna velit et habitasse condimentum. Dapibus in vitae sit faucibus. Imperdiet integer sed volutpat quis ac interdum in et eleifend. Vitae nulla ac sed tellus bibendum faucibus accumsan adipiscing ullamcorper.</p>
        <Image className='rounded-full h-64 w-64 mt-8' height={246} width={246}  src="/Nurani.png" alt="Nurani" />
      </div>
    </section>
  )
}
