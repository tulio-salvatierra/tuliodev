import React from "react";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsComp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech" element={<Technologies />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
