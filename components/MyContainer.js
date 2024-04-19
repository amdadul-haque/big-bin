import React from 'react'

const MyContainer = ({ className, children }) => {
  return (
    <div className={`${className} w-full text-black-1`}>
      <div className={`${className} w-full px-4 2xl:px-0 sm:max-w-[90%] xl:max-w-screen-xl mx-auto`}>
        {children}
      </div>
    </div>
  )
}

export default MyContainer