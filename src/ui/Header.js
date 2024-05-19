import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-between items-center h-[46px]">
      <h1 className="text-2xl px-2">
        <NavLink>TailReact</NavLink>
      </h1>

      <nav className="text-lg space-x-3 pr-[30px] text-gray-300">
        <NavLink
          to="About"
          className={({ isActive }) =>
            isActive ? " bg-red-500 underline rounded-lg p-1" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="Service"
          className={({ isActive }) =>
            isActive ? "bg-red-500 underline rounded-lg p-1" : ""
          }
        >
          Service
        </NavLink>
        <button className="p-1 text-black text-sm rounded-xl bg-blue-300 ">Dark</button>
      </nav>
    </div>
  );
};

export default Header;
