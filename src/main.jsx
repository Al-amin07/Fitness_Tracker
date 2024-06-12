import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import Main from "./Layout/Main.jsx";
import AllTrainer from "./Pages/NavPages/AllTrainers/AllTrainer.jsx";
import AllClass from "./Pages/NavPages/AllClass/AllClass.jsx";
// import Community from "./Pages/NavPages/Community.jsx";
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
import ManageSlot from "./DashBoard/Trainer/ManageSlot.jsx";
import AddForum from "./DashBoard/Shared/AddForum.jsx";
import AddSlot from "./DashBoard/Trainer/AddSlot.jsx";
import ActivityLog from "./DashBoard/Member/ActivityLog.jsx";
import Profile from "./DashBoard/Shared/Profile.jsx";
import Community from "./Pages/NavPages/Community/Community.jsx";
import AdminDashBoard from "./DashBoard/Admin/AdminDashBoard.jsx";
import AdminRoute from "./PrivateRoute/AdminRoute.jsx";
import TrainerRoute from "./PrivateRoute/TrainerRoute.jsx";
import DiffDashBoard from "./DashBoard/Shared/DiffDashBoard.jsx";
import SharedRoute from "./PrivateRoute/SharedRoute.jsx";
import CommunityDetails from "./Pages/Home/CommunityDetails.jsx";
import Error from "./Layout/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
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
       path: '/community-details/:id',
       element: <CommunityDetails></CommunityDetails>
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
        {/* <AdminDashBoard/> */}
      </PrivateRoute>
    ),
    children: [
      // Admin Page
      {
        index : true,
        element: <PrivateRoute><DiffDashBoard></DiffDashBoard></PrivateRoute>
      },
      {
        path: "all-news-letter",
        element: <AdminRoute><AllNewsLetter /></AdminRoute>,
      },
      {
        path: "all-trainers",
        element: <AdminRoute><AllTrainerss /></AdminRoute>,
      },
      {
        path: "applied-trainer",
        element: <AdminRoute><AppliedTrainer /></AdminRoute>,
      },
      {
        path: "add-new-class",
        element: <AdminRoute><AddNewClass /></AdminRoute>,
      },
      {
        path: "balance",
        element: <AdminRoute><AllNewsLetter /></AdminRoute>,
      },
      // Trainer Page
      {
        path: 'manage-slot',
        element:<TrainerRoute><ManageSlot/></TrainerRoute>
      
      },
      {
        path: 'add-forum',
        element: <SharedRoute><AddForum/></SharedRoute>
      },
      {
        path: 'add-slot',
        element: <TrainerRoute><AddSlot/></TrainerRoute>
      },
      // Member Page
      {
        path:'activity-log',
        element: <PrivateRoute><ActivityLog/></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
      }
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
