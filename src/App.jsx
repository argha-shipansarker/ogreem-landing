import React from "react";
import Navbar from "./components/layouts/Navigation/Navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EarnedWageAccess from "./pages/EarnedWageAccess";
import HowToUse from "./pages/HowToUse";

let router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Navbar />
                <Banner />
                <Outlet />
                <Footer />
            </div>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "earned-wage-access",
                element: <EarnedWageAccess />,
            },
            {
                path: "how-to-use",
                element: <HowToUse />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
