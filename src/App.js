import React from "react";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <HomePage />
        <ProjectsPage />
        <AboutPage />
        {/* <TechnologiesPage /> */}
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
