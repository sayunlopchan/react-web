import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-700 text-white flex justify-between items-center h-[46px]">
      <h1 className="text-2xl px-2">
        <NavLink>TailReact</NavLink>
      </h1>

      <nav className="text-lg space-x-3 pr-[30px] text-gray-300">
        <NavLink
          to="About"
          className={({ isActive }) =>
            isActive ? " text-red-500 underline" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="Service"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : ""
          }
        >
          Service
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
