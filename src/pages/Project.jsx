import React from "react";
import Card from "../components/Card";
import diaphoto from "../assets/diabetes.jpg";
import roadphoto from "../assets/roadsafety.jpeg";
import sales from "../assets/sales.jpeg";
import gofood from "../assets/go-food.png";
import bloghive from "../assets/image.png";
import learnify from "../assets/learnify.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="bg-black h-fit md:h-screen w-screen md:w-full flex flex-col items-center gap-10 text-white text-4xl pt-6 md:pt-24 pl-20 pr-20">
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-yellow-400 text-4xl uppercase tracking-widest"
      >
        Projects
      </p>
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Link to="https://github.com/Himanshipatel04/Notebook/blob/main/Diabetes_project.ipynb">
          <Card
            photo={diaphoto}
            heading="Diabetes Prediction"
            text="Pandas Numpy Matplotlib Scikit-learn Seaborn"
          />
        </Link>
        <Link to="https://github.com/Himanshipatel04/Road_safety_analysis">
          <Card
            photo={roadphoto}
            heading="Road Accident Data Analysis"
            text="MS Excel"
          />
        </Link>
        <Link to="#">
          <Card photo={sales} heading="Sales Analysis" text="PowerBI" />
        </Link>
      </div>

      <div
        className=" mb-10 md:mb-0 flex flex-col md:flex-row items-center justify-between gap-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Link to="https://github.com/Himanshipatel04/goFood-f.git">
          <Card photo={gofood} heading="GoFood" text="MERN" />
        </Link>
        <Link to="https://github.com/Himanshipatel04/learn-ify.git"><Card
          photo={learnify}
          heading="Learnify"
          text="React,Firebase"
        /></Link>
        <Link to="https://bloghive-lovat.vercel.app/">
          <Card photo={bloghive} heading="BlogHive" text="MERN" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
