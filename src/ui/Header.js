import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center h-[60px] font-mono w-full fixed z-10">
      <h1 className="text-2xl pl-3">TailWind</h1>
      <nav className="space-x-3 pr-2 text-gray-300">
        <button className="hover:text-white">About</button>
        <button className="hover:text-white">Contact</button>
      </nav>
    </div>
  );
};

export default Header;
