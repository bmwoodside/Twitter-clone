import NavBar from "../components/nav-section/Navbar";
import Signup from "../components/signup/Signup";



const Main = (props) => {

    return (
        <div className="section-main-container">

            <div className="main-window">
                <div className="main-left-panel">
                    <h1>main left panel</h1>
                </div>

                <div className="main-center-panel">
                    <NavBar />
                    <h1>Hi. I'm Main center panel</h1>
                </div>

                <div className="main-right-panel">
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default Main;