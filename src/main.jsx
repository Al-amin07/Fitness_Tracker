import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import Main from "./Layout/Main.jsx";
import AllTrainer from "./Pages/NavPages/AllTrainers/AllTrainer.jsx";
import AllClass from "./Pages/NavPages/AllClass/AllClass.jsx";
import Community from "./Pages/NavPages/Community.jsx";
import Login from "./Pages/Authentication/Login.jsx";
import Register from "./Pages/Authentication/Register.jsx";
import Home from "./Pages/Home/Home.jsx";
import DashBoard from "./Layout/DashBoard.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TrainerDetails from "./Pages/NavPages/AllTrainers/TrainerDetails.jsx";
import BeTrainer from "./Pages/NavPages/AllTrainers/BeTrainer.jsx";
import AllNewsLetter from "./DashBoard/Admin/AdminPage/AllNewsLetter.jsx";
import AllTrainerss from "./DashBoard/Admin/AdminPage/AllTrainerss.jsx";
import AppliedTrainer from "./DashBoard/Admin/AdminPage/AppliedTrainer.jsx";
import AddNewClass from "./DashBoard/Admin/AdminPage/AddNewClass.jsx";
import TrainerBooking from "./Pages/NavPages/AllTrainers/TrainerBooking.jsx";
import Payment from "./Pages/NavPages/AllTrainers/Payment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/trainer-details/:id",
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: "/be-trainer",
        element: (
          <PrivateRoute>
            <BeTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/trainer-booking/:id",
        element: (
          <PrivateRoute>
            <TrainerBooking />
          </PrivateRoute>
        ),
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      // Admin Page
      {
        path: "all-news-letter",
        element: <AllNewsLetter />,
      },
      {
        path: "all-trainers",
        element: <AllTrainerss />,
      },
      {
        path: "applied-trainer",
        element: <AppliedTrainer />,
      },
      {
        path: "add-new-class",
        element: <AddNewClass />,
      },
      {
        path: "balance",
        element: <AllNewsLetter />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </HelmetProvider>
);
