import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth, provider } from "../firebase.config.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import context from "../context/AuthContext";
import Loader from "./Loader.jsx";

function AdminReg() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const app = useContext(context);

  const Register = async () => {
    try {
      const user = await axios.post("https://skillshare-backend-070t.onrender.com/admin/auth/signup",{
        name: name,
        email: email,
        password: password
      })
      {!user ? <Loader/> :
      alert("register successfully");
      navigate("/adminlogin");
    }
    } catch (err) {
      alert(err.message);
    }
  };

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const sign = async () => {
          const user = await axios
            .post("https://skillshare-backend-070t.onrender.com/admin/auth/google", {
              name: result.user.displayName,
              email: result.user.email,
              password: "0000",
            })
            {!user ? <Loader/> :
            app.setIsAuthenticated(true);
            app.setUser(user.data);
            alert(`Welcome ${user.data.name}`);
            navigate("/"); 
          }
        };
        sign();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
    <div className="container" id="ab8">
        <div id="login_logo">
          <img src={logo} alt="" id="reg_logo"/>
          <span className="text-white bg-success mx-2 p-1 ab9"> Register As a Admin</span>
        </div>
        <div id="login_input">
          <input type="text" placeholder="Enter Your Name" 
          value={name} onChange={(e)=>setname(e.target.value)}/>
          <input type="email" placeholder="Enter Your Email..."
          value={email} onChange={(e)=>setemail(e.target.value)} />
          <input type="password" placeholder="Enter Your Passwords..." 
          value={password} onChange={(e)=>setpassword(e.target.value)} />
          <button className="btn btn-success" onClick={Register}>Register</button>
        </div>
        <div className="ab10 px-4 text-center">
          <span id="ab11">Or Register With Google</span>
          <button className="btn btn-warning mx-2" onClick={signInWithGoogle}>Google</button>
        </div>
        <div className="ab10 my-2 text-center">
          <span id="ab11">Already Registerd user</span>
          <Link className="btn btn-warning mx-2" to={"/adminlogin"}>Login</Link>
        </div>
      </div>
    </>
  )
}

export default AdminReg
