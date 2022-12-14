import { Link } from "react-router-dom";



const Signup = (props) => {


    return (
        <div className="section-signup-container">
            <div className="signup-top">
                <h1>New to Twitter?</h1>
                <p>Sign up now to get your own personalized timeline!</p>
                <Link to="/"><button><img src="/" alt="" /> Sign up With Google</button></Link>
                <Link to="/"><button><img src="/" alt="" /> Sign up With Apple</button></Link>
                <Link to="/"><button>Sign up With phone or e-mail</button></Link>
                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            </div>

            <div className="signup-bottom">
                <Link to="/">Terms of Service</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Cookie Policy</Link>
                <Link to="/">Accessibility</Link>
                <Link to="/">Ads info</Link>
                <Link to="/">More...</Link>
                © 2022 Twitter, Inc.
            </div>
        </div>
    )
}

export default Signup;