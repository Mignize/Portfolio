import React from "react";
import prueba from "../files/images/Prueba.jpg";
import Projects from "../components/Projects.js";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="py-5" data-aos="fade-up" data-aos-duration="1500">
          <h1>My portfolio</h1>
        </div>
        <div className="container-fluid">
          <div className="row projects">
            <Projects
              img={prueba}
              name="Project"
              description="Web application: React"
              linkWebsite="https://github.com/"
              linkGithub="https://github.com"
            ></Projects>
            <Projects
              img={prueba}
              name="Project"
              description="Web application: React"
              linkWebsite="https://github.com/"
              linkGithub="https://github.com"
            ></Projects>
            <Projects
              img={prueba}
              name="Project"
              description="Web application: React"
              linkWebsite="https://github.com/"
              linkGithub="https://github.com"
            ></Projects>
            <Projects
              img={prueba}
              name="Project"
              description="Web application: React"
              linkWebsite="https://github.com/"
              linkGithub="https://github.com"
            ></Projects>
            <Projects
              img={prueba}
              name="Project"
              description="Web application: React"
              linkWebsite="https://github.com/"
              linkGithub="https://github.com"
            ></Projects>
            <Projects
              img={prueba}
              name="Project"
              description="Web application: React"
              linkWebsite="https://github.com/"
              linkGithub="https://github.com"
            ></Projects>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
