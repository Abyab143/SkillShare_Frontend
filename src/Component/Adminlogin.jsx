import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from 'axios';
import context from "../context/AuthContext";
import { auth, provider } from "../firebase.config.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Loader from './Loader.jsx';

function Adminlogin() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [open,setopen] = useState(false);
  const app = useContext(context);

  const Login = async () => {
    setopen(true);
    try {
      const user = await axios.post("https://skillshare-backend-070t.onrender.com/admin/auth/login",{
        email: email,
        password: password
      })
      app.setUser(user.data);
      app.setIsAuthenticated(true);
      localStorage.setItem("user",JSON.stringify(user.data));
      localStorage.setItem("auth",true);
      alert(`Welcome ${user.data.name}`);
      navigate("/");
      setopen(false);
    } catch (err) {
      alert(err.message);
    }
  };

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setopen(true);
        const sign = async () => {
          const user = await axios
            .post("https://skillshare-backend-070t.onrender.com/admin/auth/google", {
              name: result.user.displayName,
              email: result.user.email,
              password: "0000",
            })
            app.setIsAuthenticated(true);
            app.setUser(user.data);
            localStorage.setItem("user",JSON.stringify(user.data));
            localStorage.setItem("auth",true);
            alert(`Welcome ${user.data.name}`);
            setopen(false);
            navigate("/"); 
        };
        sign();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
    {open ? <Loader/> : 
    <div className="container" id="ab8">
        <div id="login_logo">
          <img src={logo} alt="" id="reg_logo"/>
          <span className="text-white bg-success mx-2 p-1 ab9"> Login As a Admin</span>
        </div>
        <div id="login_input">
          <input type="email" placeholder="Enter Your Email..." 
          value={email} onChange={(e)=>setemail(e.target.value)}/>
          <input type="password" placeholder="Enter Your Passwords..." 
          value={password} onChange={(e)=>setpassword(e.target.value)}/>
          <button className="btn btn-success" onClick={Login}>Login</button>
        </div>
        <div className="ab10 px-4 text-center">
          <span id="ab11">Or Login With Google</span>
          <button className="btn btn-warning mx-2" onClick={signInWithGoogle}>Google</button>
        </div>
        <div className="ab10 my-2 text-center">
          <span id="ab11">New User Registerd...</span>
          <Link className="btn btn-warning mx-2" to={"/adminsignup"}>Register</Link>
        </div>
      </div>
}
    </>
  )
}

export default Adminlogin
