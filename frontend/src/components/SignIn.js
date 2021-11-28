import React from "react";
import logo from "../assets/logo.svg";
import "./SignIn.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="Sign-up-page-container">
      <div className="Sign-up-logo-container">
        <Link to="/">
          <img src={logo} alt="" className="Sign-up-logo" />
        </Link>
      </div>
      <div className="Greeting-quote-container">
        Make the most of your professional life
      </div>

      <form action="" className="Sign-up-form">
        <div className="User-details-input-container">
          <input
            type="text"
            className="User-email-mobile"
            name="email"
            placeholder="Email or mobile"
          />
          <input
            type="text"
            className="User-password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="User-action-btn-container">
          <button className="Sign-Up-btn"> Sign In</button>

          <div className="divider">
            <div className="divider-line"></div>&nbsp; or &nbsp;
            <div className="divider-line"></div>
          </div>

          <button className="Gooogle-sign-Up-btn"> Google Sign in</button>
        </div>

        <div className="User-join-now-link">
          New to Linkyfy <Link to="/signup">join now</Link>
        </div>
      </form>
    </div>
  );
}
