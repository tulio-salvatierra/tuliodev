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
      <Header />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <TechnologiesPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
