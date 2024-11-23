import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import About from "./components/About";

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element:<> <Navbar/><Home /><About/></>   
        },
        {
            path: '/cart',
            element:<> <Navbar/> <Cart /></>   
        },
        {
            path: '/product',
            element:<> <Navbar/><Product/></>   
        },
    ])
  return (
    <>
      <div>
              <RouterProvider router={router} />;
      </div>
    </>
  );
};

export default App;
