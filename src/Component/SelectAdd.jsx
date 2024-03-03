import React from 'react';
import {Link,useNavigate} from "react-router-dom";
function SelectAdd({setadd}) {
  return (
    <>
    <div className="selection bg-success p-3" data-aos="zoom-in"  data-aos-duration="1000">
        <div id="ab11">
          <p className='d-flex flex-row-reverse text-danger' id='close' onClick={()=>setadd(false)}>X</p>
          <div id="ab12">
            <Link className='text-black btn btn-warning m-2' to={"/addcourse"}>New Course</Link>
          </div>
          <div id="ab12">
          <Link className='text-black btn btn-warning m-2' to={"/addevent"}>New Event</Link>
          </div>
          <div id="ab12">
          <Link className='text-black btn btn-warning m-2' to={"/addhackathon"}>New Hackathon</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default SelectAdd
