import React from "react";
import Card from "react-bootstrap/Card";
import a1 from "../../Asset/Image/a1.png";
import "../../Asset/Style/Hero.css";
const ImageSlider = () => {
  return (
    <section className="py-2 mt-5 mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-6 col-md-12 col-lg-4 mt-5">
            <Card className="card1">
              <Card.Img variant="top" src={a1} className="zoom" />
              <Card.Body>
                <Card.Title>Spot On Flooting</Card.Title>
                <Card.Text>
                  "Revamp your space with Spot-On Flooring! 🏡✨ Expert flooring
                  solutions that redefine elegance and style. Contact us today
                  for a FREE consultation. #SpotOnFlooring #HomeUpgrade"
                </Card.Text>
                <button className="filter">Contact Us</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-md-12 col-lg-8 mt-5">
            <div>
              <h1 className="hi1 px-3 text-uppercase mobile-the">
                Welcome to Spot on Flooring pty ltd
              </h1>
              <p className="lining">
                At "Spot On Flooring," we recognize the significance of a
                well-organized and aesthetically pleasing living space. That's
                why we provide exceptional residental flooring services to help
                you transform your home into a functional and stylish haven. Our
                team of skilled professionals is committed to collaborating with
                you, turning your flooring dreams into reality.
                <span className="d-block py-4">
                  We understand that your home should not only be practical but
                  also mirror your unique taste and personality. This is why we
                  offer a diverse array of design choices, premium materials,
                  and customizable options to suit your specific preferences.
                </span>
                <span className="d-block">
                  Please don't hesitate to get in touch with us for more
                  information about our residental flooring services. Contact us
                  on <strong>+61 452 393 213 </strong> or{" "}
                  <strong>gudaal18@gmail.com</strong>
                </span>
              </p>
              <button className="filter mt-3 fw-bold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
