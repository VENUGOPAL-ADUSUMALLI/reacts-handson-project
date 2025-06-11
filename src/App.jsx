import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navabar from './compnents/navabar/Navbar'
import Footer from './footer/footer'
import Home from './pages/Home';
import JeeCoursesPage from './pages/JeeCoursesPage';
import TestSeries from './coursesPage/test_series';
import ResultsPage from './coursesPage/ResultsPage';
function App(){
 return (
    <>
    <BrowserRouter>
    <Navabar/>
      
     <Routes> 
      <Route path='/' element ={<Home/>}/>
      <Route path='courses' element={<JeeCoursesPage/>} />
      <Route path='Testseries' element={<TestSeries/>} />
      <Route path='Results' element= {<ResultsPage/>}/>
       </Routes>
        <Footer/>
       </BrowserRouter>

    </>
  )
}

 

export default App
