import React from "react";
import "./style.css";

function Contact() {
  return (
    <>
      <div className=" row contact-container ">
        <div className="col m10 offset-m1 s12">
          <img
            id="mail"
            src={require("./images/bublemail.gif")}
            alt="mail"
          ></img>
          <h2 className="center-align">Contact Us</h2>
          <div className="row">
            <form
              class="gform col m8 offset-m2 s12"
              method="Post"
              // data-email="er.nehaa.gupta@gmail.com"
              // action="https://script.google.com/macros/s/AKfycbx8scpQkb1tEoF6NN3BbSLCl3TuzEOPHuYBCwyi/exec"
            >
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" />
                  <label for="name">Name</label>
                </div>
                <div className="input-field col s12">
                  <input id="email" type="email" class="form-input" />
                  <label for="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="message" className="materialize-textarea" />
                  <label for="message">Message</label>
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
              <img
                src={require("./images/mail2.jpg")}
                alt="mail"
                id="mail2"
              ></img>
            </form>
          </div>
        </div>

        <div className="bkg">
          <img src={require("./images/city2.png")} alt="City"></img>
        </div>
      </div>
    </>
  );
}

export default Contact;
