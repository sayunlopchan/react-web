import { useFormik } from "formik";
import React from "react";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      post: ""
    },
    onSubmit: (e)=>{
      console.log(e)
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Add info</label>
        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="post add"
          name="post"
          className="bg-gray-300"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
