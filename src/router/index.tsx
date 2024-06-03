import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import HomePage from "../pages/home";
import Work from "../pages/work";
import Blog from "../pages/blog";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/work/:id",
    element: <Work />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
].map((itm) => {
  return {
    ...itm,
    element: <Layout>{itm.element}</Layout>,
  };
});

export const router = createBrowserRouter([...routes]);
