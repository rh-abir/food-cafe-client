import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/Login/Register/Register";
import ChefsDetails from "../pages/ChefsSection/ChefsDetails";

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
        element: <ChefsDetails></ChefsDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/alldata/${params.id}`) 
      }

    ]
  },
]);

export default router;
