import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navabar from './compnents/navabar/Navbar'
import Footer from './footer/footer'
import Home from './pages/Home';
import JeeCoursesPage from './pages/JeeCoursesPage';
function App(){
 return (
    <>
    <BrowserRouter>
    <Navabar/>
      
     <Routes> 
      <Route path='/' element ={<Home/>}/>
      <Route path='courses' element={<JeeCoursesPage/>} />
      <Route path='Testcourses' element={<JeeCoursesPage/>} />
  
       </Routes>
        <Footer/>
       </BrowserRouter>

    </>
  )
}

 

export default App
