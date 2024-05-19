import React from "react";
import { useParams } from "react-router";
import { products } from "../../dummy/data";

const DetailPage = () => {
  const { id } = useParams();
  const prod = products.find((product) => product.id === Number(id)); // string id into number id
  // console.log(product)
  return (
    <div className="cursor-pointer h-fit w-fit p-1 mx-auto my-5 rounded-lg shadow-gray-600 shadow-md relative">
      <div className="flex flex-wrap justify-center max-lg:gap-3 max-lg:w-[350px]">
        <img src={prod.images[3]} alt="" className="rounded-lg m-1" />

        <div className="space-y-5">
          <div className="text-center">
            <span className=" p-1 text-bold bg-gray-500 text-white rounded-lg">
              {prod.brand}
            </span>
          </div>

          <div className="space-x-2">
            <span className="p-2 text-bold bg-green-500 text-white rounded-lg">
              Price: ${prod.price}
            </span>
            <span className="p-2 text-bold bg-blue-500 text-white rounded-lg">
              Discount: {prod.discountPercentage}%
            </span>
          </div>

          <div className="w-[300px]">
            <h1>Description: </h1>
            <p>{prod.description}</p>
          </div>

          <div className="space-x-2">
            <span className="p-1 text-bold bg-gray-500 text-white rounded-lg">
              Rating: {prod.rating}
            </span>
            <span className="p-1 text-bold bg-red-500 text-white rounded-lg">
              Stock: {prod.stock}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
