import React from 'react'
import { addToCart } from '../redux/CartSlice'
import chair1 from '../assets/chair1.png'
import chair2 from '../assets/chair2.png'
import chair3 from '../assets/chair3.png'
import chair4 from '../assets/chair4.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BestSelectionProduct = () => {
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.cart);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        // alert("Product has been successfully Added");
        if (addToCart(product)) {
            toast.success("Product has been added successfully", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        else {
            toast.error("Failed to submit form. Please try again.");
        }
    }
    const ProductLists = [
        { id: 1, name: "Nova Visitor Chair", price: 100, Img: chair1 },
        { id: 2, name: "Wood Rocking Chair", price: 200, Img: chair2 },
        { id: 3, name: "Alfredo Seater Sofa", price: 300, Img: chair3 },
        { id: 4, name: "Wooden Chair", price: 400, Img: chair4 },
    ];
    const navigate = useNavigate();
    const handleDetailsItem = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
    }


  return (
      <div className='bg-white sm:min-h-[50vh] sm:pt-28 pt-24 flex flex-col items-center py-10'>
          <h4 className='xl:text-5xl sm:text-4xl text-2xl font-serif sm:mb-10 mb-3'>Shop Best Our Collection</h4>
          <ToastContainer />
          <div className='flex xl:justify-between sm:justify-center justify-center flex-wrap xl:flex-nowrap xl:mx-40 sm:mx-20 mx-4'>
              {
                  ProductLists.map((product) => {
                      return <div key={product.id} className='bg-slate-200 mx-2  my-2 p-4 rounded shadow-sm'>
                          <img src={product.Img} alt="" className='sm:w-[300px]'/>
                          <h4 className='text-xl font-light text-gray-900 my-1'>{product.name}</h4>
                          <p>Price: {product.price}</p>
                          <button onClick={()=>{handleDetailsItem(product)}}  className='underline font-bold my-1 text-sky-500 hover:text-sky-800 ease-in duration-300'>View Details</button>
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
