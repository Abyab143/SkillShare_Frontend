import React, { useContext, useEffect, useState } from "react";
import context from "../context/AuthContext";
import axios from "axios";
import Courses from "./Courses";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";


function DetailsCourse() {
  const auth = useContext(context);
  const location = useLocation();
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [description, setdescrption] = useState("");
  const [link, setlink] = useState(null);
  const [img, setimg] = useState(null);

  useEffect(() => {
    const getcourse = async () => {
      const course = await axios.get(
        `https://skillshare-backend-070t.onrender.com/api/course/getCourse/${location.state.id}`
      );
      console.log(course.data.course);
      setname(course.data.course.courseName);
      setdescrption(course.data.course.description);
      settype(course.data.course.courseType);
      setlink(course.data.course.courseLink);
      setimg(course.data.course.courseImg);
    };
    getcourse();
  }, [location.state.id]);

  return (
    <>
    {!link ? <Loader/> :
      <div className="container-fluid" id="a98">
        <div className="container-fluid" id="a99">
        <div className="left" data-aos="flip-left"  data-aos-duration="1000">
          <div className="content">
            <p className="px-5 py-1">
            <h2 className="bg-warning text-center p-2">{name}</h2>
              {description}
              </p>
          </div>
        </div>
        <div className="right" data-aos="zoom-in"  data-aos-duration="1000">
          <iframe
            width="750"
            height="500"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        </div>
        <div className="container my-1">
          <Courses/>
        </div>
      </div>
}
    </>
  );
}

export default DetailsCourse;
