import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import About from "./features/home/About";
import Service from "./features/home/Service";
import RootLayout from "./ui/RootLayout";
import NotFound from "./ui/NotFound";
// import DetailPage from "./features/home/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "product/:id", element: <DetailPage /> },//path:params
      { path: "About", element: <About /> },
      { path: "Service", element: <Service /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {

  return <RouterProvider router={router} />;

};

export default App;
