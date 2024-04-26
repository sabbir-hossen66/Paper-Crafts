
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
import AllItem from "../Pages/AllItem/AllItem";
import Home from "../Pages/Home/Home";
import AddItem from "../Pages/AddItem/AddItem";
import MyList from "../Pages/MyList/MyList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-item",
        element: <AllItem></AllItem>,
      },
      {
        path: "/add-item",
        element: <AddItem></AddItem>,
      },
      {
        path: "/my-list",
        element: <MyList></MyList>,
      },
    ],
  },
]);