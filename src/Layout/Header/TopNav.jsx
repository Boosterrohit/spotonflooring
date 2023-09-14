import React from "react";

import "./Top.css";
const TopNav = () => {
  return (
    <section className="bg-black case">
      <div className="d-flex justify-content-between">
        <div className=" extra-back">
          <div className="d-flex pt-3">
            <i className="bi bi-telephone-inbound-fill text-white px-2"></i>
            <p className="text-white">
              <span className="fw-bold">Give us a call at:</span> +61 452 393
              213
            </p>
          </div>
        </div>
        <div className="extra-white">
          <div className="d-flex pt-3">
            <div className="d-flex bord">
              <i className="bi bi-envelope-fill text-white px-2"></i>
              <p className="text-white fw-bold">gudaal18@gmail.com</p>
            </div>
            <div className="break"></div>
            <div className="px-4">
              <i className="bi bi-facebook text-white px-1"></i>
              <i className="bi bi-instagram text-white px-1"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
