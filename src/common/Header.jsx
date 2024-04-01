import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center gap-5 pt-3 pl-14 pr-28 fixed w-full">
      <div>
        <Link to={"/"}>
          <p className=" text-[#d353b9] font-bold text-5xl autumn">
            Himanshi<span className="text-red-200">.</span>
          </p>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-20 text-lg Aclonica text-pink-500">
        <Link className="hover:text-pink-300 duration-300" to={"/"}>
          <p>Home</p>
        </Link>
        <Link className="hover:text-pink-300 duration-300" to={"/about"}>
          <p>About Me</p>
        </Link>
        <Link className="hover:text-pink-300 duration-300" to={"/project"}>
          <p>Projects</p>
        </Link>
        <Link className="hover:text-pink-300 duration-300" to={"/skills"}>
          <p>Skills</p>
        </Link>
        <Link className="hover:text-pink-300 duration-300" to={"/achievements"}>
          <p>Achievements</p>
        </Link>
        <Link className="hover:text-pink-300 duration-300" to={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
