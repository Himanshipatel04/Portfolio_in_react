import React from 'react';
import bg from "../assets/bg.jpg";
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";
import Project from "../pages/Project";
import Skills from "../pages/Skills";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import About from '../pages/About';


const Home = () => {
  return (
   <>
    <div className='h-screen w-full'>
     <img className='h-screen w-full fixed -z-20' src={bg} alt="" />
      <div className='text-white h-full w-full flex items-center justify-center flex-col gap-12'>
        <h1 className='text-5xl font-bold text-yellow-400' data-aos = "fade-up" data-aos-delay="200">Hi,I am Himanshi Patel !</h1>
        <p className='text-2xl' data-aos = "fade-up" data-aos-delay="300">I am passionate about data science and machine learning.I am working simultaneously on web development and DSA.</p>
        <div className='flex items-center gap-16' data-aos = "fade-up"  data-aos-delay="400">
            <FaGithub size={40}/>
            <FaLinkedin size={40}/>
            <FaInstagram size={40}/>
        </div>
      </div>
    </div>
        <About/>
        <Project/>
        <Skills/>
        <Achievements/>
        <Contact/>
    </>
  )
}

export default Home