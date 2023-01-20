import NavLeftColumn from "../components/nav-section/NavLeftColumn";
import NavbarCenter from "../components/nav-section/NavbarCenter";
import Signup from "../components/signup/Signup";



const Main = (props) => {

    return (
        <div className="section-main-container">

            <div className="main-window">
                <div className="main-left-panel">
                    <NavLeftColumn />
                </div>

                <div className="main-center-panel">
                    <NavbarCenter />
                    <h1>Hi. I'm Main center panel</h1>
                    <h2>Map some content here, already!</h2>
                </div>

                <div className="main-right-panel">
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default Main;