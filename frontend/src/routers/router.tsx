import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Root";

export const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      index: true,
      element: <Root/>
    },
    {
      path: '/about',
      element: <h1>ABOUT US PAGE</h1>
    },
    {
      path: '/contact',
      element: <h1>Contact US PAGE</h1>
    },
  ]
}])