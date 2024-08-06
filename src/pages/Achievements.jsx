import React from "react";
import photo1 from "../assets/cdgi.jpg";
import photo2 from "../assets/best student.jpg";
import photo3 from "../assets/sih.jpg";

const AcCard = (props) => {
  return (
    <div className="md:h-[500px] h-[450px] rounded-xl shadow-md shadow-yellow-400 w-[350px] p-5 text-center">
      <img
        src={props.photo}
        alt=""
        className="h-[250px] md:h-[300px] w-full object-cover mb-4  rounded-lg"
      />
      <p>{props.text}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="flex md:flex-col items-center justify-center w-screen md:w-full gap-16 flex-col pt-10 md:pt-28 bg-black min-h-screen text-yellow-400 text-lg">
      <p
        className="text-yellow-400 text-3xl uppercase tracking-widest"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Achievements
      </p>
      <div
        className="flex md:flex-row flex-col items-center justify-center gap-20 "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <AcCard
          text="Honored to be recognized as the top academic achiever in university, receiving the prestigious award for achieving the highest marks across all subjects."
          photo={photo2}
        />
        <AcCard
          text="Successfully propelled to the pinnacle of the Smart India Hackathon 2023, hosted at Manipal University Jaipur, alongside the team 'Code Connect', with myself as the team lead."
          photo={photo3}
        />
        <AcCard
          text="Proudly secured the runner-up position in the esteemed 'Web Granth' web development hackathon, hosted at Chameli Devi Group of Institutions, Indore."
          photo={photo1}
        />
      </div>
    </div>
  );
};

export default Achievements;
