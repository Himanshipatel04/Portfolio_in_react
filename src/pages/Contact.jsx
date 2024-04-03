import React from 'react'
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className='bg-[#212121] h-screen w-full flex justify-center items-center flex-col gap-10 outline'>
        <h1 className='text-4xl text-yellow-400 underline'>Contact Me</h1>
      <div className='flex items-center gap-80 h-20 w-full justify-center'>
          <input className='border-none h-12 outline-none bg-transparent text-white outline-yellow-400 outline-1 rounded-lg w-56 placeholder:text-white ' type="text" placeholder='Name*' />
          <input className='border-none h-12 outline-none bg-transparent text-white outline-yellow-400 outline-1 rounded-lg w-56 placeholder:text-white' placeholder='Email*' type='Email'/>
      </div>
      <div className='flex items-center justify-center flex-col gap-10'>
           <input type="text" className="h-16 outline bg-transparent text-white outline-yellow-400 outline-1 rounded-lg w-96 placeholder:text-white p-2" placeholder='Type a message here!' name="" id="" /> 
           <button className=" rounded-lg bg-yellow-400 h-10 w-36 text-black text-lg font-semibold" >Send Message</button>
      </div>
      <div className='flex items-center gap-16'>
            <Link className='text-yellow-100' to="https://github.com/Himanshipatel04"><p><FaGithub size={40}/></p></Link>
            <Link className='text-yellow-100' to="https://www.linkedin.com/in/himi04/"><p><FaLinkedin size={40}/></p></Link>
            <Link className='text-yellow-100' to="https://www.instagram.com/zuck/?hl=en"><p><FaInstagram size={40}/></p></Link>
            <Link className='text-yellow-100' to="himanshipatel0409@gmail.com"><p><IoIosMail size={44} /></p></Link>
            
        </div>
    </div>
  )
}

export default Contact