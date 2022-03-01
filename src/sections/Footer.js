import React from "react";
import "../css/Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 py-3">
            <div className="d-flex justify-content-center">
              <a
              className="icon mx-3"
                href="mailto:Mignize@gmail.com"
                alt="Mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail></AiOutlineMail>
              </a>
              <a
              className="icon mx-3"
                href="https://www.github.com/Mignize"
                alt="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub></BsGithub>
              </a>
              <a
              className="icon mx-3"
                href="https://www.linkedin.com/in/santiago-salazar-guzman/"
                alt="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin></BsLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center text-white pb-2">
          <p className="copyright">&copy; {year} Santiago Salazar Guzman. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
