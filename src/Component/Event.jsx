import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import context from "../context/AuthContext";
import Loader from "./Loader";

function Event() {
  const [event, setevent] = useState([]);
  const auth = useContext(context);
  const navigate = useNavigate();
  
  useEffect(() => {
    getEvent();
  });
  const getEvent = async () => {
    const api = await axios.get(
      "https://skillshare-backend-070t.onrender.com/api/event/allEvents"
    );
    setevent(api.data.event);
  };
  const deleteEvent = async (id) => {
    try {
      const data = await axios.delete(
        `https://skillshare-backend-070t.onrender.com/api/event/delete/${id}`
      );
      alert("Event deleted Sucessfully");
      getEvent();
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateEvent = async (id) => {
    auth.setId(id);
    navigate("/addevent");
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-2">Upcomeing Events</h2>
        <p className="text-center font-weight-bold">
          To support and empower students, we arrange some of the events where
          they acknowledge something which helps them to become a successful
          person.
        </p>
        {event. length === 0 && <Loader/> }
        <div className="row">
          {event.map((event) => {
            return (
              <>
                <div className="col-md-4 mt-2" id={event._id} data-aos="flip-left"  data-aos-duration="1000">
                  <div className="card">
                    <div className="card-image-top">
                      <img
                        src={event.eventImg}
                        style={{ width: "100%" }}
                        alt="Event image not found....."
                      />
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        <h3>{event.eventName}</h3>
                      </div>
                      <div className="card-text lead">{event.description}</div>
                      <h5 className="mt-1">Date of events-{event.eventDate}</h5>
                      <a
                        href={event.eventLink}
                        className="btn btn-success mt-3 mx-2"
                        target="_blank"
                      >
                        Visit
                      </a>
                      {auth.user.isAdmin && (
                        <>
                          <button className="btn btn-warning mt-3"  onClick={() => updateEvent(event._id)}>Update</button>
                          <button
                            className="btn btn-danger mt-3 mx-2"
                            onClick={() => deleteEvent(event._id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
 
    </>
   
  );
}

export default Event;
