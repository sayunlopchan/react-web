import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate(-1);
  return (
    <div>
      <h1>Page Not Found!!!</h1>
      <button
        onClick={() => {
          nav
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
