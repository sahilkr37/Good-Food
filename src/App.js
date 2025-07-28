import React from "react";
import { createRoot } from "react-dom/client";
import NavSection from "./components/NavSection"
import InspirationSection from "./components/InspirationSection"
import RestaurantSection from "./components/RestaurantSection"
import FooterSection from "./components/FooterSection"



const App = () => {
    return <>
        <div className="container">
            <NavSection />
            <InspirationSection />
            <RestaurantSection />
            <FooterSection />
        </div>
    </>
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
