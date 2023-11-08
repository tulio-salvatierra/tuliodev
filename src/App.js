import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsComp from "./components/Projects/ProjectsComp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProjectsComp />
      <About />
      <Footer />
    </>
  );
}

export default App;
