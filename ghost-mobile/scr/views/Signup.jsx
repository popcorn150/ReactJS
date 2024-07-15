import {Link} from "react-router-dom";
import imge5 from "../images/Navlogo.svg"
import {createRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Signup() {

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
            <label htmlFor="name">Ghost account name</label>
            <input type="text" id="name"/>
          </div>
          <div className="login_detail">
            <label htmlFor="address">Comfirm your address</label>
            <input type="text" id="address"/>
          </div>
          <div className="login_detail">
            <label htmlFor="country">Country of residence</label>
            <input type="text" id="country"/>
          </div>
          <div className="login_detail">
            <label htmlFor="password">Ghost Password</label>
            <input type="password" id="password"/>
          </div>
          <div className="login_detail">
            <label htmlFor="password2">Comfirm Password</label>
            <input type="password" id="password2"/>
          </div>
          <div className="login_detail">
            <label htmlFor="name">Ghost account name</label>
            <input type="text" id="name"/>
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
            <Link to="/login"><button>Join Ghost</button></Link>
            <p>2024 Undergodz Organization. All rights reserved.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>

      )
}
