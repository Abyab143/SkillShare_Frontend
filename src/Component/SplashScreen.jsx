import React, { useEffect, useState } from "react";
import App from "../App";
import Loader from "./Loader";
import logo from "../assets/logo.png";

function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Display splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const splashScreenStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: 'rgb(40, 47, 97)',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
    zIndex: 1000,
  };

  const headingStyle = {
    fontSize: "3rem",
    margin: 0,
  };

  const paragraphStyle = {
    fontSize: "1.5rem",
    margin: 0,
  };

  return (
    isVisible && (
      <div style={splashScreenStyle}>
        <img src={logo} alt="" id="logo" />
        <h1 style={headingStyle}>Welcome to SnackStake</h1>
        <p style={paragraphStyle}>Loading...</p>
      </div>
    )
  );
}

export default SplashScreen;
