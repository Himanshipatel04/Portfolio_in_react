import React from "react";

function Card(props) {
  return (
    <div className="overflow-hidden group relative shadow shadow-yellow-400 rounded-xl h-[200px] w-[300px] md:h-[280px] md:w-[450px]  cursor-pointer outline-none border-none">
      <img src={props.photo} className="h-full w-full object-cover" alt="" />
      <div className=" absolute md:-bottom-20 -bottom-50 text-center group-hover:bottom-0 bg-black rounded-md text-yellow-400 w-full flex flex-col md:gap-1 transition-all md:duration-700 duration-1000 ">
        <p className="text-xl md:text-3xl font-semibold">{props.heading}</p>
        <p className="text-lg text-white">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
