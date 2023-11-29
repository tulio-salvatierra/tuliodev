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
    <>
      <div className="container">
        <Header />
      </div>
      <div>
        <div>
          <HomePage />
        </div>
        <div>
          <AboutPage />
        </div>
        <div>
          <ProjectsPage />
        </div>
        <div>
          <TechnologiesPage />
        </div>
        <div>
          <ContactPage />
        </div>
      </div>
      <div className="full-width">
        <Footer />
      </div>
    </>
  );
}

export default App;
