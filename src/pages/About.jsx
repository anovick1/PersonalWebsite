import React from 'react'
import Avery from '../components/Avery'

const About = () => {
  return (
    <div className="home">
      <Avery />
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
          {/* <div className="section-title">
            <h2>Bio</h2>
          </div> */}
          <div className="lp-description">
            <h3>
              I am a Full Stack Software Engineer who is a great critical
              thinker and loves solving problems that make people's lives
              easier. With a prior background in tech sales, I am a great
              communicator who is very organized, hard-working, and understands
              what it takes to succeed. I look forward to starting a career in
              engineering and welcome all the challenges I may face.
            </h3>
            <h3>
              I am originally from the San Fransisco Bay Area but currently
              based in Washington, DC. I am{' '}
              <span id="aboutme">
                open to any remote / in-person opportunities in any city
              </span>{' '}
              .
            </h3>
            <h3>
              May 2021 - I graduated from American University double-majoring in
              Computer Science and Business Administration with a concentration
              in Entrepeneurship. Upon graduation, I was unsure if I wanted to
              go a business or engineering route.
            </h3>
            <h3>
              July 2021 - I found an amazing opportunity as a Sales Development
              Representative at Varjo. While I enjoyed my time and learned a lot
              while I was there, I came to the conclusion that I wanted to start
              a career in Software Engineering.
            </h3>
            <h3>
              June 2022 - I decided to enroll in the 12-week intensive Software
              Engineering Immersive Bootcamp in order to further develop my
              technical skills for the job market.
            </h3>
            <h3>
              Please feel free to reach out to me via Cell, Email, or LinkedIn.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
