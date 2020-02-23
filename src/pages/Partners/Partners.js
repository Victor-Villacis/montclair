import React, { Component } from "react";
import M from "materialize-css";
import "./Partners.css";


class Partners extends Component {
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
    <div className="container">
       <div className="left">
        <p>hello</p>   
      </div> 
     <div className="parallax-container">
       <div className="parallax right"><img src={require("./images/biyrocketsq.jpg")}></img></div>
     </div>   
     <div>
       <p>Hello</p>
       <p>Hello</p>
       <p>Hello</p>
       <p>Hello</p>
       <p>Hello</p>
       <p>Hello</p>
     </div>
    
      
    </div>
    );
  }
}

export default Partners;
