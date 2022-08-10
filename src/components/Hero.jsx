import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1320px] mx-11 mt-11 relative">
      {/* overlay */}
      <div className="flex flex-col flex-wrap items-center justify-center absolute  ease w-full h-full ">
        <Link to="/products">
          <button className="tracking-wide p-2 hover:tracking-widest bg-[#E9EEf2] cursor-pointer hover:scale-105  duration-100 text-6xl font-medium border-gray-200  border-[6px]">
            SHOP
          </button>
        </Link>
      </div>
      <img
        src={hero}
        alt=""
        className="object-cover rounded w-full max-h-[600px]"
      />
    </div>
  );
};

export default Hero;
