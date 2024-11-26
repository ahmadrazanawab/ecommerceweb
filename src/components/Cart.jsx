import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem,updateQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const { items, totalPrice} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    
    const handleRemove = (id) => {
        dispatch(removeItem(id));
        console.log(removeItem(id));
        // alert("Product has been successfully removed");
        if (removeItem(id)) {
            toast.success("Product has been removed successfully", {
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
            toast.error("Failed to remove product. Please try again.");
        }
    }
    
    const handleQuantityChange = (id,quantity) => {
        dispatch(updateQuantity({ id, quantity: parseInt(quantity, 10) || 1 }));
    }
  return (
      <div className='bg-slate-50 w-full min-h-[100vh] flex flex-col items-center'>
          <h4 className="mt-24 text-2xl font-bold text-gray-900 flex justify-center">Your Product List</h4>
         
          {items.length === 0 ? (<h4 className='mt-24  text-4xl font-semibold text-gray-900'>The cart is empty.</h4>) : (
              <div className=' flex md:justify-between justify-center mx-10 flex-wrap mt-4'>
                   <ToastContainer />
                  {
                      items.map((item) => {
                          return <div  key={item.id} className="px-4 shadow-md  bg-slate-200 rounded py-4 mx-4 my-2" style={{ width: "14rem" }}>
                                <img src={item.Img} style={{height:"10rem",width:"14rem"}} className="card-img-top" alt="..."/>
                                <div className="">
                                  <h5 className="text-xl font-light text-gray-900 my-1">{item.name}</h5>
                                  <h4 className="text-gray-900 font-semibold my-1">Price: {item.price}</h4>
                                  <label htmlFor="qnty" className='flex justify-between  font-semibold text-gray-900'>Qty 
                                      {/* <input type="number" className='px-2 outline-none rounded w-14 text-black mx-1' id='qnty' value={item.quantity} onChange={e => handleQuantityChange(item.id, e.target.value)} min="1" /> */}
                                      <select name="num" className='px-2 outline-none rounded w-14 text-black mx-1' id='qnty' value={item.quantity} onChange={e => handleQuantityChange(item.id, e.target.value)}>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option> 
                                      </select>
                                  <p className="text-gray-900 font-bold my-1">Total: ${item.totalPrice * item.quantity}</p>
                                  </label>
                                  <div className='flex justify-between'>
                                      <Link to="/order" className='mx-2 my-2 bg-sky-500 border-sky-900 border-[1px] outline-none rounded px-3 py-1 text-sm text-white font-semibold'>Buy Now</Link>
                                      <button onClick={()=>{handleRemove(item)}} className='mx-2 my-2 bg-red-500 border-red-700 border-[1px] outline-none rounded px-3 py-1 text-sm text-white font-semibold'>Remove</button>
                              </div>
                              </div>
                          </div>
                      })
                  }
              </div>
              
          )
          }
          <div className="my-4">
                {items.length === 0 ? "" : <h3 className="text-2xl font-bold">Total Amount: ${totalPrice}</h3>}
          </div>
  </div>
  )
}

export default Cart
