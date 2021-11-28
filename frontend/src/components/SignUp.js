import React from "react";
import logo from "../assets/logo.svg";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="Sign-up-page-container">
      <div className="Sign-up-logo-container">
        <Link to="/">
          <img src={logo} alt="Linkyfy-logo" className="Sign-up-logo" />
        </Link>
      </div>
      <div className="Greeting-quote-container">
        Make the most of your professional life
      </div>

      <form action="" className="Sign-up-form">
        <div className="User-details-input-container">
          <input
            type="text"
            className="User-Name"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            className="User-email-mobile"
            placeholder="Email or mobile"
            name="email"
          />
          <input
            type="text"
            className="User-password"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="User-action-btn-container">
          <button className="Sign-Up-btn"> Join now</button>

          <div className="divider">
            <div className="divider-line"></div>&nbsp; or &nbsp;
            <div className="divider-line"></div>
          </div>

          <button className="Gooogle-sign-Up-btn"> Google Sign in</button>
        </div>

        <div className="User-sign-in-link">
          Already in Linkyfy <Link to="/signin">Sign in</Link>
        </div>
      </form>
    </div>
  );
}
