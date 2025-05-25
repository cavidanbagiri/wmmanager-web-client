import {
    createBrowserRouter,
} from "react-router-dom";

import Navbar from "../pages/Navbar.jsx";
import Dashboard from '../pages/Dashboard.jsx';
import Warehouse from "../pages/Warehouse.jsx";
import Stock from '../pages/Stock.jsx';
import Area from "../pages/Area.jsx";
import Login from "../pages/Login.jsx";
import Profile from "../pages/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/warehouse",
                element: <Warehouse/>
            },
            {
                path: "/stock",
                element: <Stock/>
            },
            {
                path: "/area",
                element: <Area/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/login",
                element: <Login/>
            },
        ]
    },
]);

export default router;