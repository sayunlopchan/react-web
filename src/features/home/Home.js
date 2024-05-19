import React from "react";
import { product } from "../../dummy/data";

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE!</h1>
      <div>

        {product.map((product) => {
          return (
            <div key={product.id} className="cursor-pointer">
              <span>{product.brand}</span>
              <h1>{product.title}</h1>
              <span>{product.category}</span>
              <span>{product.description}</span>
              <span>{product.price}</span>
              <span>{product.rating}</span>
              <span>{product.stock}</span>
              <img src={product.thumbnail} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
