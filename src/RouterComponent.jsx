import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LogIn } from "./logIn";
import { Home } from "./Home";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { Taildwindcss } from "./Tailwindcss";

const router = createBrowserRouter([
    {
        path: "*",
        element: <LogIn />,
    },
    {
        path: "/logIn",
        element: <LogIn />,
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/tailwindcss",
        element: <Taildwindcss />
    }
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;