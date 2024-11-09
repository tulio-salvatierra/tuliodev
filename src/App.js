import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import Contact from "./components/Contact";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const showHeader = gsap
      .from(".top", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        self.direction === -1 ? showHeader.play() : showHeader.reverse();
      },
    });
  }, []);

  return (
    <>
      <div className="top z-3">
        <Header />
      </div>
      <main className="content z--1000">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/#projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
