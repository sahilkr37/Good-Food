import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import NavSection from "./components/NavSection"
import InspirationSection from "./components/InspirationSection"
import RestaurantSection from "./components/RestaurantSection"
import FooterSection from "./components/FooterSection"



const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    return <>
        <div className="container">
            <NavSection restaurants={restaurants} setRestaurants={setRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
            <InspirationSection />
            <RestaurantSection restaurants={restaurants} setRestaurants={setRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
            <FooterSection />
        </div>
    </>
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
