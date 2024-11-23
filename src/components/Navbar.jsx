import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCartDownload } from "react-icons/bi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = [
        { id: 1, name: "Home", to: '/' },
        {id:2,name:"About",},
        { id: 3, name: "Product", to:'/product'},
        { id: 5, name: "Cart", to:'/cart'},
    ]
  return (
    <nav className="bg-[#ddd] shadow-md py-4  md:py-0  w-full items-center   md:flex flex justify-between">
          <h1 className="text-2xl font-bold  text-indigo-600 mb-1 mx-2">Store</h1>
          <ul className={`md:flex  flex md:flex-row flex-col py-4 md:py-2 items-center md:static absolute md:mt-0 mt-9 w-full md:bg-[#ddd] bg-[#ddd] ${open ? 'top-10 opacity-100':'top-[-490px]'} `}>
              {
                  links.map((link) => {
                      return <li className="md:mx-2 mx-0 my-4 px-2" key={link.id}>
                          <Link className="text-xl md:text-gray-700 text-gray-800 font-bold" to={link.to} onClick={()=>{setOpen(!open)}}>{link.name}</Link>
                      </li>
                  })
              }
          </ul>
      <div className="flex justify-end  w-full items-center">
              <Link to='/cart' className="flex"><BiCartDownload className="text-gray-800 cursor-pointer mx-2" size={40} />
                  <span className="text-xl  text-orange-400 z-10 font-bold flex absolute ml-6">0</span>
              </Link>
         <div onClick={()=>setOpen(!open)}>
            {!open ?<GiHamburgerMenu className="flex flex-none cursor-pointer mx-2 md:hidden" size={40}/>
            :<IoClose className="flex flex-none cursor-pointer md:hidden mx-2 " size={40} />}
           </div>
      </div>
    </nav>
  );
};

export default Navbar;
