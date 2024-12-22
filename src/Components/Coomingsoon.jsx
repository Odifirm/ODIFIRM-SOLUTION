import React from "react";
import logo from "../assets/logo.png";
import logo3 from "../assets/logo3.png";
import logo5 from "../assets/logo5.png";

const Coomingsoon = () => {
  return (
    <div className="px-6 bg-home w-full min-h-screen opacity-90">
      <div className="fixed pt-5">
        <img className="w-24" src={logo3} alt="logo" />
      </div>
      <div className="flex justify-start min-h-screen items-center ">
        <div className="text-start">
          <p className="text font-mono text-[15px]">
            Website is under Development.
          </p>
          <p className="text text-[60px] font-mono ">We're Cooming Soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Coomingsoon;
