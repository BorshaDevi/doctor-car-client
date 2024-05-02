import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Home/Blogs";
import Services from "../Pages/Home/Services";
import About from "../Pages/Home/About";
import Error from "../Pages/Home/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blogs></Blogs>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);
  export default router;