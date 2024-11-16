import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <div className="top">
        <Header />
      </div>
      <main className="content">
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
