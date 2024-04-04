import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black text-white flex-col pt-24 gap-16 px-72">
      <p className="text-yellow-400 text-3xl font-semibold tracking-widest"  data-aos = "fade-up"  data-aos-delay="200">CONTACT ME</p>
      <div className="w-full flex items-center justify-center flex-col gap-16 ">
        <div className="w-full flex items-center justify-center gap-16"  data-aos = "fade-up"  data-aos-delay="200">
          <input
            className="w-[50%] outline-none border-b-2 bg-transparent placeholder:text-yellow-400 placeholder:uppercase placeholder:tracking-widest p-2"
            type="text"
            name=""
            id=""
            placeholder="Name*"
          />
          <input
            className="w-[50%] outline-none border-b-2 bg-transparent placeholder:text-yellow-400 placeholder:uppercase placeholder:tracking-widest  p-2"
            type="Email"
            name=""
            id=""
            placeholder="Email*"
          />
        </div>
        <textarea
          className="w-full border-b-2 bg-transparent placeholder:text-yellow-400 placeholder:uppercase placeholder:tracking-widest outline-none p-2 resize-none"
          placeholder="Message*"  data-aos = "fade-up"  data-aos-delay="200"
        ></textarea>
      </div>
      <button className="p-2 w-32 rounded-lg text-black font-semibold bg-yellow-400"  data-aos = "fade-up"  data-aos-delay="200" >Send Message</button>
      <div className="flex items-center gap-28" >
        <Link  to="https://github.com/Himanshipatel04">
          <FaGithub size={40}/>
        </Link>
        <Link to="https://www.instagram.com/zuck/?hl=en">
          <FaInstagram size={40}/>
        </Link>
        <Link to="https://www.linkedin.com/in/himi04/">
          <FaLinkedin size={40} />
        </Link>
        <Link to={"mailto:himanshipatel0409@gmail.com"}>
          <IoIosMail size={40}/>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
