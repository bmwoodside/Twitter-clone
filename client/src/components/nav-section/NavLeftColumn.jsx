import { Link } from "react-router-dom";


const NavLeftColumn = (props) => {


    return (
        <div className="section-navleft-container">
            <Link to="/Temp"><div className="custom-button"><img src="" alt="birdLogo" /></div></Link>
            <Link to="/Temp"><div className="custom-button"><img src="" alt="poundSign" /><h2>Explore</h2></div></Link>
            <Link to="/Temp"><div className="custom-button"><img src="" alt="gearIcon" /><h3>Settings</h3></div></Link>
        </div>
    )
}

export default NavLeftColumn;