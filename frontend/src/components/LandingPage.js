import React from "react";
import Navbar from "./Navbar";
import workspace from "../assets/workspace.jpg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="Landing-page-outter-container">
      <div className="Landing-page-inner-container">
        <div className="Landing-page-greeting-container">
          <section className="Langing-page-greeting-section">
            <div className="Landing-page-navbar-container">
              <Navbar></Navbar>
            </div>
            <div className="Greeting-section-form-img-container">
              <div className="Greeting-page-form-container">
                <div className="Greeting-text-container">
                  Welcome to your professional community
                </div>
                <form action="" className="Sign-up-form">
                  <div className="User-details-input-container">
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
                    <button className="Sign-Up-btn" type="button">
                      {" "}
                      Sign In{" "}
                    </button>

                    <div className="divider">
                      <div className="divider-line"></div>&nbsp; or &nbsp;
                      <div className="divider-line"></div>
                    </div>

                    <button className="Gooogle-sign-Up-btn">
                      Google Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div className="Greeting-img-container">
                <img src={workspace} alt="" className="Greeting-img" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
