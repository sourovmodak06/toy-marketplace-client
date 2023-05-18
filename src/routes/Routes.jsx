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
          element: <AllToys></AllToys>
        },
        {
          path: '/myToys',
          element: <MyToys></MyToys>
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
