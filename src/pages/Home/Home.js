import React, { Component } from "react";
import M from "materialize-css";
import "./Home.css";


class Home extends Component {
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
    <div>
      <div class="parallax-container">
        <div class="background"></div>
      </div>
      <div class="row ">
        <div class="col s6 m5 l4 xl3 right">
            <img class="responsive-img toping" src={require("./images/treeladder.png")}/>
        </div>
      </div>
      <div class="parallax-container">
        <div class="background2"></div>
      </div>

      </div>
    );
  }
}

export default Home;
