import React from 'react' 
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product}) => {
    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        // alert("Product has been successfully Added");
        if (addToCart(product)) {
            toast.success("Product has been successfully Added", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        else {
            toast.error("Failed to submit form. Please try again.");
        }
    }
  return (
    <div   className='flex justify-center'>
          <div className="bg-slate-200  p-4 mt-10 mb-4 mx-2 flex flex-col rounded  items-center" style={{ width: "14rem" }}>
            <img src={product.Img}  className="h-[10rem] w-[]14rem" alt="..."/>
            <div className="card-body">
                  <h5 className="text-xl font-light text-gray-900 my-1">{product.name}</h5>
                  <h4 className="card-text">Price: {product.price}</h4>
                  <Link to={`/product/${product.id}`} product={product.name} className='underline font-bold my-1 text-sky-500 hover:text-sky-800 ease-in duration-300'>Veiv Details</Link>
                  <div className="flex justify-between">
                        <button onClick={handleAddToCart} className='my-2 bg-sky-600 text-white border-[1px] border-sky-950 rounded outline-none mx-1 px-2 py-1'>AddtoCart</button>
                        <Link to='/order'  className='my-2 bg-sky-600 text-white border-[1px] border-sky-950 rounded outline-none mx-1 px-2 py-1'>Buy Now</Link>
                  </div>

         </div>
        </div>
    </div>
  )
}

export default Product
