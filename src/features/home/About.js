import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl my-[20px]">ABOUT PAGE!!</h1>
      <div className="h-[300px] w-[75vw] border border-black ">
        <img
          className="h-full w-full"
          src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about page "
        />
      </div>
      <div className="border border-black w-[90vw] mt-[30px] p-2">
        <h2>More details</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          laborum expedita recusandae voluptatem voluptate maxime voluptates
          fuga, impedit repellat corrupti iure explicabo omnis excepturi.
          Voluptates, itaque! Libero nihil praesentium est.
        </p>
      </div>
    </div>
  );
};

export default About;
