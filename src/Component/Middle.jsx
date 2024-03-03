import React from "react";
import footer from "../assets/footer.png";
function Middle() {
  return (
    <>
      <div
        className="container-fluids mt-3"
        id="ab6"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img src={footer} alt="" />
      </div>

      <section className="container-fluid">
        <div className="row my-3">
          <div className="offset-xl-11 col">
            <a
              href="#"
              className="btn btn-danger float-right"
              title="Go to top"
            >
              <i className="fa fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Middle;
