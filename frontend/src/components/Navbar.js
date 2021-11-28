import React, { Fragment } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="Landing-page-navbar-logo">
        <img src={logo} alt="Linkify" className="Navbar-logo" href="/" />
      </div>
      <div className="Landing-page-navbar-items">
        <a href="/signup">
          <button className="Landing-page-joinNow-btn">Join now</button>
        </a>
        <a href="/signin">
          <button className="Landing-page-signIn-btn">Sign In</button>
        </a>
      </div>
    </React.Fragment>
  );
}
