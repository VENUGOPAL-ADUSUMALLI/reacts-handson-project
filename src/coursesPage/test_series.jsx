import React from 'react'
import './test_series.css'
import './courses_pages.css'
function TestSeries() {
  return (
   <>
     <div className='test_series_page_container'> 
        <div className='image_container'> 
            <img className="test_series_image_styling" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1748272546/whhycgt65cqwrlkbvlz9.png?_upload_ref=ic_img_tool&__ar__=18.40"/>
        </div>
           <div> 
                <h1 className='courses_page_heading'> JEE courses for Class 12th </h1>
            </div>
             <div>
                  <div class="button-group">
                    <button class="filters-button">
                      <span class="icon filter-icon"></span>
                      Filters
                    </button>

                    <button class="dropdown-button">
                      Session: 2025–26
                      <span class="icon dropdown-icon"></span>
                    </button>

                      <button class="option-button">
                        <span class="icon live-icon"></span>
                        Live
                      </button>

                      <button class="option-button">
                        <span class="icon recorded-icon"></span>
                        Recorded
                      </button>

                      <button class="option-button">Practice</button>

                      <button class="option-button">
                        <span class="icon test-series-icon"></span>
                        ONLINE TEST SERIES
                      </button></div>
                </div>
            <div>
            <h2 className='courses_live_online_coruses_heading'>Test Series - JEE (Main)</h2>
            <hr className='custom_line_styling'/>
           </div>
            <div> 
                  <div className='align_itemns_container'> 
                     <div className='card_styling_container'>

                <div className='live_contianer'>
                <p className='Live_styling'> Live</p>
                <h4> JEE Enthusiast Online Course</h4>
                <h4 className='Live_styling_target'> Target 2026 </h4>
                <p> Live classes from ALLEN Kota's faculty</p>
                <p> up to 25 online tests</p>
                <p> 24/7 doubt resolution,academic,guidance and more</p>
                <div className='courses_rupess_container'>
                    <p className="price_styling">₹93,500</p>
                    <p className='tax_styling'> +Tax available</p>
                    <p  className='Know-More-container'><a className='para' href="/courses">Know More</a></p>
                </div>
                </div>
                    </div>
                    <div className='card_styling_container2'>

                <div className='live_contianer'>
                <p className='Live_styling'> Live</p>
                <h4> JEE Enthusiast Online Course</h4>
                <h4 className='Live_styling_target'> Target 2026 </h4>
                <p> Live classes from ALLEN Kota's faculty</p>
                <p> up to 25 online tests</p>
                <p> 24/7 doubt resolution,academic,guidance and more</p>
                <div className='courses_rupess_container'>
                    <p className="price_styling">₹93,500</p>
                    <p className='tax_styling'> +Tax available</p>
                    <p  className='Know-More-container'><a className='para' href="/courses">Know More</a></p>
                </div>
                </div>
                  </div>
                  </div>
                </div>
         <div className='align_image_center'>
             <img className='Courses-image-styling' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1748838250/gojim2ksa6bymzcosy86.png?_upload_ref=ic_img_tool&__ar__=4.03"/>
           </div>
     </div>

   </>
  )
}

export default TestSeries