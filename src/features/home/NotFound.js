import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const nav = useNavigate(-1);
  return (
    <div>
      <h1>Page Not Found!!!</h1>
      <button onClick={()=>{na}}>Go Back</button>
    </div>
  )};

export default NotFound;
