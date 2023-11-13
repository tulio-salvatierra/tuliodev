import React from "react";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="section">
        <HomePage />
      </div>
      <div className="section">
        <AboutPage />
      </div>
      <div className="section">
        <ProjectsPage />
      </div>
      <div className="section">
        <TechnologiesPage />
      </div>
      <div className="section">
        <ContactPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
