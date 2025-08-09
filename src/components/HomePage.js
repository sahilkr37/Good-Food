import React from "react";
import InspirationSection from "./InspirationSection";
import RestaurantSection from "./RestaurantSection";

const HomePage = ({ restaurants, setRestaurants, filteredRestaurants, setFilteredRestaurants }) => {
    return (
        <>
            <InspirationSection />
            <RestaurantSection
                restaurants={restaurants}
                setRestaurants={setRestaurants}
                filteredRestaurants={filteredRestaurants}
                setFilteredRestaurants={setFilteredRestaurants}
            />
        </>
    );
};

export default HomePage;
