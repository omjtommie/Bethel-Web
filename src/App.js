import React from "react";
import { Routes, Route, } from "react-router-dom";
import AboutPage from "./layouts/AboutPage/AboutPage";
import ContactPage from "./layouts/ContactPage/ContactPage";
import HomePage from "./layouts/HomePage/HomePage";
import ServicesPage from "./layouts/ServicesPage/ServicesPage";

function App() {
  return (
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element= {<ServicesPage />} />
        <Route path="/about" element= { <AboutPage /> } />
        <Route path="/contact" element= {<ContactPage />} />
      </Routes>
     
    
  );
}

export default App;