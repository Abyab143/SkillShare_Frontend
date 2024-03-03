import React from "react";
import Abyab from "../assets/Abyab.jpg";
import p_1 from "../assets/p-1.png";
import p_2 from "../assets/p-2.png";
import p_3 from "../assets/p-3.png";
import p_4 from "../assets/p-4.png";
import p_5 from "../assets/p-5.png";

function Gallery() {
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Our Gallery</h2>
        <p className="text-center font-weight-bold">
          If you are going to use a passage of you need to be sure there isn't
          anything embarrassing hidden in the middle of text
        </p>
        <div className="row" id="ab7">
          <div
            className="col-md-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={p_2} alt="" />
          </div>
          <div
            className="col-md-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={Abyab} alt="" />
          </div>
          <div
            className="col-md-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={p_3} alt="" />
          </div>
          <div
            className="col-md-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={p_4} alt="" />
          </div>
          <div
            className="col-md-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={p_5} alt="" />
          </div>
          <div
            className="col-md-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={p_1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
