import React from "react";
import "./App.css";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App" id="app">
      <main className="app-main">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
