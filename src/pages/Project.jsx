import React from "react";
import Card from "../components/Card";
import diaphoto from "../assets/diabetes.jpg";
import roadphoto from "../assets/roadsafety.jpeg";
import sales from "../assets/sales.jpeg";
import reactphoto from "../assets/reactport.jpg";
import htmlphoto from "../assets/Htmlport.jpg";
import todophoto from "../assets/to-do.jpg";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="bg-black h-screen w-full flex flex-col items-center gap-6 text-white text-4xl pt-24 pl-20 pr-20">
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
        className="flex items-center justify-between gap-16"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Link to="https://portfolioinreact.vercel.app/">
          <Card photo={reactphoto} heading="Portfolio Website" text="React" />
        </Link>
        <Link to="https://github.com/Himanshipatel04/To-do-List"><Card
          photo={todophoto}
          heading="To-do list"
          text="HTML,CSS,JavaScript"
        /></Link>
        <Link to="https://himanshipatel04.github.io/Portfolio/">
          <Card photo={htmlphoto} heading="Portfolio Website" text="HTML,CSS" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
