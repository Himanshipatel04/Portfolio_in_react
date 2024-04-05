import React from "react";
import Card from "../components/Card";
import diaphoto from "../assets/diabetes.jpg";
import roadphoto from "../assets/roadsafety.jpeg";
import sales from "../assets/sales.jpeg";
import reactphoto from "../assets/reactport.jpg";
import htmlphoto  from "../assets/Htmlport.jpg";
import todophoto  from "../assets/to-do.jpg";


const Project = () => {
  return (
    <div className="bg-black h-screen w-full flex flex-col items-center gap-10  text-white text-4xl pt-24">
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-yellow-400 text-4xl uppercase tracking-widest"
      >
        Projects
      </p>
      <div
        className="flex items-center justify-between gap-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Card
          photo={diaphoto}
          heading="Diabetes Prediction"
          text="Pandas Numpy Matplotlib Scikit-learn Seaborn"
        />
        <Card
          photo={roadphoto}
          heading="Road Accident Data Analysis"
          text="MS Excel"
        />
        <Card
          photo={sales}
          heading="Sales Analysis"
          text="PowerBI"
        />
      </div>

      <div
        className="flex items-center justify-between gap-16"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Card
          photo={reactphoto}
          heading="Portfolio Website"
          text="React"
        />
        <Card
          photo={todophoto}
          heading="To-do list"
          text="HTML,CSS,JavaScript"
        />
        <Card
          photo={htmlphoto}
          heading="Portfolio Website"
          text="HTML,CSS"
        />
      </div>
    </div>
  );
};

export default Project;
