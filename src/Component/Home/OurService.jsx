import React from "react";
import "../../Asset/Style/Hero.css";
import Card from "react-bootstrap/Card";
import pk1 from "../../Asset/Image/pk1.png";
import pk2 from "../../Asset/Image/pk2.png";
import pk3 from "../../Asset/Image/pk3.png";
import pk4 from "../../Asset/Image/pkt12.jpg";
import pk5 from "../../Asset/Image/pk5.png";
import pk6 from "../../Asset/Image/pk6.png";
const OurService = () => {
  return (
    <section className="py-5 service">
      <div className="container">
        <h1 className="text-center text-uppercase fw-bold">
          Our Ser<span className="serv">vic</span>es
        </h1>
        <div className="row pt-4">
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={pk1} />
              <Card.Body>
                <Card.Title className="mt-2">Carpets</Card.Title>
                <Card.Text>
                  "Spot On Flooring Company offers a wide range of premium
                  carpets to elevate your space. Our selection includes
                  luxurious, durable, and stylish carpets to suit your needs.
                  Experience comfort, quality, and beauty underfoot with our
                  exquisite carpet options. Transform your floors with Spot On
                  Flooring's exceptional carpet solutions."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={pk2} />
              <Card.Body>
                <Card.Title className="mt-2"> Carpet Installation</Card.Title>
                <Card.Text>
                  "At Spot On Flooring Company, our expert team specializes in
                  seamless carpet installations. We ensure a hassle-free process
                  from start to finish, delivering precision and quality.
                  Elevate your space with our professional carpet installation
                  services. Experience a seamless and stunning transformation
                  with Spot On Flooring."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={pk3} />
              <Card.Body>
                <Card.Title className="mt-2">Carpet Repairs</Card.Title>
                <Card.Text>
                  "Spot On Flooring Company offers top-notch carpet repair
                  services. Our skilled technicians expertly mend and restore
                  your carpets to their former glory. Count on us for fast,
                  efficient, and cost-effective carpet repairs. Trust Spot On
                  Flooring to revitalize your flooring investment."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={pk4} />
              <Card.Body>
                <Card.Title className="mt-2">
                  Pull-Up and Disposal the existing carpets
                </Card.Title>
                <Card.Text>
                  "At Spot On Flooring Company, we provide hassle-free carpet
                  removal and disposal services. Our professional team
                  efficiently pulls up and disposes of existing carpets, leaving
                  your space ready for a fresh start. Trust us to handle the
                  heavy lifting and responsible disposal, making your renovation
                  or upgrade seamless."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={pk5} />
              <Card.Body>
                <Card.Title className="mt-2">Flooring</Card.Title>
                <Card.Text>
                  "Spot On Flooring Company provides top-notch flooring
                  solutions for every space. From hardwood to laminate and more,
                  our diverse selection offers quality and style. Elevate your
                  interiors with our expertly installed flooring options. Trust
                  Spot On Flooring for a seamless and stunning upgrade."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Card className="servcard">
              <Card.Img variant="top" src={pk6} />
              <Card.Body>
                <Card.Title className="mt-2">Residential Carpet</Card.Title>
                <Card.Text>
                  "Spot On Flooring offers luxurious residential carpets,
                  elevating the comfort and aesthetics of your home. Our wide
                  selection includes durable and stylish options to suit your
                  space. Experience quality and elegance underfoot with our
                  premium residential carpets. Transform your home with Spot On
                  Flooring's exquisite choices."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <p className="text-center mt-5 fs-4 kk">
          Call Now for your Free In-Home Consultation.
          <a href="tel: 61 452 393 213" className="ser-para">
            Call us at +61 452 393 213
          </a>
        </p>
      </div>
    </section>
  );
};

export default OurService;
