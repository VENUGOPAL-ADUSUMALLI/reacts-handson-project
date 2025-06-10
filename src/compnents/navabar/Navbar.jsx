import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Navabar() {
  return (
    <div className="navbar">
      <div> 
         <Link to="/" className='Link_decoration'>  
        <img className="image_style" src="https://images.seeklogo.com/logo-png/48/1/allen-career-institute-logo-png_seeklogo-482569.png" alt="allen logo"/>
        </Link>
      </div>
      <div className="menu"> 
        <Link to="/courses" className='Link_decoration'> <h4>Courses</h4>  </Link>
        <Link to="/Testcourses" className='Link_decoration'> <h4>Test Series</h4>  </Link>
        <h4>Results</h4>
        <h4>Study Materials</h4> 
        <h4>Scholarships</h4> 
        <h4>Books</h4> 
        <h4>More</h4> 
    </div>
    </div>
   
  )
}

export default Navabar
