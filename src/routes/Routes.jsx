import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/Login/Register/Register";
import ChefsDetails from "../pages/ChefsSection/ChefsDetails";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'singup',
        element: <Register></Register>
      },
      {
        path: '/chfesdetails/:id',
        element: <PrivateRoutes><ChefsDetails></ChefsDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://food-cafe-server-site-rh-abir.vercel.app/alldata/${params.id}`) 
      },

      {
        path: '/blog', 
        element:<Blog></Blog>
      }

    ]
  },
]);

export default router;
