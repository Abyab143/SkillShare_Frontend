import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function HomeEvent() {
  const [event, setevent] = useState([]);
  useEffect(() => {
    const getEvent = async () => {
      const api = await axios.get(
        "https://skillshare-backend-070t.onrender.com/api/event/homeEvents"
      );
      setevent(api.data.event);
    };
    getEvent();
  });
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5">Upcomeing Events</h2>
        <p className="text-center font-weight-bold">
          To support and empower students, we arrange some of the events where
          they acknowledge something which helps them to become a successful
          person.
        </p>
        {event. length === 0 ? <Loader/> :
        <div className="row">
          {event.map((event) => {
            return (
              <>
                <div className="col-md-4" id={event._id} data-aos="flip-right"  data-aos-duration="1000">
                  <div className="card">
                    <div className="card-image-top">
                      <img src={event.eventImg} style={{ width: "100%" }} alt="Event image not found....." />
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        <h3>{event.eventName}</h3>
                      </div>
                      <div className="card-text lead">
                        {event.description}
                      </div>
                      <h5 className="mt-1">Date of events-{event.eventDate}</h5>
                      <a
                        href={event.eventLink}
                        className="btn btn-success mt-3"
                        target="_blank"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
}
      </div>
    </>
  );
}

export default HomeEvent;
