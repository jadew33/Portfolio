import React, { Component } from "react";
import github from "./assets/images/github-gray.svg";
import linkedin from "./assets/images/linkedin-blue.svg";
import resume from "./assets/images/resume-purple.svg";
import "./assets/styles/bannerStyles.scss";
import "./assets/styles/GlobalStyles.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <a
          className="purple-text monospace grow contact__icons"
          href="https://github.com/jadew33"
        >
          <p>Github</p>
          <img src={github} />
        </a>
        <a
          className="purple-text monospace grow contact__icons"
          href="https://www.linkedin.com/in/jade-wei/"
        >
          <p>LinkedIn</p>
          <img src={linkedin} />
        </a>
        <a
          className="purple-text monospace grow contact__icons"
          href="https://docs.google.com/document/d/1N4f5kk1QvZUCciZAA7ygkHwsjifrTQWwL-_MGEfsTj4/edit?usp=sharing"
        >
          <p>Resume</p>
          <img src={resume} />
        </a>
      </div>
    );
  }
}
