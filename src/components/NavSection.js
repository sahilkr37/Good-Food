import { useState } from 'react'
import { Link } from 'react-router'
const NavSection = ({ restaurants, setRestaurants, filteredRestaurants, setFilteredRestaurants }) => {


    const [searchText, setSearchText] = useState('')
    return <>
        <div className="navContainer">
            <Link to={"/"}>
                <div className="logoContainer">
                    <img src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2149493630.jpg?t=st=1753687879~exp=1753691479~hmac=c8e2cbffe9ce959140dccea4037aa995a543b3cc51a9db739994db6d6ce3b3e6&w=1380" alt="Swiggy Logo" className="logo_img" />
                </div>
            </Link>
            <div className="searchBoxContainer">
                <div className="location">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" className="icon" />
                    <span>Muzaffarpur</span>
                    <span className="dropdown">&#9662;</span>
                </div>
                <div className="divider"></div>
                <div className="search">
                    <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="icon" />
                    <input type="text" placeholder="Search for restaurant" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const filRestaurants = restaurants.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            })
                            setFilteredRestaurants(filRestaurants)
                        }
                    }} />
                </div>
            </div>
            <div className="navContents">

                <li><Link to={"/login"}>Log In</Link></li>
                <li><a href="/login">Sign Up</a></li>
            </div>
        </div>
    </>
}

export default NavSection; 