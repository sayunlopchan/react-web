import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import About from "./features/home/About";
import Service from "./features/home/Service";
import RootLayout from "./ui/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Service", element: <Service /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
