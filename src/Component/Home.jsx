import React from "react";
import Banner from "./Banner";
import Choose from "./Choose";
import Courses from "./Courses";
import Event from "./Event";
import Gallery from "./Gallery";
import Hackathon from "./Hackathon";
import Banner1 from "./Banner1";
import Middle from "./Middle";
import Footer from "./Footer";
import HomeCourse from "./Homecourses";
import HomeEvent from "./HomeEvent";
import HomeHack from "./HomeHack";
function Home() {
  return (
    <>
      <Banner />
      <Choose />
      <HomeCourse />
      <HomeEvent />
      <Banner1 />
      <Gallery />
      <HomeHack />
      <Footer />
    </>
  );
}

export default Home;
