import {
    createBrowserRouter,
   
  } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        }

      ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);

  