import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    const socailLinks = [
        {
            id: 1,
            name: <FaYoutube size={40}/>,
            color: "red-500",
            link:"https://www.youtube.com/"
        },
        {
            id: 2,
            name:  <FaSquareXTwitter size={40}/>,
            color:"black",
        },
        {
            id: 3,
            name: <FaLinkedin size={40}/>,
            color: "blue-700",
            link:"https://in.linkedin.com/"
        },
        {
            id: 4,
            name: <FaGithub size={40}/>,
            color:"black",
        },
        {
            id: 5,
            name: <FaInstagramSquare size={40}/>,
            color: "red-500",
        },
        
    ]
  return (
    <div>
       <footer className="bg-slate-400 py-20 rounded-sm">
              <div className='flex justify-center'>
                  {
                      socailLinks.map((link) => {
                          return <div onClick={() => { link.link }} className={`text-${link.color} z-10 shadow-sm hover:scale-105 cursor-pointer sm:mx-4 mx-1`} key={link.id}>
                              <a  href={link.link} target="_blank" rel="noreferrer">{link.name}</a>
                          </div>
                      })
                }
            </div>
          </footer>
    </div>
  )
}

export default Footer
