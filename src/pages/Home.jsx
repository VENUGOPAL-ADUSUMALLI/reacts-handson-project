import React from 'react'
import Herobanner from '../compnents/herobanner/herobanner'
import MainCard from '../compnents/card/subCard/mainCard'
import Mainachivements from '../compnents/achivements/sub_achivements/mainachivements'
import MainTestiMonialPage from '../compnents/testimonials/testimonials_cards/main_testimonial_page'
function Home() {
  return (
    <>
    <Herobanner/>
       <MainCard/>
       <Mainachivements/>
       <MainTestiMonialPage/>
    </>
  )
}

export default Home