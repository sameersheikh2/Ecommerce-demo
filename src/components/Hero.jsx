import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-[1320px] mx-11 mt-11 relative">
      {/* overlay */}
      <div className="flex flex-col flex-wrap items-center justify-center absolute  ease w-full h-full ">
        <Link to="/products">
          <button className="tracking-wide p-2 hover:tracking-widest bg-white/40 cursor-pointer hover:scale-105  duration-100 text-6xl font-medium border-black border-[6px]">
            SHOP
          </button>
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=original&q=80"
        alt=""
        className="object-cover rounded w-full max-h-[600px]"
      />
    </div>
  );
};

export default Hero;
