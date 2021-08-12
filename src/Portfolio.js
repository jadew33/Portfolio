import React, { Component } from "react";
import "./assets/styles/portfolioStyles.scss";
import "./assets/styles/GlobalStyles.scss";

import zanzibarWeb from "./assets/videos/zanzibar_demo.mp4";
import zanzibarJava from "./assets/videos/zanzibar_java.mp4";
import budgeter from "./assets/videos/budgeter_fx.mp4";
import catInsta from "./assets/videos/cat-insta.mp4";

import PortfolioPost from "./PortfolioPost";
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          link: catInsta,
          technologies: "#React #HTML #CSS/SCSS #JS #React-Router-Dom",
          description:
            "Instagram app for cats! Project to practice JS, React components, mark up, and react-router",
        },
        {
          link: zanzibarWeb,
          technologies: "#React #HTML #CSS/SCSS #JS",
          description:
            "A graphical recreation of a zanzibar game originally coded in Java.",
        },
        {
          link: zanzibarJava,
          technologies: "#Java",
          description:
            "Java program modeling Zanzibar game using concepts such as enums and multiple classes.",
        },
        {
          link: budgeter,
          technologies: "#Java #JavaFX #SceneBuilder",
          description:
            "Basic budgeting GUI designed using SceneBuilder that can calculate and visualize budgets based on input.",
        },
      ],
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="portfolio-container ">
        <h2 className="green-text monospace portfolio-post-title">
          // View my latest projects!
        </h2>
        <div className="porfolio-post-container">
          {projects.map((p) => {
            return (
              <PortfolioPost
                videoLink={p.link}
                description={p.description}
                technologies={p.technologies}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
