import React from "react";
import "../css/About.css";
import { FaFilePdf } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-7 pe-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="py-5">
              <h1>About me</h1>
            </div>
            <h4>I'm Santiago Salazar / web developer</h4>
            <p>
              I'm full stack developer with knowledge in building and developing
              web pages and applications. I am self-taught and I am constantly
              learning, I like to share knowledge with my co-workers, I love to
              solve problems and find the error in the code I would like to
              maintain a work environment where everyone can give each other
              feedback and improve together.
            </p>
            <div className="py-3">
              <a
                className="btn btn-primary download"
                href="xd"
                download="CV-Santiago-Salazar-Guzman.pdf"
              >
                <FaFilePdf className="icon-pdf"/>
                Download CV
              </a>
            </div>
          </div>
          <div
            className="col-12 col-md-5"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="py-5">
              <h1>My hobbies</h1>
            </div>
            <li>Playing video games</li>
            <li>Listen to music</li>
            <li>To sing</li>
            <li>Program</li>
            <li>Exercise</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
