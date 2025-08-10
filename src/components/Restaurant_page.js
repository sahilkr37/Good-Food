import { useEffect, useState } from "react"
import { useParams } from "react-router";

const Restaurant_page = () => {
    const { id } = useParams();
    const [menuList, updateMenuList] = useState([])
    const [restaurant, setRestaurant] = useState({})
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${id}&submitAction=ENTER`)
                const json = await res.json()
                updateMenuList(json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel || [])

                setRestaurant(json?.data.cards[2].card.card.info || {})

            } catch (error) {
                console.error("error fetching", error);
            }
        }
        fetchMenu()

    }, [id])
    return <>
        <div className="res_page_container">
            <h1 className="heading">{restaurant.name}</h1>
            <div className="restaurant_info_box">
                <div className="restaurant_info_content">
                    <div className="rating_cost_line">
                        <span className="rating_text">
                            <span className="star_icon">★</span> {restaurant.avgRating} ({restaurant.totalRatingsString})
                        </span>
                        <span className="dot">•</span>
                        <span className="cost_text">{restaurant.costForTwoMessage}</span>
                    </div>

                    <div className="cuisine_tags">{restaurant.cuisines?.join(", ")}</div>


                    <div className="outlet_delivery_row">
                        <div className="outlet_text">
                            <span className="circle_icon">●</span> Outlet <b>{restaurant.areaName}</b> <span className="dropdown_arrow">▼</span>
                        </div>
                        <div className="delivery_time">{restaurant.sla?.deliveryTime} mins</div>
                    </div>
                </div>
            </div>

            <div className="menu">
                <div className="menu-logo">Menu</div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for dishes"
                        className="search-input"
                    />
                    <button className="search-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="icon" />
                    </button>
                </div>
                {menuList.map((item) => {
                    const info = item.card?.info || item.dish?.info || {};
                    return (
                        <div className="dish_card" key={info.id}>
                            <div className="dish_details">
                                <div className="dish_name">{info.name}</div>
                                <div className="dish_price">₹{info.price / 100 || info.defaultPrice / 100}</div>
                                <div className="dish_info">{info.description}</div>
                            </div>
                            <div className="dish_photo_container">
                                <div
                                    className="dish_photo"
                                    style={{
                                        backgroundImage: `url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}")`
                                    }}
                                ></div>
                                <button className="add_button">ADD</button>
                            </div>
                        </div>
                    );
                })}



            </div>
        </div >
    </>
}
export default Restaurant_page