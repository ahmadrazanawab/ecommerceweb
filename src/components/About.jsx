import React from 'react'
import sofaImg from '../assets/sofaImg.png';

const About = () => {
  return (
      <div className='bg-slate-50 flex flex-col items-center justify-center min-h-[80vh] w-full' >
          <h4 className='xl:text-4xl lg:text-3xl md:text-3xl text-2xl font-serif pb-10 text-gray-900'>What's Hot This Month</h4>
          <div className='flex  xl:items-center xl:flex-row flex-col sm:mx-0 mx-4'>
          <div className='flex flex-col xl:mb-0   mb-2 shadow-md bg-white px-6 py-8 mx-1 rounded'>
              <p className='font-bold my-2 text-2xl'>SALE UP TO 35% OFF</p>
              <p className='font-semibold my-2 sm:text-3xl text-2xl'>New Sofas and Chairs</p>
              <p className='my-1 sm:text-xl'>Making seating more comfortable, while preparing</p>
              <p className='my-1 sm:text-xl'>your home for the summer with our new range of</p>
              <p className='my-1 text-xl text-gray-900'>bright colors.</p>
              <button className='border-[1px] mt-2 cursor-pointer hover:bg-gray-600 border-[#333] rounded text-xl px-4 py-2'>Shop Now</button>
          </div>
          <div className='shadow-md xl:mt-0 mt-2 bg-white px-4 py-3 mx-1'>
              <img src={sofaImg} alt=""  className='h-[300px]  w-full'/>
          </div>
          </div>
    </div>
  )
}

export default About
