import React, { useContext, useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import context from "../context/AuthContext";
import Loader from "./Loader";

function Addcouse() {
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [description, setdescrption] = useState("");
  const [img, setimg] = useState(null);
  const [video, setvideo] = useState(null); // State for video
  const [pdf, setpdf] = useState(null); // State for PDF
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();
  const auth = useContext(context);

  const uploadFiles = async (file, path) => {
    if (!file) return "";
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    await uploadTask;
    return await getDownloadURL(uploadTask.snapshot.ref);
  };

  const uploadEvent = async () => {
    setopen(true);
    try {
      const imgUrl = await uploadFiles(img, `Courses/images/${img?.name}`);
      const videoUrl = await uploadFiles(
        video,
        `Courses/videos/${video?.name}`
      );
      const pdfUrl = await uploadFiles(pdf, `Courses/pdfs/${pdf?.name}`);
      setpdf(pdfUrl);

      const data = {
        courseName: name,
        courseType: type,
        description: description,
        courseImg: imgUrl || "", // If image is not provided, send an empty string
        courseLink: videoUrl || "", // If video is not provided, send an empty string
        //provided, send an empty string
        notes: pdf,
      };

      if (!auth.id) {
        // Create new course
        await axios.post(
          "https://skillshare-backend-070t.onrender.com/api/course/create",
          data
        );
        alert("Course created successfully");
      } else {
        // Update existing course
        await axios.put(
          `https://skillshare-backend-070t.onrender.com/api/course/update/${auth.id}`,
          data
        );
        auth.setId("");
        alert("Course updated successfully");
      }

      navigate("/course");
    } catch (e) {
      setopen(false);
      alert(e.message);
      navigate("/addcourse");
    }
  };
  console.log(auth.id);
  useEffect(() => {
    const getcourse = async () => {
      try {
        const course = await axios.get(
          `https://skillshare-backend-070t.onrender.com/api/course/getCourse/id/${auth.id}`
        );
        console.log(course);
        setname(course.data.course.courseName);
        setdescrption(course.data.course.description);
        settype(course.data.course.courseType);
        setimg(course.data.course.courseImg);
        setvideo(course.data.course.courseLink); // Set video if available
        setpdf(course.data.course.notes); // Set notes if available
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    if (auth.id) {
      getcourse();
    }
  }, [auth.id]);

  return (
    <>
      {open ? (
        <Loader />
      ) : (
        <div className="bg-success p-2 ab18">
          <h2 className="text-center text-white fw-bold">
            Add New Courses here.....
          </h2>
          <div id="todo">
            <p className="fw-bolder">Course Name</p>
            <input
              type="text"
              placeholder="Enter Name Of Courses"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div id="todo">
            <p className="fw-bolder">Course Type</p>
            <input
              type="text"
              placeholder="Enter Type Of Courses"
              value={type}
              onChange={(e) => settype(e.target.value)}
            />
          </div>

          <div id="todo">
            <p className="fw-bolder">Description</p>
            <textarea
              type="text"
              placeholder="Enter Short Description of Your Courses..........."
              rows="6"
              value={description}
              onChange={(e) => setdescrption(e.target.value)}
            />
          </div>

          {!auth.id && (
            <>
              <div id="todo">
                <p className="fw-bolder">Image of Your Course</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setimg(e.target.files[0])}
                />
              </div>

              <div id="todo">
                <p className="fw-bolder">Upload Course Video</p>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setvideo(e.target.files[0])}
                />
              </div>

              <div id="todo">
                <p className="fw-bolder">Upload Course PDF</p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setpdf(e.target.files[0])}
                />
              </div>
            </>
          )}

          <div className="text-center">
            <button className="btn btn-warning m-3" onClick={uploadEvent}>
              {auth.id ? "Update Course" : "Add Course"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Addcouse;
