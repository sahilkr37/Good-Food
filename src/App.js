import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import NavSection from "./components/NavSection"
import FooterSection from "./components/FooterSection"
import FooterSectionClass from "./components/FooterSectionClass";
import HomePage from "./components/HomePAge";
import Error from "./components/Error";
import Restaurant_page from "./components/Restaurant_page"
import { Outlet, useLocation } from "react-router";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router";


const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const location = useLocation();
    return <>
        <div className="container">
            <NavSection restaurants={restaurants} setRestaurants={setRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
            {location.pathname === '/' ? (
                <HomePage
                    restaurants={restaurants}
                    setRestaurants={setRestaurants}
                    filteredRestaurants={filteredRestaurants}
                    setFilteredRestaurants={setFilteredRestaurants}
                />
            ) : (<Outlet />)}

        </div>
    </>
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <FooterSectionClass name={"Sahil kumar"} gmail={"sahilkumar012004@gmail.com"} />
            }, {
                path: "/restaurant/:id",
                element: <Restaurant_page />
            }
        ],
        errorElement: <Error />
    }
])

const root = createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
