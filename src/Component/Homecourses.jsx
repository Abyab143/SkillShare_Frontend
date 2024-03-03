import React, { useContext, useEffect, useState } from "react";
import c from "../assets/c.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import context from "../context/AuthContext";
import Loader from "./Loader";

function HomeCourse({ type }) {
  const [course, setcourse] = useState([]);
  const navigate = useNavigate();
  const auth = useContext(context);
  useEffect(() => {
    const getCourse = async () => {
      const api = await axios.get(
        "https://skillshare-backend-070t.onrender.com/api/course/HomeCourse"
      );
      setcourse(api.data.course);
    };
    getCourse();
  });

  const detailsCourse = async (id) => {
    navigate("/detailsCourse", { state: { id: id } });
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Discover The Variety Of Courses {type}</h2>
        <p className="text-center font-weight-bold p-1 ">
          Choose one appropriate course for you from over multifarious courses
          available on this platform.
        </p>
        {course.length === 0 ? (
          <Loader />
        ) : (
          <div className="row">
            {course.map((course) => {
              return (
                <>
                  <div
                    className="col-sm-4"
                    id={course._id}
                    data-aos="flip-right"
                    data-aos-duration="1000"
                  >
                    <div className="card">
                      <div className="card-image-top">
                        <img
                          src={course.courseImg}
                          style={{ width: "100%" }}
                          alt="Image not found ...."
                        />
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <h3>{course.courseName}</h3>
                        </div>
                        <div className="card-text lead">
                          {course.description}
                        </div>
                        <button
                          className="btn btn-success mt-3 mx-2"
                          onClick={() => detailsCourse(course._id)}
                        >
                          START
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default HomeCourse;
