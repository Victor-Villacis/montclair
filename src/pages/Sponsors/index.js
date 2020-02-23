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
          <div className="parallax-container">
       <div className="parallax right"><img src={require("./images/biyrocketsq.jpg")}></img></div>
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
            <img
              className="typeof-sponsor-img responsive-img img-responsive"
              src={require("./images/genial.png")}
              alt="Genial Logo "
            />
            <h6>Location Sponsor</h6>
            <p>
              Host MCS meet-ups and your business logo will be added to the MCS
              website and advertising materials for events.**
            </p>
          </div>
          <div className="col l4 s12">
            <img
              className="typeof-sponsor-img"
              src={require("./images/sweet.png")}
              alt="Sweet title Logo "
            />
            <h6>Financial Affiliate Sponsor</h6>
            <p>
              Contribute any $250 increment and your business logo will be added
              to the MCS website, advertising materials for events, and you will
              be gifted a donor membership.**
            </p>
          </div>
          <div className="col l4 s12">
            <img
              className="typeof-sponsor-img"
              src={require("./images/incredible.png")}
              alt="Incredile Title-Logo "
            />
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
          <div className="col s12">
            <h4 className=" center-align">
              Want to learn more? Drop us a line!
            </h4>
          </div>
          <div className="row">
            <form className="col m8 offset-m2 s12">
              <div className="row">
                <div className="input-field col s8">
                  <input type="text" name="name" />
                  <label for="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8">
                  <input type="text" name="business-name" />
                  <label for="business-name">Business name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8">
                  <input type="text" name="sponsor-phone" />
                  <label for="phone">Phone</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8">
                  <input type="email" name="sponsor-email" />
                  <label for="name">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8">
                  <textarea
                    id="textarea1"
                    class="materialize-textarea"
                  ></textarea>
                  <label for="textarea1">Message</label>
                </div>
              </div>
              <div className="row">
                <div className="col m12">
                  <p className="center-align">
                    <button
                      className="btn btn-large waves-effect waves-light"
                      type="button"
                      name="action"
                    >
                      Send Message
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
