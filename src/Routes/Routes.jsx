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
import MySelectedClasses from "../pages/Dashboard/Dashboard/Student/MySelectedClasses";
import Instructors from "../pages/Instructors/Instructors";
import Payment from "../pages/Dashboard/Dashboard/Payment/Payment";
import MyEnrolledClasses from "../pages/Dashboard/Dashboard/Payment/MyEnrolledClasses/MyEnrolledClasses";


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
        path: 'allInstructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'approveClasses',
        element: <Classes></Classes>

      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },

      {
        path: 'addAClass',
        element: <AddAClass></AddAClass>
      },
      {
        path: 'myClasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'mangeClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: 'feedback/:id',
        element: <FeedBack></FeedBack>,
        loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)

      },
      {
        path: 'showFeedback/:id',
        element: <ShowFeedback></ShowFeedback>,
        loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
      }, {
        path: 'mySelectedClasses',
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: 'payment/:id',
        element:<Payment></Payment>,
        loader:({params}) => fetch(`http://localhost:5000/selectedClass/${params.id}`)
       },
       {
        path: 'enrolledClasses',
        element:<MyEnrolledClasses></MyEnrolledClasses>
       }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

