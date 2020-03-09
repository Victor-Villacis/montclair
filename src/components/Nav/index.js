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
    document.addEventListener("DOMContentLoaded", function() {
      var elems1 = document.querySelectorAll(".sidenav", { draggable: true });
      M.Sidenav.init(elems1);
    });
  }

  render() {
    return (
      <div>
        <div className="">
          <nav className="white">
            <a href="/">
              <img
                id="logo"
                src={require("./images/mcslogo.jpg")}
                alt="MontClair Care Share"
              />
            </a>
            <ul className="right hide-on-med-and-down nav-links">
              <li>
                <a
                  href="/about"
                  className="dropdown-trigger"
                  data-target="dropdown1"
                >
                  About <i className="fas fa-caret-down "></i>
                </a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
            <a
              href="#"
              data-target="slide-out"
              className="burger sidenav-trigger"
            >
              <i className=" burger-icon material-icons">menu</i>
            </a>
            {/* Dropdown content  */}
            <ul
              id="dropdown1"
              className="dropdown-content nav-links right hide-on-med-and-down  "
            >
              <li className="sub-link">
                <a href="/Team">Team</a>
              </li>
              <li className="sub-link">
                <a href="/Sponsors">Sponsors</a>
              </li>
            </ul>

            {/*---------Burger-------*/}
            <div className="container">
              <ul id="slide-out" className=" sidenavbg sidenav right">
                <li className="sub-link">
                  <a href="/Team">Team</a>
                </li>
                <li className="sub-link">
                  <a href="/Sponsors">Sponsors</a>
                </li>
                <li>
                  <a className="sidenav-close" href="/news">
                    News
                  </a>
                </li>
                <li>
                  <a className="sidenav-close" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="sidenav-close" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
