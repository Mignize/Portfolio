import React from "react";
import "../css/Skills.css";
import javascript from "../files/images/javascript.png";
import nodejs from "../files/images/nodejs.png";
import mongodb from "../files/images/mongodb.png";
import graphql from "../files/images/graphql.png";
import html from "../files/images/html.png";
import css from "../files/images/css.png";
import git from "../files/images/git.png";
import typescript from "../files/images/typescript.png";
import bootstrap from "../files/images/bootstrap.png";

const Skills = () => {
  return (
    <>
      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        <div className="container py-5">
          <h1>My skills</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={html} alt="html"></img>
              <div className="name-icon">HTML</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    High
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={css} alt="css"></img>
              <div className="name-icon">Css</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Improving
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={javascript} alt="javascript"></img>
              <div className="name-icon">Javascript</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    High
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={git} alt="Git"></img>
              <div className="name-icon">Git</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    High
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={mongodb} alt="Mongodb"></img>
              <div className="name-icon">Mongodb</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    High
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={nodejs} alt="Node.js"></img>
              <div className="name-icon">Node.js</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    High
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={graphql} alt="Graphql"></img>
              <div className="name-icon">Graphql</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Improving
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={typescript} alt="Typescript"></img>
              <div className="name-icon">Typescript</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="bar-progress btn-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    High
                  </div>
                </div>
              </div>
            </div>
            <div className="skill column col col-lg-3 col-md-3 text-center mb-5">
              <img className="icons" src={bootstrap} alt="Bootstrap"></img>
              <div className="name-icon">Bootstrap</div>
              <div className="tooltip">
                <div className="progress mt-3 mb-3">
                  <div
                    className="btn-warning bar-progress"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Improving
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
