import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center h-[46px]">
      <h1 className="text-2xl">
        <NavLink>TailWind</NavLink>
      </h1>
      <nav className="space-x-3 pr-2 text-gray-300" >
        <NavLink to='About'>About</NavLink>
        <NavLink to='Service'>Service</NavLink>
      </nav>
    </div>
  )
};

export default Header;
