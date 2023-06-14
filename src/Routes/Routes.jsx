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
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";
import FeedBack from "../pages/Dashboard/AllClasses/FeedBack";
import MyClasses from "../pages/Dashboard/Dashboard/Instructor/MyClasses";
import ShowFeedback from "../pages/Dashboard/Dashboard/Instructor/ShowFeedback";
import Classes from "../pages/Classes/Classes";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {path:'approveClasses',
        element:<Classes></Classes>

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
        },
        {
          path:'myClasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'mangeClasses',
          element:<AllClasses></AllClasses>
        },
        {
          path:'feedback/:id',
          element:<FeedBack></FeedBack>,
          loader:({params})=> fetch(`https://assignment-12-server-one-sepia.vercel.app/classes/${params.id}`)

        },
        {
          path:'showFeedback/:id',
          element:<ShowFeedback></ShowFeedback>,
          loader:({params}) => fetch(`https://assignment-12-server-one-sepia.vercel.app/classes/${params.id}`)
        }
      ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);

  