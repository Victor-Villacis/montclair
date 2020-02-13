import React, { Component } from "react";
import "./style.css";
import M from "materialize-css";

//set up the nav bar with a dropdown

class Nav extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");

      M.Dropdown.init(elems, {
        inDuration: 500,
        outDuration: 505,
        gutter: 100,
        hover: true,
        coverTrigger: false
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="nav-logout-view">
          <a href="https://montclaircareshare.com/">
            <img
              id="logo"
              src={require("./images/mcslogo.jpg")}
              alt="MontClair Care Share"
            />
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
            <li>
              <a href="/about" className="dropdown-trigger" data-target="dropdown1">
                About <i class="fas fa-caret-down "></i>
              </a>
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
              <a href="/login">Login</a>
              {/* <Link to="/login">Login</Link> */}
            </li>
          </ul>

          {/* Dropdown content  */}
          <ul
            id="dropdown1"
            className="dropdown-content nav-links right hide-on-med-and-down  "
          >
            <li className="sub-link">
              <a href="/">Team</a>
              {/* <Link to="/">Team</Link> */}
            </li>
            <li className="sub-link">
              <a href="/">Sponsors</a>
              {/* <Link to="/">Team</Link> */}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
