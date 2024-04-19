import React from 'react'
import MyContainer from './MyContainer'

const Footer = () => {
  return (
    <MyContainer className="bg-brand-1 py-5">
      <p className='text-center text-black-1 text-base sm:text-lg lg:text-xl'>
        Call at 
        <a href="tel:4164584324" className='font-bold hover:underline transition-all duration-300 ml-1'>(416) 458-4324 </a>
        or Email Us at
        <a href="mailto:bigbinservices@gmail.com" className='font-bold hover:underline hover:transition-all duration-1000'> bigbinservices@gmail.com</a>
      </p>
    </MyContainer>
  )
}

export default Footer