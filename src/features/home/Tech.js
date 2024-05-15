import React from "react";
import {
  DiAtom,
  DiCodepen,
  DiCss3Full,
  DiPython,
  DiReact,
  DiSwift,
} from "react-icons/di";

const Tech = () => {
  return (
    <div className="grid grid-cols-3 place-items-center">
      <DiReact
        size={200}
        className="hover:scale-110 hover:text-pink-700 transition-all ease-in"
      />
      <DiPython
        size={200}
        className="hover:scale-110 hover:text-yellow-500 transition-all ease-in"
      />
      <DiCss3Full
        size={200}
        className="hover:scale-110 hover:text-blue-500 transition-all ease-in"
      />
      <DiSwift
        size={200}
        className="hover:scale-110 hover:text-orange-500 transition-all ease-in"
      />
      <DiAtom
        size={200}
        className="hover:scale-110 hover:text-green-500 transition-all ease-in"
      />
      <DiCodepen
        size={200}
        className="hover:scale-110 hover:text-gray-500 transition-all ease-in"
      />
    </div>
  );
};

export default Tech;
