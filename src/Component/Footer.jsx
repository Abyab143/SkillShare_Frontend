import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function Footer() {
  return (
    <>
      <section className="container-fluid my-3">
        <div className="row ">
          <div className="offset-xl-11 col">
            <a href="#" className="btn btn-danger float-right" title="Go to top">
              <i className="fa fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="container contact" id="contact">
        <h2 className="font-weight-bold">CONNECT WITH SKILLSHARE</h2>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/abyab_/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/abyab-kumar/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/Abyab143" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:abyabkumar@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
