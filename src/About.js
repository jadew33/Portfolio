import React, { Component } from "react";
import "./assets/styles/bannerStyles.scss";
import "./assets/styles/GlobalStyles.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h3 className="about-title gray-text monospace">/** About me</h3>
        <p className="about-text gray-text montserrat">
          Currently studying computer science at Queen's University!
          <br />I was first introduced to Java 3 years ago, and have since
          expanded my interests to include web development. <br /> I spent the
          summer completing Colt Steele's Web Developer Bootcamp and React
          Developer Bootcamp, where I learned HTML, CSS, how to implement
          databases (MongoDB) and CSS frameworks (Bootstrap), EJS templating,
          RESTful APIs and CRUD, nodeJS, Express, and React. Other languages I
          am familiar with are Python and R. */
        </p>
      </div>
    );
  }
}
