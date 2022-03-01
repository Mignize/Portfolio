import React from "react";
import "../css/Portfolio.css";
import prueba from "../files/images/Prueba.jpg";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="py-5" data-aos="fade-up" data-aos-duration="1500">
          <h1>My portfolio</h1>
        </div>
        <div className="container-fluid">
          <div className="row projects">
            <div className="col-12 col-lg-4 col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1500">
              <img className="img-fluid" alt="" src={prueba}></img>
              <div className="container-fluid hover">
                <h3>Project</h3>
                <p>Web application: React</p>
                <div className="row d-flex justify-content-center">
                  <a
                    className="col-5 btn btn-dark me-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobeAmericas /> Website
                  </a>
                  <a
                    className="col-5 btn btn-dark ms-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1500">
              <img className="img-fluid" alt="" src={prueba}></img>
              <div className="container-fluid hover">
                <h3>Project</h3>
                <p>Web application: React</p>
                <div className="row d-flex justify-content-center">
                  <a
                    className="col-5 btn btn-dark me-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobeAmericas /> Website
                  </a>
                  <a
                    className="col-5 btn btn-dark ms-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1500">
              <img className="img-fluid" alt="" src={prueba}></img>
              <div className="container-fluid hover">
                <h3>Project</h3>
                <p>Web application: React</p>
                <div className="row d-flex justify-content-center">
                  <a
                    className="col-5 btn btn-dark me-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobeAmericas /> Website
                  </a>
                  <a
                    className="col-5 btn btn-dark ms-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1500">
              <img className="img-fluid" alt="" src={prueba}></img>
              <div className="container-fluid hover">
                <h3>Project</h3>
                <p>Web application: React</p>
                <div className="row d-flex justify-content-center">
                  <a
                    className="col-5 btn btn-dark me-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobeAmericas /> Website
                  </a>
                  <a
                    className="col-5 btn btn-dark ms-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1500">
              <img className="img-fluid" alt="" src={prueba}></img>
              <div className="container-fluid hover">
                <h3>Project</h3>
                <p>Web application: React</p>
                <div className="row d-flex justify-content-center">
                  <a
                    className="col-5 btn btn-dark me-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobeAmericas /> Website
                  </a>
                  <a
                    className="col-5 btn btn-dark ms-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 mt-2" data-aos="fade-up" data-aos-duration="1500">
              <img className="img-fluid" alt="" src={prueba}></img>
              <div className="container-fluid hover">
                <h3>Project</h3>
                <p>Web application: React</p>
                <div className="row d-flex justify-content-center">
                  <a
                    className="col-5 btn btn-dark me-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobeAmericas /> Website
                  </a>
                  <a
                    className="col-5 btn btn-dark ms-1"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
