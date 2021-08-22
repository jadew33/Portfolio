import React, { Component } from "react";
import github from "./assets/images/github-gray.svg";
import linkedin from "./assets/images/linkedin-blue.svg";
import resume from "./assets/images/resume-purple.svg";
import "./assets/styles/bannerStyles.scss";
import "./assets/styles/GlobalStyles.scss";
import devpost from "./assets/images/devpost-icon.svg";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <a
          className="purple-text monospace grow contact__icons"
          href="https://github.com/jadew33"
        >
          <p>Github</p>
          <i class="fab fa-github"></i>
        </a>
        <a
          className="purple-text monospace contact__icons"
          href="https://devpost.com/jadew33?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav3"
        >
          <p>Devpost</p>
          <img src={devpost} />
        </a>
        <a
          className="purple-text monospace grow contact__icons"
          href="https://www.linkedin.com/in/jade-wei/"
        >
          <p>LinkedIn</p>
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          className="purple-text monospace grow contact__icons"
          href="https://docs.google.com/document/d/1N4f5kk1QvZUCciZAA7ygkHwsjifrTQWwL-_MGEfsTj4/edit?usp=sharing"
        >
          <p>Resume</p>
          <i class="far fa-file-alt"></i>
        </a>
      </div>
    );
  }
}
