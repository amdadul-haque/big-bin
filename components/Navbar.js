'use client'
import { Lexend } from 'next/font/google'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const lexend = Lexend({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

const Navbar = () => {
  const pathName = usePathname()
  const isContactPage = pathName === '/contact';

  const [isScrolled, setIsScrolled] = useState(false)
  const scrollHandler = () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [])

  const handleSerchClick = () => {
    alert('Search clicked')

  }

  return (
    <>

      <nav className={`w-full sticky top-0 ${isScrolled ? 'bg-black-2' : 'bg-transparent'}`}>
        <div className='h-[60px] pb-2 pt-4 w-[96%] lg:max-w-[90%] mx-auto flex justify-between items-center bg-transparent'>
          <a href="/" className='h-full'>
            <img src="./images/logo.png" alt="logo" className='h-full w-auto' />
          </a>
          <div className='flex items-start gap-3 sm:gap-5'>
            <div className='flex items-center gap-3 sm:gap-5'>
              <a href="/" className={`text-white font-bold pb-2 border-b-[5px] ${!isContactPage ? 'border-brand-1' : 'border-transparent'}`}>Home</a>
              <a href="/contact" className={`text-white  font-bold pb-2 border-b-[5px] ${isContactPage ? 'border-brand-1' : 'border-transparent'}`}>Contact</a>
            </div>
            <button className=' pt-1'
              onClick={handleSerchClick}
            >
              <img src="./icons/magnifying-glass-solid.svg" alt="search" className='h-4 w-4 sm:h-5 sm:w-5' />
            </button>
          </div>
        </div>
      </nav>

      <div className={` ${isContactPage ? 'bg-contact h-[420px] md:h-[350px] lg:h-[380px]' : 'bg-home h-[380px] md:h-[320px] lg:h-[420px] '} bg-cover bg-no-repeat bg-center bg-black-0/50`}>



        <div className={`w-full h-full flex items-center justify-center -mt-[60px] ${isContactPage && 'bg-black-0/50'}`}>
          <h1 className={`text-center text-white text-[50px] lg:text-[84px] font-bold uppercase ${lexend.className}`}>
            {isContactPage ?
              <span className='text-white'>Contact</span> : <>
                <span className='text-brand-1'>Big Bin</span> <span className=''>Services</span>
              </>
            }
          </h1>
        </div>
      </div>
      <div className='h-[10px] w-full bg-brand-1'></div>
    </>
  )
}

export default Navbar