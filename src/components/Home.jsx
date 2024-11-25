import React from 'react'
import ProductList from './ProductList'
import About from "./About";
import homeImage from '../assets/homeImg.jpg';
import BestSelectionProduct from './BestSelectionProduct';
import { Link } from 'react-router-dom';




const Home = () => {
  return (
      <div id='home'>
          <div className='pt-10'>
              {/* <img src={headerImg} alt="NoHeader" className='h-[80vh] w-full ' /> */}
              <div className='xl:min-h-[100vh]  flex md:flex-row flex-col items-center  justify-between md:px-10 px-4  pt-10   bg-[#ADD8E6]'>
                  <div className='xl:ml-40 lg:ml-28 md:ml-2 flex flex-col ml-0 p-4'>
                      <p className='xl:text-3xl md:text-2xl text-2xl  my-2  font-thin'>Home decor is a</p>
                      <h4 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl  my-2 font-bold'>Soul Statement</h4>
                        <p className='text-gray-900 font-thin '>Your home is where your heart resides. Setting up your soul in your</p>
                        <p className='text-gray-900  font-thin '>home space is like creating a sanctuary for yourself,</p>
                        <p className='text-gray-900  font-thin'>outside of your body.</p>
                      <div className='mt-4'>
                      <Link to='/product' className='  bg-black  border-[1px] rounded xl:px-4 md:px-2 px-2 xl:py-2 md:py-2 py-2   border-[#333] hover:bg-slate-900 xl:text-3xl md:text-2xl text-xl   text-white font-bold'>Shoping Now</Link>
                      </div>
                  </div>
                  <div className='xl:mr-40 lg:mr-28 md:mr-10 mr-0 xl:my-0 my-4'>
                      <img src={homeImage} alt="NoImage"  className='md:w-[500px]  xl:h-full' />
                  </div>
              </div>
              <ProductList />
              <About />
              <BestSelectionProduct/>
          </div>
    </div>
  )
}

export default Home
