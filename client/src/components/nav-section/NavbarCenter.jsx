import { Link } from 'react-router-dom'



const NavbarCenter = (props) => {

    return (
        <div className="section-navbar-container">
            <div className="navbar-top">
                <div className="search-bar">
                    <img src="/" alt="magnifier" />
                    <input type="search" name="nav-searchbar" id="nav-searchbar" placeholder="Search Twitter"/>
                </div>
                <img src="/" alt="gear" />
            </div>

            <div className="navbar-bottom">
                <Link to="/Temp">For You</Link>
                <Link to="/Temp">Trending</Link>
                <Link to="/Temp">World Cup</Link>
                <Link to="/Temp">News</Link>
                <Link to="/Temp">Sports</Link>
                <Link to="/Temp">Entertainment</Link>
            </div>
        </div>
    )

}

export default NavbarCenter;