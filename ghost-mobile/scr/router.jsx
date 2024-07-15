import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Login from "./views/Login.jsx";
import NotFound from "./views/NotFound.jsx";
import Signup from "./views/Signup.jsx";
import Home from "./views/Home.jsx";
import Default from "./views/default.jsx";
import UserForm from "./views/UserForm.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/',
        element: <Default/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home"/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/home/about',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/home/:id',
        element: <UserForm key="userUpdate" />
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  },
  
  
  
])

export default router;
