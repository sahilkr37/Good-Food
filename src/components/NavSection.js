const NavSection = () => (
    <>
        <div className="navContainer">
            <div className="logoContainer">
                <img src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2149493630.jpg?t=st=1753687879~exp=1753691479~hmac=c8e2cbffe9ce959140dccea4037aa995a543b3cc51a9db739994db6d6ce3b3e6&w=1380" alt="Swiggy Logo" className="logo_img" />
            </div>
            <div className="searchBoxContainer">
                <div className="location">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" className="icon" />
                    <span>Muzaffarpur</span>
                    <span className="dropdown">&#9662;</span>
                </div>
                <div className="divider"></div>
                <div className="search">
                    <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="icon" />
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                </div>
            </div>
            <div className="navContents">

                <li><a href="/login">Log In</a></li>
                <li><a href="/login">Sign Up</a></li>
            </div>
        </div>
    </>
)

export default NavSection; 