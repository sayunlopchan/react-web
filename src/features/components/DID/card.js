import React from "react";
import { products } from "../../dummy/data";
import { useNavigate } from "react-router";


const Home = () => {

  const nav = useNavigate();


  // crash safety
  const person = {
    address: {
      city: "bhw"
    }
  };

  console.log(person.address?.city) // checks if person obj have address obj "address?" {help prevent crash "forgive first crash"}

  const age = null;
  console.log(age ?? "hello") //if age value = null shows deafult value = "hello" 



  return (
    <div>
      <h1 className="text-2xl text-center">HOME PAGE!</h1>
      <div>

        {products.map((product) => {
          return (
            <div
              key={product.id}
              onClick={() => nav(`/product/${product.id}`)}
              className="cursor-pointer h-fit w-fit p-1 mx-auto my-5 rounded-lg shadow-gray-600 shadow-md text-center">

              <span className=" p-1 text-bold bg-gray-500 text-white rounded-lg ">Brand: {product.brand}</span>

              <img src={product.thumbnail} alt="" className="rounded-lg m-1" />

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
