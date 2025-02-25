import { Routes, Route } from "react-router-dom";
import { HOME_URL, ABOUT_URL, CONTACT_URL } from "./Constants";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./components/Contact";
import NotFound from "./components/Resume/NotFound";

function App() {
  return (
    <>
      <div className="top">
        <Header />
      </div>
      <main className="content mt-5">
        <Routes>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={ABOUT_URL} element={<AboutPage />} />
          <Route path={CONTACT_URL} element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
