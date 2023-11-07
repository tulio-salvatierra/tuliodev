import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  function Section({ id, children }) {
    return (
      <section id={id} style={{ height: "100vh" }}>
        {children}
      </section>
    );
  }
  return (
    <>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <About />
      </Section>
    </>
  );
}

export default App;
