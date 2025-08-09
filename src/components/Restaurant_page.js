const Restaurant_page = () => {
    return <>
        <div className="res_page_container">
            <h1>KFC</h1>
            <div className="restaurant_info_box">
                <div className="restaurant_info_content">
                    <div className="rating_cost_line">
                        <span className="rating_text">
                            <span className="star_icon">★</span> 4.4 (10K+ ratings)
                        </span>
                        <span className="dot">•</span>
                        <span className="cost_text">₹450 for two</span>
                    </div>

                    <div className="cuisine_tags">Burgers, Fast Food</div>

                    <div className="outlet_delivery_row">
                        <div className="outlet_text">
                            <span className="circle_icon">●</span> Outlet <b>Kankarbagh</b> <span className="dropdown_arrow">▼</span>
                        </div>
                        <div className="delivery_time">40–50 mins</div>
                    </div>
                </div>
            </div>

            <div className="menu">
                <div>Menu</div>
                <div className="dish_card">
                    <div className="dish_details">
                        <div className="dish_name">Korean & Thai Roll Chicken Meal</div>
                        <div className="dish_price">₹569</div>
                        <div className="dish_info">
                            Rs 154 Off on Korean Tangy Roll & Thai Spicy Roll, Large Popcorn, Large Fries & Pepsi PET 475ml
                        </div>
                    </div>
                    <div className="dish_photo_container">
                        <div
                            className="dish_photo"
                            style={{ backgroundImage: `url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/12/76d3e89f-2eec-4a04-8c0d-bd82bf153d78_6b7961a1-5a28-482a-a58d-c8e3c03fe112.jpg")` }}
                        ></div>
                        <button className="add_button">ADD</button>
                    </div>
                </div>

            </div>
        </div >
    </>
}
export default Restaurant_page