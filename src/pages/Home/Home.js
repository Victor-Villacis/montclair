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
    <div id="body">

      {/* 1 */}
        <div className="background parent">
          <div className="parent box">
          <img src={require("./images/treeladder.png")} class="child"></img>
          </div>
        </div>

      {/* 2 */}
      <div className="background2">
        <div className="container white">
          <p>hello</p>
        </div>
      </div>

      {/* 3 */}
      <section id="hero">
        <img src="http://fakeimg.pl/240x200?font=lobster" class=""></img>
          <div id="content">
              <h1>Sensible Solutions</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam adipisci cumque tempora quas, hic voluptatibus pariatur repellat numquam accusamus error officia mollitia veniam dolores eaque vero totam dolorem quo.</p>
          </div>
          <img src="http://fakeimg.pl/240x200?font=lobster" class=""></img>
      </section>
        
      {/* 4 */}
      
      {/* 5 */}


      </div>
    );
  }
}

export default Home;
