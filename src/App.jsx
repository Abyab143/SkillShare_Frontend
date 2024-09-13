import React, { useEffect, useState } from "react";
import Navbar1 from "./Component/Navbar1";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Component/Form";
import Login from "./Component/Login";
import Courses from "./Component/Courses";
import Hackathon from "./Component/Hackathon";
import Event from "./Component/Event";
import Selection from "./Component/Selection";
import AdminReg from "./Component/AdminReg";
import Adminlogin from "./Component/Adminlogin";
import SelectAdd from "./Component/SelectAdd";
import AddEvent from "./Component/AddEvent";
import AddHackathon from "./Component/AddHackathon";
import Addcouse from "./Component/Addcouse";
import DetailsCourse from "./Component/DetailsCourse";
import Aos from "aos";
import "aos/dist/aos.css"
import Choose from "./Component/Choose";
import Gallery from "./Component/Gallery";
import TestPage from "./Component/Test";


const App = () => {
  const[open,setopen] = useState(false);
  const[add,setadd] = useState(false);

  useEffect(() => {
    Aos.init();
    
   }, [])

  return (
    <>
      <Router>
        <Navbar1 setopen={setopen} setadd={setadd} />
        {open && <Selection setopen={setopen}/>}
        {add && <SelectAdd setadd={setadd}/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/select" element={<Selection/>} />
          <Route path="/signup" element={<Form/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/adminsignup" element={<AdminReg/>} />
          <Route path="/adminlogin" element={<Adminlogin/>} />
          <Route path="/addevent" element={<AddEvent/>} />
          <Route path="/addcourse" element={<Addcouse/>} />
          <Route path="/detailsCourse" element={<DetailsCourse/>} />
          <Route path="/addhackathon" element={<AddHackathon/>} />
          <Route path="/choose" element={<Gallery/>} />
          <Route path="/test" element={<TestPage/>} />
          <Route path="/course" element={<Courses type="here..."/>} />
          <Route path="/certificate" element={<Courses type=" And Get certificate"/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/hackathon" element={<Hackathon/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
