import {
    createBrowserRouter,
   
  } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AddAClass from "../pages/Dashboard/Dashboard/Instructor/AddAClass";

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
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        } 

      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addAClass',
          element:<AddAClass></AddAClass>
        }
      ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);

  