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
            <div className="paralax-container">
              <div className="paralax ">
                <img
                  className="responsive-img"
                  src={require("./images/logopictoOK.png")}
                  alt="MCS Logo"
                />
              </div>
            </div>

            <h2>
              Become <br /> a sponsor
            </h2>
            <p>
              <b>“Montclair Care Share” </b> is a digital platform designed to
              connect neighbors and encourage favors by providing community
              members with a set of smart tools designed to facilitate child
              care, pet care, house care and other needs.
            </p>
            <p>
              When this expanding MCS circle of friends and neighbors have more
              money and time, they can spend it at local businesses. Win. Win.”
            </p>
          </div>
          <div className="parallax-container ">
            <div className="parallax ">
              <img
                className="biyrocketsq hide-on-small-only"
                src={require("./images/biyrocketsq.jpg")}
              ></img>
            </div>
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
        <div className="row type-of-sponsor-row container">
          <h4 className="center-align orange-text accent-4-text">
            Three types of sponsorships:
          </h4>
          <div className="col l4 s12 ">
            <h1>GENIAL</h1>
            <h6>Location Sponsor</h6>
            <p>
              Host MCS meet-ups and your business logo will be added to the MCS
              website and advertising materials for events.**
            </p>
          </div>
          <div className="col l4 s12">
            <h1>SWEET</h1>
            <h6>Financial Affiliate Sponsor</h6>
            <p>
              Contribute any $250 increment and your business logo will be added
              to the MCS website, advertising materials for events, and you will
              be gifted a donor membership.**
            </p>
          </div>
          <div className="col l4 s12">
            <h1>INCREDIBLE!</h1>
            <h6>Location + Financial Premier Sponsor</h6>
            <p>
              Advantages of GENIAL and SWEET plus: your logo will be displayed
              prominently on forthcoming MCS merchandise as well as press
              exposure opportunities.**
            </p>
          </div>
          <p>
            *(plus a tax write-off) *
            <p>
              A complete list of sponsor benefits proportionate to donation size
              will be available upon request.
            </p>
          </p>
        </div>
        <div className="row row-form-sponsor">
          <div className="col s12"></div>
          <div className="row">
            <form className="col sponsor-form m8 offset-m2 s12">
              <h4 className=" center-align">
                Want to learn more? Drop us a line!
              </h4>
              <div className="row">
                <div className="input-field  sponsor-form-field col s8">
                  <input type="text" name="name" />
                  <label for="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field sponsor-form-field col s8">
                  <input type="text" name="business-name" />
                  <label for="business-name">Business name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field  sponsor-form-field col s8">
                  <input type="text" name="sponsor-phone" />
                  <label class="active" for="phone">
                    Phone
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field sponsor-form-field col s8">
                  <input type="email" name="sponsor-email" />
                  <label for="name">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field sponsor-form-field col s8">
                  <textarea id="textarea1" row="5" class=""></textarea>
                  <label class="active" for="textarea1">
                    Message
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col m12">
                  <p className="center-align">
                    <button
                      className="btn btn-large waves-effect white  grey-text darken-3"
                      type="button"
                      name="action"
                    >
                      Submit
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
