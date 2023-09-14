import React from "react";
import screw from "../../Asset/Image/screw.svg";
import "../../Layout/Header/Top.css";
import a1 from "../../Asset/Image/a1.png";
import a2 from "../../Asset/Image/a2.png";
import c3 from "../../Asset/Image/k1.png";
import c6 from "../../Asset/Image/ck6.jpg";
import c1 from "../../Asset/Image/k3.png";
import c2 from "../../Asset/Image/k4.png";
const Project = () => {
  return (
    <section>
      <div className="project">
        <div className="container custom">
          <div className="check">
            <div className="text-center prodiv">
              <img src={screw} alt="icon" className="proimg" />
              <h1 className="text-white fw-bold">Latest Project</h1>
            </div>
          </div>
          <div className="row bg-white p-4">
            <div className="col-sm-6 col-lg-4 imgage ">
              <img src={a1} alt="a1" className="img-fluid mt-4" />
            </div>
            <div className="col-sm-6 col-lg-4 imgage ">
              <img src={a2} alt="a1" className="img-fluid mt-4" />
            </div>
            <div className="col-sm-6 col-lg-4 imgage ">
              <img src={c3} alt="a1" className="img-fluid mt-4" />
            </div>
            <div className="col-sm-6 col-lg-4 imgage">
              <img src={c6} alt="a1" className="img-fluid mt-4" />
            </div>
            <div className="col-sm-6 col-lg-4 imgage">
              <img src={c1} alt="a1" className="img-fluid mt-4" />
            </div>
            <div className="col-sm-6 col-lg-4 imgage">
              <img src={c2} alt="a1" className="img-fluid mt-4" />
            </div>
          </div>
          <div className="check">
            <div className="text-center prodiv">
              <button className="filter1 token">VIEW MORE PROJECT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
