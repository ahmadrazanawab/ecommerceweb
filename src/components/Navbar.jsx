import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCartDownload } from "react-icons/bi";
import { useSelector } from "react-redux";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const links = [
        { id: 1, name: "Home", to: '/' },
        { id: 2, name: "Best Offer", to: '/bestSellar' },
        { id: 3, name: "Product",to:'/product'},
    ]
  return (
    <nav className="bg-[#ddd] fixed shadow-md py-4  md:py-0  w-full items-center   md:flex flex justify-between">
          <Link to="/" className="text-2xl font-bold  text-gray-900 mb-1 mx-4">Shop</Link>
          <ul className={`md:flex  flex md:flex-row flex-col py-4 md:py-2 items-center md:static absolute md:mt-0 mt-9 w-full md:bg-[#ddd] bg-[#ddd] ${open ? 'top-9 opacity-100':'top-[-490px]'} `}>
              {
                  links.map((link) => {
                      return <li className="md:mx-2 mx-0 my-4 px-2" key={link.id}>
                          <Link className="text-xl md:text-gray-700 text-gray-800 hover:text-slate-400 font-bold ease-in duration-300 outline-none" to={link.to} onClick={()=>{setOpen(!open)}}>{link.name}</Link>
                      </li>
                  })
              }
          </ul>
      <div className="flex justify-end  w-full items-center">
              <Link to='/cart' className="flex"><BiCartDownload className="text-slate-900 cursor-pointer mx-2" size={40} />
                  <span className="text-xl  text-red-500 z-10 font-bold flex absolute ml-6">{totalQuantity}</span>
              </Link>
         <div onClick={()=>setOpen(!open)}>
            {!open ?<GiHamburgerMenu className="flex flex-none cursor-pointer mx-2 md:hidden" size={40}/>
            :<IoClose className="flex flex-none cursor-pointer md:hidden mx-2 " size={40} />}
           </div>
      </div>
    </nav>
  )
}

export default Navbar
