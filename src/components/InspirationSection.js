import { useEffect, useState } from "react";
import { restaurantImageLink } from "../utils/constants";
import { ShimmerCircularImage } from "react-shimmer-effects";
import { inspirationObjects } from "../utils/constants";

const InspirationCard = ({ imageId, name }) => {
    return (
        <div className="insCard">
            <img src={`${restaurantImageLink}${imageId}`} alt={name} />
        </div>
    );
};

const InspirationSection = () => {
    const [inspirations, setInspirations] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(inspirationObjects);
        const json = await data.json();
        const fetchedInspirations = json?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];

        setInspirations(fetchedInspirations)
    }

    return inspirations.length === 0 ? (
        <div className="inspirationContainer">
            <p className="heading">Inspiration for your first order</p>
            <div className="inspirationCardContainer">
                {[...Array(6)].map((_, index) => (
                    <div className="insCard" key={index}>
                        <div style={{ padding: '1rem' }}>
                            <ShimmerCircularImage size={120} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="inspirationContainer">
            <p className="heading">Inspiration for your first order</p>
            <div className="inspirationCardContainer">
                {inspirations.map((item) => (
                    <InspirationCard
                        key={item.id}
                        imageId={item.imageId}
                    />
                ))}
            </div>
        </div>
    );

};



export default InspirationSection;
