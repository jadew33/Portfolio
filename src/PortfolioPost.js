import React, { Component } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "./assets/styles/portfolioStyles.scss";
import "./assets/styles/GlobalStyles.scss";

export default class PortfolioPost extends Component {
  render() {
    const { videoLink, description, technologies } = this.props;
    return (
      <div className="portfolio-post">
        <HoverVideoPlayer
          videoSrc={videoLink}
          className="portfolio-post-video"
          controls
        />
        <div className="portfolio-post-text">
          <p className="purple-text">{technologies}</p>
          <p className="gray-text">/** {description} */</p>
        </div>
      </div>
    );
  }
}
