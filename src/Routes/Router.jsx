
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/home",
        element: <div>hello homemama</div>,
      },
      {
        path: "/about",
        element: <div>hello about</div>,
      },
    ],
  },
]);