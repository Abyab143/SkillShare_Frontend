import React from "react";
import Acessblity from "../assets/Acessblity.svg";
import scolarship from "../assets/scolarship.png";
import record from "../assets/record.png";
import scdule from "../assets/scdule.png";
import expert from "../assets/expert.png";
import Practical from "../assets/Practical.png";

function Choose() {
  return (
    <>
      <div className="container" id="choose">
        <h2 className="text-center mt-3">Why choose SkillShare</h2>
        <p className="text-center font-weight-bold m-3">
          Look into yourself, know you’re ambitious and keep moving forward
          until you get something in return as your achievement.
        </p>
        <div className="row">
          <div
            className="col-md-4"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card" id="card_length">
              <div className="card-image-top">
                <img src={Acessblity} style={{ width: "100%" }} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className="text-center">Course Accessibility</h3>
                </div>
                <div className="card-text text-center">
                  Select a suitable course from the vast area of other courses
                  and access it anytime and from anywhere.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card" id="card_length">
              <div className="card-image-top">
                <img src={scolarship} style={{ width: "100%" }} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className="text-center">Scholarship</h3>
                </div>
                <div className="card-text text-center">
                  To encourage talent, we give up to 100 % aid to those young
                  learners who have the ability to do something.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card" id="card_length">
              <div className="card-image-top">
                <img src={Practical} style={{ width: "100%" }} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className="text-center">Practical learning</h3>
                </div>
                <div className="card-text text-center">
                  Interact yourself with the real-world while doing the
                  real-world project and other things to master your skills.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 mt-3"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card" id="card_length">
              <div className="card-image-top">
                <img src={expert} style={{ width: "100%" }} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className="text-center">Expert Instructions</h3>
                </div>
                <div className="card-text text-center">
                  Hold the opportunity to learn from the industry’s expert and
                  learn how to execute things like them.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 mt-3"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card" id="card_length">
              <div className="card-image-top">
                <img src={scdule} style={{ width: "100%" }} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className="text-center">Schedule learning</h3>
                </div>
                <div className="card-text text-center">
                  Learn at whatever and whenever at your suitable time and
                  place. Get a part-time study degree.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 mt-3"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="card" id="card_length">
              <div className="card-image-top">
                <img src={record} style={{ width: "100%" }} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className="text-center">Recorded sessions</h3>
                </div>
                <div className="card-text text-center">
                  Missed the live className? Don’t worry about it, access to
                  every session on the chosen course.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
