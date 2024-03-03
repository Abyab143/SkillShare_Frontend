import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function HomeHack() {
  const [hack, sethack] = useState([]);
  useEffect(() => {
    const getHack = async () => {
      const api = await axios.get(
        "https://skillshare-backend-070t.onrender.com/api/hack/homeHack"
      );
      sethack(api.data.hack);
    };
    getHack();
  });
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Upcoming Hackathons</h2>
        <p className="text-center mb-4">
          Read some of the words and know what skilled people work or what
          technology would become revolutionary for the world.
        </p>
        {hack. length === 0 ? <Loader/> :
        <div className="row">
          {hack.map((hack) => {
            return (
              <>
                <div className="col-md-4" id={hack._id} data-aos="flip-right"  data-aos-duration="1000">
                  <div className="card">
                    <div className="card-image-top">
                      <img
                        src={hack.hackImg}
                        style={{ width: "100%" }}
                        alt="Hackathon image Not Founds ...."
                      />
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        <h3>{hack.hackName}</h3>
                      </div>
                      <div className="card-text lead">
                        {hack.description}
                      </div>
                      <h5 className="mt-1">Date of Hackathons-{hack.hackDate}</h5>
                      <a
                        href={hack.hackLink}
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

export default HomeHack;
