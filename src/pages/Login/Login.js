import React from "react";
import "./style.css";

function Login() {
  return (
    <div className="container-login">
      <form className="login-form">
        <div className="row">
        </div>
        <div className="row">
          <div className="input-field col s6 m6 l6">
            <i className="material-icons prefix">mail_outline</i>
            <input className="validate" id="email" type="email" />
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6 m6 l6">
            <i className="material-icons prefix">lock_outline</i>
            <input id="password" type="password" />
            <label for="password">Password</label>
          </div>
        </div>
        <div className="row">          
          <div className="input-field col s6 m6 l6  login-text">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <a href="#" className="btn waves-effect waves-light col s12">Login</a>
          </div>
        </div>
          <div className="input-field col s6 m6 l6">
              <p className="margin right-align medium-small"><a href="#">Forgot password?</a></p>
          </div>          
      </form>
      <div className="bkg">
        <img src={require("../Contact/images/city2.png")} alt="City"></img>
      </div>
    </div>
  );
}

export default Login;
