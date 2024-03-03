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

function AddHackathon() {
  const [name, setname] = useState("");
  const [description, setdescrption] = useState("");
  const [date, setdate] = useState("");
  const [link, setlink] = useState("");
  const [img, setimg] = useState(null);
  const navigate = useNavigate();
  const storage = getStorage();
  const auth = useContext(context);
  const location = useLocation();
  const [open,setopen] = useState(false);

  const uploadEvent = async () => {
    setopen(true);
    try {
      const storageRef = ref(storage, `Hackathons/${img.name}`);
      const uploadTask = uploadBytesResumable(storageRef, img);
      await uploadTask;

      const url = await getDownloadURL(uploadTask.snapshot.ref);
      //console.log("Downloaded url = ", url);
      if (!auth.id) {
        const data = {
          hackName: name,
          description: description,
          hackDate: date,
          hackLink: link,
          hackImg: url,
        };
        console.log(data);
        const event = await axios.post(
          "https://skillshare-backend-070t.onrender.com/api/hack/create",
          data
        );
        alert("Hackathon created successfully");
        navigate("/hackathon");
      } else {
        const newdata = {
          hackName: name,
          description: description,
          hackDate: date,
          hackLink: link,
          hackImg: img,
        };
        const hack = await axios.put(
          `https://skillshare-backend-070t.onrender.com/api/hack/update/${auth.id}`,
          newdata
        );
        alert("Hackathon Updated successfully");
        auth.setId("");
        setopen(false);
        navigate("/hackathon");
        }
    } catch (e) {
      setopen(false);
      alert(e.message);
      navigate("")
    }
  };
  useEffect(()=>{
    const fetchEvent = async () => {
      const event = await axios.get(
        `https://skillshare-backend-070t.onrender.com/api/hack/getHack/${auth.id}`
      );
      setname(event.data.hack.hackName);
      setdescrption(event.data.hack.description);
      setdate(event.data.hack.hackDate);
      setlink(event.data.hack.hackLink);
      setimg(event.data.hack.hackImg);
    };
    if(auth.id){
      fetchEvent();
    }
  },[auth.id])
  return (
    <>
    {open ? <Loader/>:
      <div className="bg-success p-2 ab18">
        <h2 className="text-center text-white fw-bold">Add New Hackathon...</h2>
        <div id="todo">
          <p className="fw-bolder">Name</p>
          <input
            type="text"
            placeholder="Enter Name Of Hackathon"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div id="todo">
          <p className="fw-bolder">Description</p>
          <textarea
            type="text"
            placeholder="Enter Short Description of event..........."
            rows="6"
            value={description}
            onChange={(e) => setdescrption(e.target.value)}
          />
        </div>
        <div id="todo">
          <p className="fw-bolder">Date Of Hackathon</p>
          <input
            type="date"
            placeholder="Enter Date Of Hackathons "
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div id="todo">
          <p className="fw-bolder">Link</p>
          <input
            type="text"
            placeholder="Enter deatiled Link Of Hackathons.."
            value={link}
            onChange={(e) => setlink(e.target.value)}
          />
        </div>

        {!auth.id && (
          <div id="todo">
            <p className="fw-bolder">Image of Hackathons....</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setimg(e.target.files[0])}
            />
          </div>
        )}

        <div className="text-center">
          <button className="btn btn-warning m-3" onClick={uploadEvent}>
            Add Hackathons
          </button>
        </div>
      </div>
}
    </>
  );
}

export default AddHackathon;
