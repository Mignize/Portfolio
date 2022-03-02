import React, { useState } from "react";
import "../css/Navigation.css";
import { FaBars } from "react-icons/fa";

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
  const selector = `a[href="#${id}"].nav-link`;
  document.querySelector(selector).classList.add("active");
};

const navLinks = document.querySelectorAll("a.nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const currentId = e.target.attributes.href.value;
    const section = document.querySelector(currentId);
    const sectionPos = section.offsetTop;
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});

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
    <>
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
              <a href="#home">M</a>
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
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
