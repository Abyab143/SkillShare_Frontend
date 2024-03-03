import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import context from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


function Hackathon() {
  const [hack, sethack] = useState([]);
  const auth = useContext(context);
  const navigate = useNavigate();
  useEffect(() => {
    getHack();
  });

  const getHack = async () => {
    const api = await axios.get(
      "https://skillshare-backend-070t.onrender.com/api/hack/allHack"
    );
    sethack(api.data.hack);
  };

  const deleteHack = async (id) => {
    try {
      const data = await axios.delete(
        `https://skillshare-backend-070t.onrender.com/api/hack/delete/${id}`
      );
      alert("Hackathon deleted Sucessfully");
      getHack();
    } catch (err) {
      console.log(err.message);
    }
  }

  const updatedhack = async(id)=>{
    auth.setId(id);
    navigate("/addhackathon");
  }

  return (
    <>
      <div className="container mt-2">
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
                <div className="col-md-4 mt-2" id={hack._id} data-aos="flip-left"  data-aos-duration="1000">
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
                        className="btn btn-success mt-3 mx-2"
                        target="_blank"
                      >
                        Visit
                      </a>
                      {auth.user.isAdmin &&(
                        <>
                        <button
                        className="btn btn-warning mt-3"
                        onClick={() =>updatedhack(hack._id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger mt-3 mx-2"
                        onClick={()=>deleteHack(hack._id)}
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
}
      </div>
    </>
  );
}

export default Hackathon;
