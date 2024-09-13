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

function AddEvent() {
  const [name, setname] = useState("");
  const [description, setdescrption] = useState("");
  const [date, setdate] = useState("");
  const [link, setlink] = useState("");
  const [img, setimg] = useState(null);
  const navigate = useNavigate();
  const storage = getStorage();
  const [open,setopen] = useState(false);
  const auth = useContext(context);
  const location = useLocation();


  const uploadEvent = async () => {
      
    setopen(true);
    try {
      const storageRef = ref(storage, `Events/${img.name}`);
      const uploadTask = uploadBytesResumable(storageRef, img);
      await uploadTask;

      const url = await getDownloadURL(uploadTask.snapshot.ref);
      //console.log("Downloaded url = ", url);

      const data = {
        eventName: name,
        description: description,
        eventDate: date,
        eventLink: link,
        eventImg: url,
      };
      //console.log(data);
      if (!auth.id) {
        const event = await axios.post(
          "https://skillshare-backend-070t.onrender.com/api/event/create",
          data
        );
        setopen(false);
        alert("Event created successfully");
        navigate("/event");
      } else {
        const newData = {
          eventName: name,
          description: description,
          eventDate: date,
          eventLink: link,
          eventImg: img,
        };
        const event = await axios.put(
          `https://skillshare-backend-070t.onrender.com/api/event/update/${auth.id}`,
          newData
        );
        setopen(false);
        alert("Event Updated successfully");
        navigate("/event");
      }
    } catch (e) {
      setopen(false);
      alert(e.message);
      navigate("/addevent");
    }
  };
   
  useEffect(()=>{
    console.log(auth.id);
  const fetchEvent = async () => {
    const event = await axios.get(
      `https://skillshare-backend-070t.onrender.com/api/event/getEvents/${auth.id}`
    );
    setname(event.data.event.eventName);
    setdescrption(event.data.event.description);
    setdate(event.data.event.eventDate);
    setlink(event.data.event.eventLink);
    setimg(event.data.event.eventImg);
  };
  if(auth.id){
 fetchEvent();
  }
 
},[auth.id])

  return (
    <>
    {open ? <Loader/>:
      <div className="bg-success p-2 ab18">
        <h2 className="text-center text-white fw-bold">Add New Event</h2>
        <div id="todo">
          <p className="fw-bolder">Name</p>
          <input
            type="text"
            placeholder="Enter Name Of Event"
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
          <p className="fw-bolder">Date Of Event</p>
          <input
            type="date"
            placeholder="Enter Date Of Event"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div id="todo">
          <p className="fw-bolder">Link</p>
          <input
            type="text"
            placeholder="Enter Link Of Event"
            value={link}
            onChange={(e) => setlink(e.target.value)}
          />
        </div>

        {!auth.id && (
          <div id="todo">
            <p className="fw-bolder">Image of Event</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setimg(e.target.files[0])}
            />
          </div>
        )}

        <div className="text-center">
          <button className="btn btn-warning m-3" onClick={uploadEvent}>
            Add Events
          </button>
        </div>
      </div>
}
    </>
  );
}

export default AddEvent;
