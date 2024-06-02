
import ReactDOM from "react-dom/client";

import Main from './Layout/Main.jsx'
import AllTrainer from './Pages/NavPages/AllTrainers/AllTrainer.jsx'
import AllClass from './Pages/NavPages/AllClass.jsx'
import Community from './Pages/NavPages/Community.jsx'
import Login from './Pages/Authentication/Login.jsx'
import Register from './Pages/Authentication/Register.jsx'
import Home from "./Pages/Home/Home.jsx";
import DashBoard from "./Layout/DashBoard.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import "./index.css";
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TrainerDetails from "./Pages/NavPages/AllTrainers/TrainerDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>

      },
 
      {
        path: "/all-trainer",
        element: <AllTrainer />,
      },
      {
        path: "/all-class",
        element: <AllClass />,
      },
      {
        path: '/trainer-details/:id',
        element: <TrainerDetails></TrainerDetails>
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard/></PrivateRoute>
  }
]);

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById("root")).render(

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  
);
