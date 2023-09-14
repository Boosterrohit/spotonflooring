import React from "react";
import Card from "react-bootstrap/Card";
import "../../Asset/Style/Hero.css";
const FeedBack = () => {
  return (
    <section className="overflow-hidden">
      <div className="container compan">
        <h1 className="text-center fw-bold py-4 com">COMPANY FEEDBACK</h1>
        <div className="row px-3 d-flex justify-content-center">
          <div className="col-sm-6 col-lg-4 mt-3">
            <Card className="company c1">
              <Card.Body>
                <div className="d-flex">
                  <Card.Title>Rachel</Card.Title>
                  <div className="px-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>

                <Card.Text>
                  "Spot On Flooring recently transformed my living space with a
                  custom floor installation, and I'm thrilled with the outcome.
                  Their team of experts exhibited professionalism, extensive
                  expertise, and an unwavering commitment to achieving the best
                  results. They took the time to thoroughly comprehend my
                  requirements and design preferences, and the custom flooring
                  solution they provided not only perfectly complements my space
                  but also exceeded my highest expectations."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4 mt-3">
            <Card className="company c2">
              <Card.Body>
                <div className="d-flex">
                  <Card.Title>Oliver</Card.Title>
                  <div className="px-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>

                <Card.Text>
                  "Spot On Flooring has truly elevated my living space through
                  their remarkable custom floor installation. I'm absolutely
                  ecstatic about the transformation they've delivered. Their
                  team of seasoned professionals exemplified unwavering
                  professionalism, a wealth of expertise, and an unrelenting
                  dedication to excellence. They invested considerable time and
                  effort in grasping my exact needs and design aspirations. The
                  custom flooring solution they meticulously crafted not only
                  seamlessly integrates with my space but also surpassed every
                  single one of my lofty expectations."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-lg-4 mt-3">
            <Card className="company c3">
              <Card.Body>
                <div className="d-flex">
                  <Card.Title>John</Card.Title>
                  <div className="px-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>

                <Card.Text>
                  "Spot On Flooring has completely revitalized my living space
                  with their exceptional custom floor installation. I couldn't
                  be more thrilled with the results they've achieved. The team
                  displayed unparalleled professionalism, an extensive wealth of
                  knowledge, and an unyielding commitment to delivering nothing
                  short of perfection. They went above and beyond to grasp my
                  specific requirements and design preferences, and the custom
                  flooring solution they delivered not only harmonizes
                  flawlessly with my space but also outshines all my wildest
                  expectations."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
