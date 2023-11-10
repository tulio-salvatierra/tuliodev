import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsComp from "./components/Projects/ProjectsComp";
import Technologies from "./components/tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProjectsComp />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
