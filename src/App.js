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

        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <TechnologiesPage />
        <ContactPage />
        <div className="full-width">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
