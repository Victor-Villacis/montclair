import React from "react";
import "./style.css";

function Team() {
  return (
    <div className=" team-page-body  ">
      <div className="team-intro-div container ">
        <section>
          <div className="row ">
            <div className="col l2 s12 center-align ">
              <img
                className="icon-team-pg"
                src={require("./images/peacebee.png")}
                alt="peacefulbee"
              />
            </div>

            <div className="col l8 m6 s12">
              <h5>
                {" "}
                <b>The team behind the screen</b>{" "}
              </h5>
              <p className="team-intro">
                Designer Amalia McMahan and producer Leslie Keough have known
                each other for more than a decade and reunited as moms and
                neighbors in Montclair, NJ in 2015. With two children each and
                spouses who travel for work, they leaned on each other for both
                friendship and busy-overwhelmed-mom support. Sometimes they
                could manage all the favors for each other, but sometimes they
                had to ask additional friends to walk the dog, fetch medicine
                for a sick kid, or watch their house when traveling. Grateful
                for each other and the network of parent-friends they’d
                established in just a few short years, they wanted to pay that
                gratitude forward by creating a babysitting and
                everything-else-that-you-could-need-help-with co-op for moms and
                dads whether they’re new to the area and had not yet found their
                tribe, or are looking to deepen their own. With chats between
                drop-offs and meal prep, the site’s scope expanded to include
                pet care, house care and beyond just parents, to include
                anything anyone in the community might need help with. McMahan
                and Keough hope Montclair Care Share can be an online resource
                anyone in the area can use.
              </p>
            </div>
            <div className="col l2 s12 center-align">
              <img
                className="icon-team-pg "
                src={require("./images/plant1.gif")}
                alt="plantgif"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <img
                className="center-align"
                src={require("./images/heartdig.jpg")}
                alt="heartIcon"
                width="50"
                height="50"
              />
            </div>
          </div>
        </section>

        <img
          className="leslie-amalia"
          src={require("./images/bipiclesshue.jpg")}
          alt="Leslie and Amalia"
        />
      </div>
    </div>
  );
}

export default Team;
