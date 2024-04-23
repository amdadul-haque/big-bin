import React from 'react'
import MyContainer from './MyContainer'

const Hero = () => {
  return (
    <div className={`h-[500px] md:h-[400px] lg:h-[300px] flex items-center justify-center bg-black-0/10 bg-bg-home bg-cover bg-no-repeat bg-center`}>
      <div className='w-full h-full flex items-center justify-center'>
        <h1 className='text-center text-white text-[50px] font-bold'>
          <span className='text-brand-1'>Big Bin</span>
          <span className=''>Services</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero