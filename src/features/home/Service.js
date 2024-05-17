import React from "react";

const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl my-[20px]">ABOUT PAGE!!</h1>
      <div className="h-[300px] w-[75vw] border border-black ">
        <img
          className="h-full w-full"
          src="https://plus.unsplash.com/premium_vector-1682268954127-8882f9026d4b?bg=FFFFFF&w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Service page "
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

export default Service;
