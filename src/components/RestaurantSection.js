import { useEffect, useState } from 'react'
// import { restaurants as restaurantList } from "../utils/mockData";
import { restaurantImageLink } from "../utils/constants"


const RestaurantCard = ({ restaurants }) => {

    return (
        <>
            {restaurants.map((res) => {
                const {
                    id,
                    name,
                    cloudinaryImageId,
                    aggregatedDiscountInfoV3,
                    avgRating,
                    sla,
                    cuisines,
                    areaName,
                    locality,
                } = res.info;

                return (

                    <div className="card" key={id}>
                        <div className="card-img-container">
                            <img
                                src={`${restaurantImageLink}${cloudinaryImageId}`}
                                alt={name}
                            />
                            {aggregatedDiscountInfoV3?.header && (
                                <div className="offer-badge">
                                    {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
                                </div>
                            )}
                        </div>
                        <div className="card-info">
                            <h3>{name}</h3>
                            <div className="rating-time">
                                <span className="rating">★ {avgRating}</span>
                                <span>• {sla?.slaString}</span>
                            </div>
                            <p className="cuisines">{cuisines?.join(", ")}</p>
                            <p className="address">{locality || areaName}</p>
                        </div>
                    </div>
                );
            })}
        </>
    )
};

const RestaurantSection = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const fetchedRestaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const fetchedInspirations = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.info || [];

        setRestaurants(fetchedRestaurants)
    }
    if (restaurants.length === 0) return (
        <>
            <div className="heading">
                <p>Best Food in Muzaffarpur</p>
                <button className="btn" disabled>Ratings 4.4+</button>
            </div>
            <div className="restaurantCardsContainer">
                {[...Array(8)].map((_, index) => (
                    <div className="card" key={index}>
                        <div className="card-img-container shimmer" />
                        <div className="card-info">
                            <div className="shimmer shimmer-title" />
                            <div className="shimmer shimmer-subtitle" />
                            <div className="shimmer shimmer-subtitle" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );


    return (
        <>
            <div className="heading">
                <p>Best Food in Muzaffarpur</p>
                <button className="btn" onClick={() => {
                    const updatedRestaurants = restaurants.filter(res => res.info.avgRating > 4.4);
                    setRestaurants(updatedRestaurants);
                }}>Ratings 4.4+</button>
            </div>
            <div className="restaurantCardsContainer">
                <RestaurantCard restaurants={restaurants} />
            </div>
        </>)
}
export default RestaurantSection