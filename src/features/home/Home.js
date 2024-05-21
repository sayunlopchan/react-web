import { useFormik } from "formik";
import React, { useState } from "react";

const Home = () => {
  const [posts, setPost] = useState([]);

  const formik = useFormik({
    initialValues: {
      post: "add todo list",
    },
    onSubmit: (e, { resetForm }) => {
      setPost((prev) => [...prev, e.post]);
      resetForm(); //reset form every submit
    },
  });

  // delete post using slice
  const handleDelete = (i) => {
    const updatedPost = [...posts.slice(0, i), ...posts.slice(i + 1)];
    setPost(updatedPost);
  };

  return (
    <div className="m-4">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Add info</label>
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            type="text"
            placeholder="post add"
            name="post"
            value={formik.values.post} // initial value
            className="bg-gray-300"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* maping post */}
      {posts.map((post, i) => {
        return (
          <div key={i}>
            <div className="flex gap-2 p-1">
              <div>
                <p className="bg-gray-300 p-1">{post}</p>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(i)}
                  className="p-1 bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
