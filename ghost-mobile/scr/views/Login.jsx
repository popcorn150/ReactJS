import {Link} from "react-router-dom";
import imge5 from "../images/Navlogo.svg"
import Navbar from "../navber.jsx";
export default function Login() {

  return (
    <div className="login-section">
      <div className="icon">
        <img src={imge5} alt="" />
      </div>
      <div className="login">
      <div className="my_login">
        <div className="log-content">
        <h1>sign in</h1>
        <div className="login_details">
          <div className="login_detail">
            <label htmlFor="name">Ghost email</label>
            <input type="text" id="name"/>
          </div>
          <div className="login_detail">
            <label htmlFor="password">Ghost password</label>
            <input type="password" id="password"/>
          </div>
          <button type="submit">Sign in</button>
          <Link>forgot your password?</Link>
          <div className="details">
            <p>JOin Ghost and discover thousands of gaming account
              for sale a5t your finger tips.
            </p>
            <Link>Learn more</Link>
          </div>
          <div className="more-details">
            <p>It's free and easy to use</p>
            <Link to="/signup"><button>Join Ghost</button></Link>
            <p>2024 Undergodz Organization. All rights reserved.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
