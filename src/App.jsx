import { useState } from 'react'
import './App.css'
import Navabar from './compnents/navabar/Navbar'
import Herobanner from './compnents/herobanner/herobanner'
import MainCard from './compnents/card/subCard/mainCard'
import Mainachivements from './compnents/achivements/sub_achivements/mainachivements'
import MainTestiMonialPage from './compnents/testimonials/testimonials_cards/main_testimonial_page'
import Footer from './footer/footer'
function App(){
 return (
    <>
       <Navabar/> 
       <Herobanner/>
       <MainCard/>
       <Mainachivements/>
       <MainTestiMonialPage/>
       <Footer/>
    </>
  )
}

 

export default App
