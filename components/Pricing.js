import React from 'react'
import MyContainer from './MyContainer'

const Pricing = () => {
  const pricing = [
    {
      img: './images/15.png',
      title: '15 Yard Bin',
      details: [
        { key: 'Drop off:', value: '$180' },
        { key: 'Pick up:', value: '$100' },
        { key: 'Waste:', value: '$110/ metric ton' }
      ],
      plus: "+ energy/fuel surcharge"
    },
    {
      img: './images/30.png',
      title: '30 Yard Bin',
      details: [
        { key: 'Drop off:', value: '$250' },
        { key: 'Pick up:', value: '$100' },
        { key: 'Waste:', value: '$110/ metric ton' }
      ],
      plus: "+ energy/fuel surcharge"
    },
    {
      img: './images/40.png',
      title: '40 Yard Bin',
      details: [
        { key: 'Drop off:', value: '$250' },
        { key: 'Pick up:', value: '$100' },
        { key: 'Waste:', value: '$110/ metric ton' }
      ],
      plus: "+ energy/fuel surcharge"
    },
  ]
  return (
    <MyContainer className="bg-offWhite-1 py-5">
      <div className='w-full flex flex-col gap-10'>
        <div className='py-3 bg-white'>
          <h2 className='font-[100] text-center text-[50px]'>Bins and Pricing</h2>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          {pricing.map((item, index) => (
            <div key={index} className='bg-white p-5 text-center'>
              <img src={item.img} alt={item.title} className='w-full mx-auto' />
              <h3 className='text-[40px]'>{item.title}</h3>
              <div className='text-[18px]'>
                {item.details.map((detail, index) => (
                  <p key={index} className='flex justify-center gap-4 my-2'>{detail.key} <span>{detail.value}</span></p>
                ))}
              </div>
              <p className='text-[18px]'>{item.plus}</p>
            </div>
          ))

          }
        </div>
        <div className='py-3 bg-white p-3 text-[18px]'>
          <p>Note:</p>
          <p className='my-4'>Big Bin Services Inc. is not responsible for any damages and it is the customers responsibility to prepare site for the bin to be safely placed. </p>
          <p>Bins can remain on site for up to 7 days, afterwards $20 per day will be charged.</p>
        </div>
      </div>
    </MyContainer>
  )
}

export default Pricing