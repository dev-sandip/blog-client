import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [{
            path: "/",
            element: <Home />
        }, {
            path: "/register",
            element: <Register />
        }, {
            path: "/login",
            element: <Login />
        }]

    }, {
        path: "*",
        element: <NotFound />
    }
])

export default router;