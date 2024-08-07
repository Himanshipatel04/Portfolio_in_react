import React from "react";
import photo from "../assets/photo.jpg";
import resumePDF from "../assets/resume.pdf";

const About = () => {
  const onButtonClick = () => {
    const pdfURL = resumePDF;
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Himanshi_resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" bg-black md:h-screen w-screen md:w-full flex justify-center items-center pt-10 md:pt-2 flex-col gap-8 md:gap-14 ">
      <h1
        className="text-yellow-400  md:mt-0 text-3xl md:text-4xl uppercase tracking-widest"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        About Me
      </h1>
      <div
        className=" flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-10 text-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <img
            className="h-96 shadow-md outline-none border-none rounded-md shadow-yellow-400"
            src={photo}
            alt=""
          />
        </div>
        <div className="p-10 md:p-0 h-fit md:h-96 w-96 flex justify-center items-start gap-10 flex-col">
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
            <button
              onClick={onButtonClick}
              className="bg-yellow-300 h-8 w-32 rounded-2xl text-red-800 font-bold"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
