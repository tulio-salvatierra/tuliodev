import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="top">
          <Header />
        </div>{" "}
        <main className="content">
          <HomePage />
          <ProjectsPage />
          <AboutPage />
          <ContactPage />
        </main>
        <div className="footer">
          <Footer />
        </div>
      </React.Suspense>
    </>
  );
}

export default App;
