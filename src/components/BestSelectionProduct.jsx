import React from 'react'
import { addToCart } from '../redux/CartSlice'
import chair1 from '../assets/chair1.png'
import chair2 from '../assets/chair2.png'
import chair3 from '../assets/chair3.png'
import chair4 from '../assets/chair4.png'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const BestSelectionProduct = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        alert("Product has been successfully Added");
    }
    const ProductLists = [
        { id: 1, name: "Nova Visitor Chair", price: 100,Img:chair1 },
        { id: 2, name: "Wood Rocking Chair", price: 200,Img:chair2 },
        { id: 3, name: "Alfredo Seater Sofa", price: 300,Img:chair3 },
        { id: 4, name: "Wooden Chair", price: 400,Img:chair4 },
    ]
  return (
      <div className='bg-white sm:min-h-[50vh] sm:pt-28 pt-10 flex flex-col items-center py-10'>
          <h4 className='xl:text-5xl sm:text-4xl text-2xl font-serif sm:mb-10 mb-3'>Shop Best Our Collection</h4>
          <div className='flex xl:justify-between sm:justify-center justify-center flex-wrap xl:flex-nowrap xl:mx-40 sm:mx-20 mx-4'>
              {
                  ProductLists.map((product) => {
                      return <div key={product.id} className='bg-slate-200 mx-2  my-2 p-4 rounded shadow-sm'>
                          <img src={product.Img} alt="" className='sm:w-[300px]'/>
                          <h4 className='text-xl font-light text-gray-900 my-1'>{product.name}</h4>
                          <p>Price: {product.price}</p>
                          <p>View Details</p>
                          <div className='flex justify-between'>
                              <button onClick={()=>{handleAddToCart(product)}} className='bg-sky-500 border-[1px] text-white font-semibold my-1 border-sky-800 px-2 py-1 rounded'>AddToCart</button>
                              <Link to='/order' className='bg-sky-500 border-[1px] text-white font-semibold my-1 border-sky-800 px-2 py-1 rounded'>Buy Now</Link>
                          </div>
                      </div>
                  })
              }
         </div>
    </div>
  )
}

export default BestSelectionProduct