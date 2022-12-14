import { Link } from 'react-router-dom'



const NavBar = (props) => {

    return (
        <div className="section-navbar-container">
            <div className="navbar-top">
                <img src="/" alt="search magnifying glass" />
                <input type="search" name="nav-searchbar" id="nav-searchbar" />
                <img src="/" alt="settings gear" />
            </div>

            <div className="navbar-bottom">
                <Link to="">For You</Link>
                <Link to="">Trending</Link>
                <Link to="">World Cup</Link>
                <Link to="">News</Link>
                <Link to="">Sports</Link>
                <Link to="">Entertainment</Link>
            </div>
        </div>
    )

}

export default NavBar;