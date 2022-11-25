import React from "react";
import Navbar from "./components/layouts/Navigation/Navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useLocation } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import EarnedWageAccess from "./pages/EarnedWageAccess";
// import HowToUse from "./pages/HowToUse";
import ScheduleMeetings from "./pages/Schedule";

const Root = () => {
    const location = useLocation()
    return (
        <div className="flex flex-col">
            <Navbar />
            {location.pathname.includes("schedule-meeting") ? "" : <Banner />}
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

let router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // {
            //     path: "about",
            //     element: <About />,
            // },
            // {
            //     path: "earned-wage-access",
            //     element: <EarnedWageAccess />,
            // },
            // {
            //     path: "how-to-use",
            //     element: <HowToUse />,
            // },
            {
                path: "schedule-meeting",
                element: <ScheduleMeetings />
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
