import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Order from "./components/Order";
import ProductDetails from "./components/ProductDetails";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import About from "./components/About";
import BestSelectionProduct from "./components/BestSelectionProduct";




const App = () => {

    const { items } = useSelector(state => state.cart);
    console.log(items.name);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <> <Navbar/><Home /></>   
        },
        {
            path: '/bestSellar',
            element: <> <Navbar/><BestSelectionProduct/></>   
        },
        {
            path: '/product',
            element: <> <Navbar/><ProductList/></>   
        },
        {
            path: '/cart',
            element: <> <Navbar /><Cart/></>   
        },
        {
            path: '/product/:id',
            element: <> <Navbar/><ProductDetails/></>   
        },
        {
            path: '/order',
            element: <> <Navbar /><Order/></>   
        },
    ])
  return (
    <>
      <div>
              <RouterProvider router={router} />
              <Footer/>
      </div>
    </>
  );
};

export default App;
