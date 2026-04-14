import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <footer
          style={{
            padding: "2rem 0",
            textAlign: "center",
            borderTop: "1px solid var(--color-border)",
            marginTop: "4rem",
            background: "var(--color-surface)",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} TechDynamicJC. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;