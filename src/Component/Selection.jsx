import React from 'react';
import {Link,useNavigate} from "react-router-dom";

function Selection({setopen}) {
  return (
    <div className="selection bg-success p-3" data-aos="zoom-in"  data-aos-duration="1000">
        <div id="ab11">
          <p className='d-flex flex-row-reverse text-danger' id='close' onClick={()=>setopen(false)}>X</p>
          <div id="ab12">
            <Link className='text-black btn btn-warning m-2' to={"/signup"}>Login As a Student</Link>
          </div>
          <div id="ab12">
          <Link className='text-black btn btn-warning m-2' to={"/adminsignup"}>Login As a Admin</Link>
          </div>
        </div>
    </div>
  )
}

export default Selection
