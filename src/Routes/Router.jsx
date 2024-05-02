
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import AddItem from "../Pages/AddItem/AddItem";
import MyList from "../Pages/MyList/MyList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import SingleCratDetails from "../Components/SingleCratDetails/SingleCratDetails";
import PrivetRoute from "./PrivetRoute";
import AllItems from "../Components/AllItems/AllItems";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/papers')
      },
      {
        path: "/craft-details/:id",
        element: <PrivetRoute><SingleCratDetails></SingleCratDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/paper/${params.id}`)
      },
      // {
      //   path: "/all-item",
      //   element: <AllItem></AllItem>,
      // },
      {
        path: "/add-item",
        element: <PrivetRoute><AddItem></AddItem></PrivetRoute>,
      },
      {
        path: "/my-list",
        element: <PrivetRoute><MyList></MyList></PrivetRoute>,


      },
      {
        path: "/update/:id",
        element: <PrivetRoute><UpdatePage></UpdatePage></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/paper/${params.id}`)


      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-items",
        element: <AllItems></AllItems>,
        loader: () => fetch('http://localhost:5000/papers')

      },
    ],
  },
]);