import React from "react";
import Skill from "../components/Skill.js";
import javascript from "../files/images/javascript.png";
import nodejs from "../files/images/nodejs.png";
import mongodb from "../files/images/mongodb.png";
import graphql from "../files/images/graphql.png";
import html from "../files/images/html.png";
import css from "../files/images/css.png";
import git from "../files/images/git.png";
import typescript from "../files/images/typescript.png";
import bootstrap from "../files/images/bootstrap.png";
import nextjs from "../files/images/nextjs.png";
import react from "../files/images/react.png";

const Skills = () => {
  return (
    <>
      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        <div className="container pb-5">
          <h1>My skills</h1>
        </div>
        <div className="container">
          <div className="row align-items-center gy-5">
            <Skill icon={html} name="HTML" progress="100" level="High"></Skill>
            <Skill
              icon={css}
              name="Css"
              progress="50"
              level="Improving"
            ></Skill>
            <Skill
              icon={javascript}
              name="Javascript"
              progress="75"
              level="High"
            ></Skill>
            <Skill icon={git} name="Git" progress="75" level="High"></Skill>
            <Skill
              icon={mongodb}
              name="Mongodb"
              progress="75"
              level="High"
            ></Skill>
            <Skill
              icon={nodejs}
              name="Node.js"
              progress="75"
              level="High"
            ></Skill>
            <Skill
              icon={graphql}
              name="GraphQL"
              progress="50"
              level="Improving"
            ></Skill>
            <Skill
              icon={typescript}
              name="Typescript"
              progress="50"
              level="Improving"
            ></Skill>
            <Skill
              icon={bootstrap}
              name="Bootstrap"
              progress="75"
              level="High"
            ></Skill>
            <Skill icon={react} name="React" progress="50" level="Improving"></Skill>
            <Skill
              icon={nextjs}
              name="Next.js"
              progress="50"
              level="Improving"
            ></Skill>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
