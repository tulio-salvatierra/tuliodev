import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/Hero";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <main className="content">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        {/* <TechnologiesPage /> */}
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
