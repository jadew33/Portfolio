import React, { Component } from "react";
import profile from "./assets/images/profile.JPG";
import hello from "./assets/images/hello.png";
import MediaQuery from "react-responsive";
import "./assets/styles/bannerStyles.scss";
import "./assets/styles/GlobalStyles.scss";
import "./assets/styles/HelloStyles.scss";

export default class ProfileBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHello: false,
    };
    this.toggleHello = this.toggleHello.bind(this);
  }

  toggleHello() {
    this.setState({ showHello: !this.state.showHello });
  }

  render() {
    const { showHello } = this.state;
    return (
      <div
        className="profile-banner-container"
        onMouseEnter={this.toggleHello}
        onMouseLeave={this.toggleHello}
      >
        <img
          src={profile}
          alt="profile-image"
          className="profile-banner-image"
        />
        <MediaQuery maxWidth={768}>
          <img
            src={hello}
            alt="hello-speech-bubble"
            className="profile-banner-hello"
          />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          {showHello && (
            <img
              src={hello}
              alt="hello-speech-bubble"
              className="profile-banner-hello"
            />
          )}
        </MediaQuery>
        <div className="profile-banner-text monospace green-text">
          <h1 className="name">// My name is Jade Wei</h1>
          <h1 className="description">// I like programming</h1>
        </div>
      </div>
    );
  }
}
