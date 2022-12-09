import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import AddBlog from "../pages/DashBoard/AddBlog";
import BlogList from "../pages/DashBoard/BlogList";
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
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "bloglist",
          element: <BlogList />,
        },
        {
          path: "addblog",
          element: <AddBlog />,
        },
       
       
      ],
    },
  
  ]);
  
  export default routes;