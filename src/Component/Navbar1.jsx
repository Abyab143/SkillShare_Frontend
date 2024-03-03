import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaUserGroup } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidBookAdd } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import context from "../context/AuthContext";

function Navbar1({ setopen, setadd }) {
  const auth = useContext(context);

  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    if (localStorage.getItem("user") && localStorage.getItem("auth")) {
      const user = localStorage.getItem("user");
      const app = localStorage.getItem("auth");
      //console.log(JSON.parse(user).name);
      auth.setUser(JSON.parse(user));
      auth.setIsAuthenticated(app);
      //console.log(auth.user);
    } else {
      auth.setUser([]);
      auth.setIsAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setData();
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  nave  sticky-top "
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="" id="logo" />
          </Link>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-toggle="collapse"
            data-target="#navbarnavdropdown"
            aria-controls="navbarnavdropdown"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarnavdropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/choose"}>
                  EXPLORE
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-success"
                  href="#"
                  id="navbardropdownmenulink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  COURSES
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbardropdownmenulink"
                >
                  <Link className="dropdown-item" to={"/course"}>
                    LEANGUAGE
                  </Link>
                  <Link className="dropdown-item" to={"/course"}>
                    WEBSITES
                  </Link>
                  <Link className="dropdown-item" to={"/course"}>
                    ANDORIED
                  </Link>
                  <Link className="dropdown-item" to={"/course"}>
                    Others
                  </Link>
                </div>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardropdownmenulink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbardropdownmenulink"
                >
                  <a className="dropdown-item" href="#">
                    Get A Website
                  </a>
                  <a className="dropdown-item" href="#">
                    Get A App
                  </a>
                  <a className="dropdown-item" href="#">
                    Get A Server
                  </a>
                </div>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to={"/certificate"}>
                  CERTIFICATES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/event"}>
                  EVENTS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/hackathon"}>
                  HACKATHON
                </Link>
              </li>
            </ul>

            {/* <form className="d-flex mx-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="w-50" id="res_nav">
              {!auth.isAuthenticated && (
                <div id="ab2" className="mx-2">
                  <div className="SignUp">
                    <FaUserGroup id="ab3" />
                  </div>
                  <button
                    className=" mx-1 btn btn-success fw-bold"
                    onClick={() => setopen(true)}
                  >
                    SignUp Or Login
                  </button>
                </div>
              )}

              {auth.isAuthenticated && (
                <div id="ab2" className="mx-3">
                  <div className="SignUp">
                    <HiOutlineLogout id="ab3" />
                  </div>
                  <button
                    className=" mx-1 btn btn-success fw-bold"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              )}
              {auth.isAuthenticated && (
                <div id="ab2" className="mx-3">
                  <div className="SignUp">
                    <FaUserGroup id="ab3" />
                  </div>
                  <button className=" mx-1 btn btn-success fw-bold">
                    {auth.user.name}
                  </button>
                </div>
              )}

              {auth.user.isAdmin && (
                <div id="ab2">
                  <div className="SignUp">
                    <BiSolidBookAdd id="ab3" />
                  </div>
                  <button
                    className=" mx-1 btn btn-success fw-bold"
                    onClick={() => setadd(true)}
                  >
                    Add Course
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
