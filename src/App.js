import React from "react";
import Navigation from "./sections/Navigation";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navigation />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;
