import React from "react";
import "./index.css";
import moment from "moment";
import gaming from "../../assets/gaming.svg";
import pizza from "../../assets/pizza.svg";
import sitar from "../../assets/sitar.svg";

function About({ aboutRef }) {
  function calculateYears(startDate, endDate) {
    return moment(endDate).diff(moment(startDate), "years");
  }

  return (
    <div className="About" ref={aboutRef}>
      <div className="AboutFlex">
        <section className="interests-section">
          <h2 className="about-me-header">Professional Experience</h2>
          <ul className="experience-list">
            <li>
              <h3 className="company-header">Accenture</h3>
              <p className="company-info">
                Application Development Analyst - UI <br />
                From November 2021
              </p>
            </li>
            <li>
              <h3 className="company-header">Infosys</h3>
              <p className="company-info">
                Systems Engineer - UI <br />
                From August 2019 till November 2021
              </p>
            </li>
          </ul>

          <h2 className="about-me-header">Education</h2>
          <ul className="experience-list">
            <li>
              <h3 className="company-header">
                Bachelors in Engineering (2016-2019)
              </h3>
              <p className="company-info">
                Progressive Education Society's Modern College of Engineering
                <br />
                - Affiliated to Savitribai Phule Pune University
                <br />
                - Department of Computer Engineering <br />- CGPA 8.31
              </p>
            </li>
            <li>
              <h3 className="company-header">
                Diploma in Engineering (2013 - 2016)
              </h3>
              <p className="company-info">
                MAEER'S Maharashtra Institute of Technology Polytechnic <br />
                - Affiliated to Maharashtra State Board of Technical Education
                <br />
                - Department of Computer Engineering <br />- Percentage 85.94
              </p>
            </li>
          </ul>
        </section>

        <section className="about-me-section">
          <h2 className="about-me-header">
            Certifications
            <span className="wip">
              ( <u>In-progress</u> )
            </span>
          </h2>
          <ul className="likes-certifications-list">
            <li>PluralSight Front-end Web Developer + AEM</li>
            <li>Udacity Nanodegree Python</li>
            <li>
              <u style={{ color: "blue" }}>
                Meta Front-End Developer Professional Certificate
              </u>
            </li>
            <li>
              <u style={{ color: "blue" }}>
                Google UX Design Professional Certificate
              </u>
            </li>
          </ul>

          <h2 className="about-me-header">Like's</h2>
          <ul className="likes-certifications-list">
            <li>Doodling</li>
            <li>
              Gaming
              <img src={gaming} className="logo" alt="Gaming logo" />
            </li>
            <li>マンガ</li>
            <li>
              Indian Classical Music
              <img src={sitar} className="logo" alt="Sitar logo" />
            </li>
            <li>
              Pizza
              <img src={pizza} className="logo" alt="Pizza logo" />
            </li>
          </ul>
        </section>
      </div>
      <section>
        <p className="about-me">
          Little more about me, I'm {calculateYears([1997, 7], Date.now())}{" "}
          years of age. My total years of experience in UI is coming upto{" "}
          {calculateYears([2019, 8], Date.now())} years. My prime expertise is
          in web development using <b>React</b>. Although I also have had a fair
          share of experience using the other technologies like <b>Angular</b>{" "}
          and <b>Vue</b>. I have dabbled a little in Java for development of
          REST APIs and some niche technologies like Twilio. My love is foremost
          for the look and feel of anything I develop, so if you like my website
          feel free to reach out, contact details below.
        </p>
        <h2 className="about-me-header">
          <span className="animate-character">Wow !</span> Thanks for sticking
          around and checking out my portfolio
          <span className="dotColorTheme">.</span>
        </h2>
      </section>
    </div>
  );
}

export default About;
