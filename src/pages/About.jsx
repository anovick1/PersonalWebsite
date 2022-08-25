import React, { useEffect } from 'react'
import Avery from '../components/Avery'

const About = ({ mobile }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="home">
      <Avery mobile={mobile} />
      <div className="large-project">
        <div className="home-title">
          <h1>About Me</h1>
          <a
            href="https://drive.google.com/file/d/1GnQLT_PGd4vuk-0O70CEKVavZVTxHdgY/view"
            target="blank"
          >
            <p>Click here to view resume</p>
          </a>
        </div>
        <div className="section-cont" id="bio">
          <div className="section-title">
            <h2>Bio</h2>
          </div>
          <div className="lp-description">
            <h3>
              I am a Full Stack Software Engineer who loves problem-solving and
              making systems run efficiently. With a prior background in tech
              sales, I am an effective communicator, organized, hard-working,
              and understand what it takes to succeed.
            </h3>
            <h3>
              I have roots in New York, Boston, and the San Francisco Bay Area
              and am currently based in Washington, D. C. I am{' '}
              <span id="aboutme">
                open to any remote / in-person opportunities in any city
              </span>
              .
            </h3>
            <h3>
              Please feel free to reach out to me via cell, email, or LinkedIn.
            </h3>
          </div>
          <div className="section-cont" id="bio">
            <div className="section-title">
              <h2>Timeline</h2>
            </div>
            <div className="lp-description">
              <h3>
                <span>May 2021</span> - I graduated from American University
                double-majoring in Computer Science and Business Administration
                with a concentration in Entrepeneurship. Upon graduation, I was
                unsure if I wanted to start a business or engineering career.
              </h3>
              <h3>
                <span>July 2021</span> - I found an amazing opportunity as a
                Sales Development Representative at{' '}
                <a
                  href="https://varjo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="varjo"
                >
                  Varjo
                </a>
                . While I enjoyed my time and learned a lot while I was there, I
                came to the conclusion that I wanted to start a career in
                Software Engineering.
              </h3>
              <h3>
                <span>June 2022</span> - I decided to enroll in the 12-week
                intensive Software Engineering Immersive Bootcamp in order to
                further develop my technical skills for the job market.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
