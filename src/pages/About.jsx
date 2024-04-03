import React from "react";
import photo from "../assets/photo.jpg";

const About = () => {
  return (
    <div className="bg-[#212121] h-screen w-full flex justify-center items-center flex-col gap-14">
      <h1 className="text-yellow-400 text-4xl underline">About Me</h1>
      <div className="flex justify-between items-center gap-10 text-white">
        <div>
          <img
            className="h-96 shadow-md rounded-lg shadow-pink-500"
            src={photo}
            alt=""
          />
        </div>
        <div className="h-96 w-96 flex justify-center items-start gap-10 flex-col">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Hi,I am Himanshi Patel !</h1>
            <p className="text-2xl  text-yellow-400">Web Developer</p>
            <p>Combining frontend expertise with a passion for data science.</p>
          </div>
          <div className="flex flex-col items-center gap-9">
            <ul className="flex flex-col gap-6 ">
              <li>Date of Birth :&nbsp;&nbsp;&nbsp;&nbsp;04-11-2004</li>
              <li>
                Education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;B.Tech.(CSE)
              </li>
              <li>
                Gmail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                himanshipatel0409@gmail.com
              </li>
            </ul>
            <button className="bg-yellow-300 h-8 w-32 rounded-2xl text-red-800 font-bold">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
