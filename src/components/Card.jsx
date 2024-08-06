import React from "react";

function Card(props) {
  return (
    <div className="overflow-hidden group relative shadow shadow-yellow-400 rounded-xl h-[200px] w-[300px] md:h-[280px] md:w-[450px]  cursor-pointer outline-none border-none">
      <img src={props.photo} className="h-full w-full object-cover" />
      <div className=" absolute md:-bottom-20 -bottom-50 text-center group-hover:bottom-0 bg-slate-600 rounded-md text-yellow-400 px-2 w-full flex flex-col gap-1 md:gap-2 transition-all md:duration-500 duration-1000 ">
        <p className="text-xl md:text-3xl font-bold">{props.heading}</p>
        <p className="text-xl text-black font-semibold">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
