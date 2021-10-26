import React, { Component } from 'react'
import './assets/styles/bannerStyles.scss'
import './assets/styles/GlobalStyles.scss'

export default class About extends Component {
  render () {
    return (
      <div className='about-container'>
        <h3 className='about-title gray-text monospace'>/** About me</h3>
        <p className='about-text gray-text montserrat'>
          Computer Science student at Queen's University!
          <br />I was first introduced to Java 3 years ago, and have since
          expanded my interests to include web development. <br /> I am
          comfortable working with front-end technologies such as React,
          JavaScript, Node.js, HTML, CSS (with preprocessors like SASS), and
          connecting them to databases like MongoDB. I also have prior
          experience with problem solving in Java, Python, and C/C++. <br /> I
          have recently started an internship at a startup, where I have the
          opportunity to further my skills with React, AWS, and integrating
          various APIs. <br /> I am also both an education director and team
          lead at the web development club at Queen’s where I create tutorial
          code and help beginners learn best practices. <br />
          My 3 years working in fast food has improved my communication and
          leadership skills. I was able to work quickly and accurately alongside
          my team to give the customers an above and beyond experience, even
          under high pressure. */
        </p>
      </div>
    )
  }
}
