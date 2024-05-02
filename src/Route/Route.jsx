import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Home/Blogs";
import Services from "../Pages/Home/Services";
import About from "../Pages/Home/About";
import Error from "../Pages/Home/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blogs></Blogs>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/about',
            element:<About></About>
        },
      ]
    },
  ]);
  export default router;