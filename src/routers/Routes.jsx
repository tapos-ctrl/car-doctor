import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/Home/About/About";
import Services from "../pages/Home/Services/Services";
import SignUp from "../pages/SignUp/SignUp";

  export  const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
              path: '/',
              element:<Home></Home>
            },
            {
              path: 'login',
              element:<Login></Login>
            },
            {
              path: 'signup',
              element:<SignUp></SignUp>
            },
            {
              path: 'about',
              element:<About></About>
            },
            {
              path: 'services',
              element:<Services></Services>
            }
          ]
        },
      ])
