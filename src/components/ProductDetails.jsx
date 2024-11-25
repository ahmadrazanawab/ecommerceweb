import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import ProductList from "./ProductList";



const ProductDetails = () => {
  const { id } = useParams();
    const dispatch = useDispatch();
    const { totalPrice,name } = useSelector(state => state.cart);
    console.log(totalPrice);
    // console.log(name);
    // const product = { id, name: `Product ${id}`, price: id * 100 };
    const product = { id, name: `Product ${id}`, price: id * 100 };

    return (
      <div className="">
        <div className="bg-slate-50 pt-20 flex flex-col min-h-[100vh] justify-center  p-4">
            <div className="flex flex-col  my-8 px-6 py-3 rounded shadow-sm   bg-slate-300">
            <h1 className="text-2xl text-gray-900 font-semibold">{product.name}</h1>
            <p className="text-xl text-gray-900 font-semibold">Price: ${product.price}</p>
            <div className="flex">
                <button className="text-xl bg-sky-500 border-[1px] border-sky-700 outline-none px-2 py-1 rounded text-slate-200 font-semibold" onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                </button>
            </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
