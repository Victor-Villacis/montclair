import React, { Component } from "react";
import "./style.css";

import M from "materialize-css";
class Sponsors extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".parallax");

      M.Parallax.init(elems, {
        responsiveThreshold: 0
      });
    });
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col l6 s12 logo-sponsors-div">
            <h5>Help out MCS!</h5>
            <img
              className="responsive-img"
              src={require("./images/logopictoOK.png")}
              alt="MCS Logo"
            />
            <h2>Become a sponsor</h2>
            <p>
              “Montclair Care Share” is a digital platform designed to connect
              neighbors and encourage favors by providing community members with
              a set of smart tools designed to facilitate child care, pet care,
              house care and other needs. When this expanding MCS circle of
              friends and neighbors have more money and time, they can spend it
              at local businesses. Win. Win.”
            </p>
          </div>
          <div className="col l6 s12 biyrocketsq-div">
            <img
              className=" "
              src={require("./images/biyrocketsq.jpg")}
              alt="Boy Standing in a latter writing in a wall"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h5 className="center-align ">Our Sponsors</h5>
          </div>

          <div className="row ">
            <div className="col s12 l4">
              <img
                className="responsive-img img-logo "
                src={require("./images/littlegym1.jpg")}
                alt="Little Gim Logo"
              />
            </div>
            <div className="col s12 l4">
              <img
                className="responsive-img img-logo "
                src={require("./images/tableleg.jpeg")}
                alt="Table Leg Logo"
              />
            </div>
            <div className="col s12 l4">
              <img
                className="responsive-img img-logo "
                src={require("./images/orange32.jpg")}
                alt="Orange32 Logo"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 l4">
              <img
                className="responsive-img img-logo "
                src={require("./images/studio42.jpeg")}
                alt="Studio42 Logo"
              />
            </div>
            <div className="col s12 l4">
              <img
                className="responsive-img img-logo "
                src={require("./images/balloons.jpg")}
                alt=" Jonathan's Ballons Logo"
              />
            </div>
            <div className="col s12 l4">
              <img
                className="responsive-img img-logo "
                src={require("./images/greenorchid.png")}
                alt="Green Orchid Logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
