import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Root";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

export const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      index: true,
      element: <Root/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
  ]
}])