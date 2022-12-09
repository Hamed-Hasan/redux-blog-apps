import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "blog/:blogId",
          element: <Blog />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  
  ]);
  
  export default routes;