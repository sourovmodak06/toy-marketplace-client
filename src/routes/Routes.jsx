import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Main from "../layout/Main";
import Home from "../components/home/home/Home";
import AllToys from "../components/allToys/AllToys";
import MyToys from "../components/myToys/MyToys";
import AddToy from "../components/addToy/AddToy";
import Blogs from "../components/blogs/Blogs";
import LogIn from "../components/logIn/LogIn";
import Register from "../components/register/Register";
import Details from "../components/allToys/Details";
import UpdateToy from "../components/myToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/addToy')
        },
        {
          path: '/allToys/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
        },
        {
          path: '/myToys',
          element: <MyToys></MyToys>
        },
        {
          path: '/updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
        },
        {
          path: "/addToy",
          element: <AddToy></AddToy>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
]);

export default router;
