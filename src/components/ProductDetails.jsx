import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productDetails } from "../redux/CartSlice";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import chair from '../assets/chair1.png';



const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(products))
        if (addToCart(products)) {
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
    
    // const { totalPrice, items } = useSelector(state => state.cart);
    // console.log(items);
    const products = { id, name: `Nova Visitor Chair ${id}`, price: id * 100,img:chair };
    // const product = { id, name: `Product ${id}`, price: id * 100 };


    return (
      <div className="">
            <div className="bg-slate-50 mx-4 pt-28 flex flex-col min-h-[80vh]  p-4">
            <ToastContainer />
                <h4 className="md:text-4xl text-2xl font-serif text-gray-900 text-center">Product Details</h4>
                <div className="flex md:flex-row flex-col md:justify-between justify-center items-center min-h-[20vh] my-8 px-6 py-3 rounded shadow-sm   bg-[#ddd]">
            <div className="md:min-w-[300px]">
                    <img className="xl:h-[350px] md:[400px] xl:w-[600px] md:w-[400px]" src={products.img} alt="" />   
            </div>
            <div className=" flex flex-col md:items-start items-center md:text-start text-center">
                    <h1 className="text-2xl my-2 mx-5  text-gray-900 font-semibold">{products.name}</h1>
                    <p className="text-xl my-2 mx-5 text-gray-900 font-semibold">Price: ${products.price}</p>
                    <p className="font-extralight  text-black mx-5 my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laudantium consequuntur quae enim ipsam eius. Expedita, exercitationem rem officia debitis non recusandae.</p>
                    <div className="flex justify-start">
                    <button onClick={handleAddToCart} className="text-xl md:mx-5 mb-4 md:w-[300px] bg-sky-500 border-[1px] border-sky-700 outline-none px-2 py-1 rounded text-slate-200 font-semibold">
                    Add to Cart
                </button>
                </div>
            </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
