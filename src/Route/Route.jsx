import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/Home/About";
import AllTrainer from "../Pages/NavPages/AllTrainer";
import AllClass from "../Pages/NavPages/AllClass";
import Community from "../Pages/NavPages/Community";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/all-trainer',
            element: <AllTrainer/>
        },
        {
            path: '/all-class',
            element: <AllClass/>
        },
        {
            path: '/community',
            element: <Community/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
    ]
  },
]);

export default route;
