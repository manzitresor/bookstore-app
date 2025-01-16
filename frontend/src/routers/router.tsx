import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Root";
import Login from "../pages/login/Login";

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
      path: '/contact',
      element: <h1>Contact US PAGE</h1>
    },
  ]
}])