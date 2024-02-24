import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Home } from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import News from "../pages/News";
import NotFound from "../pages/NotFound";
import NewsDetails from "../pages/NewsDetails";
import PrivateRouter from "../Private/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: (<PrivateRouter>
          <NewsDetails/>
        </PrivateRouter>),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
