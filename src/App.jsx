import React from "react";
import Header from "./components/header";
import Name from "./components/Name";
import Button from "./components/Button";
import About from "./components/About";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="main">
          <Name />
          <Button />
          <About />
        </div>
        <Footer />
      </div>
    </div>
  );
}
