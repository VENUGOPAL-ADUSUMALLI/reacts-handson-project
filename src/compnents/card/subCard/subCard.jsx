import React from 'react'
import './subCard.css'
function SubCard() {
  return (
    <div className='container'>
      <div className='Card'>
        <h1 className='main_heading'> 
          Jee Courses
        </h1>
       <p  className='para'><a className='para' href="/courses">View Courses</a></p>

      </div>
         <div className='Card1'>
        <h1 className='main_heading'> 
          Neet Courses
        </h1>
       <p  className='para'><a className='para' href="/courses">View Courses</a></p>

      </div>
         <div className='Card2'>
        <h1 className='main_heading'> 
          Courses for 6-10
        </h1>
       <p  className='para'><a className='para' href="/courses">View Courses</a></p>

      </div>
    </div>
  )
}

export default SubCard