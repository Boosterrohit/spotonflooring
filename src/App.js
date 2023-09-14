import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Main/Home";
import AboutUs from "./Layout/Main/AboutUs";
import Services from "./Layout/Main/Services";
import Gallery from "./Layout/Main/Gallery";
import Contact from "./Layout/Main/Contact";
// import TopNav from "./Layout/Header/TopNav";
import Navbar from "./Layout/Header/Navbar";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <>
      {/* <TopNav /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
