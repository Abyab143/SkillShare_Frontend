import React, { useContext, useEffect, useState } from "react";
import context from "../context/AuthContext";
import axios from "axios";
import Courses from "./Courses";
import Loader from "./Loader";
import { useNavigate, useLocation } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function DetailsCourse() {
  const auth = useContext(context);
  const location = useLocation();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState(null);
  const [img, setImg] = useState(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  const storage = getStorage();

  useEffect(() => {
    const getCourse = async () => {
      try {
        const course = await axios.get(
          `https://skillshare-backend-070t.onrender.com/api/course/getCourse/id/${location.state.id}`
        );
        setName(course.data.course.courseName);
        setDescription(course.data.course.description);
        setType(course.data.course.courseType);
        setVideoLink(course.data.course.courseLink);
        setImg(course.data.course.courseImg);
        setNotes(course.data.course.notes); // Handle notes if available
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourse();
  }, [location.state.id, storage]);

  const downloadPDF = () => {
    if (notes) {
      window.open(notes, "_blank"); // Open PDF in a new tab
    } else {
      alert("No PDF available for download.");
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid" id="a98">
          <div className="container-fluid" id="a99">
            <div className="left" data-aos="flip-left" data-aos-duration="1000">
              <div className="content">
                <p className="px-5 py-1">
                  <h2 className="bg-warning text-center p-2">{name}</h2>
                  {description}
                </p>
              </div>
            </div>
            <div className="right" data-aos="zoom-in" data-aos-duration="1000">
              {videoLink ? (
                <iframe
                  width="750"
                  height="500"
                  src={videoLink}
                  title="Course video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>No video available for this course.</p>
              )}
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-danger m-3" onClick={downloadPDF}>
              Download Notes
            </button>
            <button
              className="btn btn-danger m-3"
              onClick={() => {
                navigate("/test");
              }}
            >
              Test
            </button>
          </div>
          <div className="container my-1">
            <Courses />
          </div>
        </div>
      )}
    </>
  );
}

export default DetailsCourse;
