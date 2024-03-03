import React, { useContext, useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.config";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import context from "../context/AuthContext";
import Loader from "./Loader";

function Addcouse() {
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [description, setdescrption] = useState("");
  const [link, setlink] = useState("");
  const [img, setimg] = useState(null);
  const [open,setopen] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();
  const auth = useContext(context);
  const location = useLocation();

  const uploadEvent = async () => {
    setopen(true);
    try {
      const storageRef = ref(storage, `Courses/${img.name}`);
      const uploadTask = uploadBytesResumable(storageRef, img);
      await uploadTask;

      const url = await getDownloadURL(uploadTask.snapshot.ref);
      //console.log("Downloaded url = ", url);

      if (!auth.id) {
        const data = {
          courseName: name,
          courseType: type,
          description: description,
          courseLink: link,
          courseImg: url,
        };
        const event = await axios.post(
          "https://skillshare-backend-070t.onrender.com/api/course/create",
          data
        );
        alert("Course created successfully");
        navigate("/course");
      } else {
        const newdata = {
          courseName: name,
          courseType: type,
          description: description,
          courseLink: link,
          courseImg: img,
        };
        const event = await axios.put(
          `https://skillshare-backend-070t.onrender.com/api/course/update/${auth.id}`,
          newdata
        );
        setopen(false);
        alert(" Course Updated successfully");
        auth.setId("");
        navigate("/course");
      }
    } catch (e) {
      setopen(false);
      alert(e.message);
      navigate("/addcourse");
    }
  };
   useEffect(() => { 
    const getcourse = async () => {
      const course = await axios.get(
        `https://skillshare-backend-070t.onrender.com/api/course/getCourse/${auth.id}`
      );
      setname(course.data.course.courseName);
      setdescrption(course.data.course.description);
      settype(course.data.course.courseType);
      setlink(course.data.course.courseLink);
      setimg(course.data.course.courseImg);
    };
    if(auth.id){
      getcourse();
    }
  },[auth.id])

  return (
    <>
    {open ? <Loader/>:
      <div className="bg-success p-2 ab18">
        <h2 className="text-center text-white fw-bold">
          Add New Cources here.....
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
        <div id="todo">
          <p className="fw-bolder">Link</p>
          <input
            type="text"
            placeholder="Enter Link of Your Courses"
            value={link}
            onChange={(e) => setlink(e.target.value)}
          />
        </div>

        {!auth.id && (
          <div id="todo">
            <p className="fw-bolder">Image of Your Course</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setimg(e.target.files[0])}
            />
          </div>
        )}

        <div className="text-center">
          <button className="btn btn-warning m-3" onClick={uploadEvent}>
            Add Courses
          </button>
        </div>
      </div>
}
    </>
  );
}

export default Addcouse;
