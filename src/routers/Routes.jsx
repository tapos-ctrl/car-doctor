import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/Home/About/About";

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
              path: 'about',
              element:<About></About>
            }
          ]
        },
      ])
