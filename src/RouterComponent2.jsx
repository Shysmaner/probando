import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Taildwindcss } from "./Tailwindcss";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/tailwindcss",
        element: <Taildwindcss />
    }
])


const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
}