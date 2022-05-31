import React, { useState } from "react";
import "../css/Navigation.css";
import { FaBars } from "react-icons/fa";

import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const [background, setBackground] = useState(false);

  const sections = document.querySelectorAll("section");

  onscroll = () => {
    const scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop - section.offsetHeight * 0.5 &&
        scrollPosition <
          section.offsetTop + section.offsetHeight - section.offsetHeight * 0.5
      ) {
        const currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
      }
    });
  };

  const removeAllActiveClasses = () => {
    document.querySelectorAll("nav a").forEach((e) => {
      e.classList.remove("active");
    });
  };

  const addActiveClass = (id) => {
    const selector = `a[href="/Portfolio/#${id}"].nav-link`;
    document.querySelector(selector).classList.add("active");
  };

  const handleVisible = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <BrowserRouter>
      <nav
        className={
          background
            ? "navbar navbar-expand-lg navbar-dark position-fixed active"
            : "navbar navbar-expand-lg navbar-dark position-fixed"
        }
      >
        <div className="container-fluid px-4 align-items-start">
          <div className="navbar-logo">
            <div className="logo">
              <Link to="#home">M</Link>
            </div>
          </div>
          <div className="d-flex">
            <button
              className="menu d-lg-none"
              type="button"
              onClick={handleVisible}
            >
              <FaBars className="mb-3 pb-1" />
            </button>
          </div>
          <ul
            className={visible ? "navbar-nav visible" : "navbar-nav"}
            onMouseUp={handleVisible}
          >
            <li className="nav-item">
              <Link to="#home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navigation;
