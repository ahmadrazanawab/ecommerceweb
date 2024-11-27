import React from 'react'
import Product from './Product';
import chair1 from '../assets/chair1.png'
import chair2 from '../assets/chair2.png'
import chair3 from '../assets/chair3.png'
import chair4 from '../assets/chair4.png'
import chair5 from '../assets/chair5.png'
import chair6 from '../assets/chair6.png'
import chair7 from '../assets/chair7.png'
import chair8 from '../assets/chair8.png'
import sofa2 from '../assets/sofa2.png'
import sofa3 from '../assets/sofa3.png'
import { ToastContainer, toast } from 'react-toastify';



const ProductList = () => {
    const products = [
        { id: 1, name: "Nova Visitor Chair", price: 1700,Img:chair1 },
        { id: 2, name: "Wood Rocking Chair", price: 600,Img:chair2 },
        { id: 3, name: "Alfredo Seater Sofa", price: 1100,Img:chair3 },
        { id: 4, name: "Wooden Chair", price: 600,Img:chair4 },
        { id: 5, name: "Barrel Chair", price: 500, Img:chair5 },
        { id: 6, name: "Executive Chair", price: 1000,Img:chair6 },
        { id: 7, name: "Seater Sofa", price: 2100,Img:chair7 },
        { id: 8, name: "Palco Armchair", price: 1300,Img:chair8 },
        { id: 9, name: "Sofa", price: 1400,Img:sofa2 },
        { id: 10, name: "Sofa Chair", price: 1500, Img: sofa3 },
        
        
    ]
    return (
        <div className='pt-28 pb-2  bg-slate-50' >
        <h4 className="text-4xl flex justify-center bg-slate-[#ddd]  font-serif text-black underline">All Products</h4>
            <div className='flex w-full justify-center flex-wrap bg-slate-50 '>
            <ToastContainer />
          {
              products.map((product) => {
                  return <div key={product.id} className=''><Product product={product}  /></div>
              })
          }
            </div>
      </div>
  )
}

export default ProductList
