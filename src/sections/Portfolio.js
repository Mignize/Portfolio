import React from "react";
import weatherApp from "../files/images/weatherApp.png";
import Projects from "../components/Projects.js";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="pb-5" data-aos="fade-up" data-aos-duration="1500">
          <h1>My portfolio</h1>
        </div>
        <div className="container-fluid">
          <div className="row projects">
            <Projects
              img={weatherApp}
              name="WeatherApp"
              description="Web application: React, node.js, javascript, css"
              linkWebsite="https://weatherapp-mignize.netlify.app"
              linkGithub="https://github.com/Mignize/weather-app"
            ></Projects>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
