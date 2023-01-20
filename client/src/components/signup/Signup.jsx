import { Link } from "react-router-dom";



const Signup = (props) => {


    return (
        <div className="section-signup-container">
            <div className="signup-top">
                <h1>New to Twitter?</h1>
                <p>Sign up now to get your own personalized timeline!</p>
                <div className="signup-buttons">
                    <Link to="/Temp"><div className="custom-button"><img src="/" alt="" /><h4>Sign up With Google</h4></div></Link>
                    <Link to="/Temp"><div className="custom-button"><img src="/" alt="" /><h4>Sign up With Apple</h4></div></Link>
                    <Link to="/Temp"><div className="custom-button"><h4>Sign up With phone or e-mail</h4></div></Link>
                </div>
                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            </div>

            <div className="signup-bottom">
                <Link to="/Temp" className="signup-bottom-links">Terms of Service</Link>
                <Link to="/Temp" className="signup-bottom-links">Privacy Policy</Link>
                <Link to="/Temp" className="signup-bottom-links">Cookie Policy</Link>
                <Link to="/Temp" className="signup-bottom-links">Accessibility</Link>
                <Link to="/Temp" className="signup-bottom-links">Ads info</Link>
                <Link to="/Temp" className="signup-bottom-links">More...</Link>
                <span className="signup-bottom-links">© 2022 Twitter, Inc.</span>
            </div>
        </div>
    )
}

export default Signup;