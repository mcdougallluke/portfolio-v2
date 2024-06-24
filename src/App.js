import React, { useState, useEffect } from 'react';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [navOpen]);

  return (
    <div>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className={`${navOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <Home />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
