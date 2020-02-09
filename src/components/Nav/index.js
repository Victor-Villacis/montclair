import React from "react";
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
            <a href="/">Team</a>
            {/* <Link to="/">Team</Link> */}
          </li>
          <li>
            <a href="/news">News</a>
           {/* <Link to="/news">News</Link> */}
          </li>
          <li>
            <a href="/contact">Contact Us</a>
            {/* <Link to="/contact">Contact Us</Link> */}
          </li>
          <li>
            < a href = "/login" >Login</a>
            {/* <Link to="/login">Login</Link> */}
          </li>
          <li>
            < a href = "/about" >About</a>
            {/* <Link to="/about">About</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
