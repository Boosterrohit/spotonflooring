import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-black py-5 opacity-75">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6 col-lg-3 mt-4">
            <h3 className="text-white fw-bold">About Us</h3>
            <p className="text1">
              Spot On Flooring elevates spaces with quality and innovation. With
              a wide range of materials and expert installations, Spot On
              Flooring is your choice for transformation. Contact Spot On
              Flooring today to redefine your living space.
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 mt-4">
            <h3 className="text-white fw-bold">Quick Links</h3>
            <p className="text1">
              <i className="bi bi-chevron-double-right"></i> Home
            </p>
            <p className="text1">
              <i className="bi bi-chevron-double-right"></i> About Us
            </p>
            <p className="text1">
              <i className="bi bi-chevron-double-right"></i> Service
            </p>
            <p className="text1">
              <i className="bi bi-chevron-double-right"></i> Gallery
            </p>
            <p className="text1">
              <i className="bi bi-chevron-double-right"></i> Contact Us
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 mt-4">
            <h3 className="text-white fw-bold">Contact info:</h3>
            <p className=" text-white fw-bold">
              <i className="bi bi-telephone-fill"></i> +61 452 393 213
            </p>
            <p className=" text-white fw-bold">
              <i className="bi bi-envelope-fill"></i> gudaal18@gmail.com
            </p>
            <p className=" text-white fw-bold">
              <i className="bi bi-geo-alt-fill"></i> 176 Sunnyholt Rd, Kings
              Park NSW 2148
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 mt-4">
            <h3 className="text-white fw-bold">Working hours</h3>
            <div className="d-flex justify-content-between">
              <p className="text1">Mon-Sat:</p>
              <p className="text1">6 Am To 830 Pm</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text1">Sat:</p>
              <p className="text1">By Appointment</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text1">Sun:</p>
              <p className="text1">Closed</p>
            </div>
          </div>
        </div>
        <p className="text-center text-white fw-bold pt-5">
          Copyright © 2023 Spot On Flooring PTY LTD . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
