import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  // axios npm: npm i axios

  const [data, setData] = useState([]);

  // then catch
  const getData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData = res.data.products;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const thenCatch = () => {
    axios
      .get("url")
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  // async await
  const tryCatch = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data?.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    tryCatch();
  }, []);

  return (
    <div>
      {data.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
