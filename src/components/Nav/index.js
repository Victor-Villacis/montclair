import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./style.css";
function Nav() {
  return (
    <nav className="nav-logout-view">
      <div class="nav-wrapper">
        <a href="https://montclaircareshare.com/">
          <img
            id="logo"
            src={require("./images/mcslogo.jpg")}
            alt="MontClair Care Share"
          />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
          <li>
            <Link to="/">Team</Link>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
