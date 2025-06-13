import React from 'react'
import './ResultsPage.css'
function ResultsPage() {
  return (
    <div>
        <div className='results_container'>
              <div className='results_align_image_center'>
             <img className='results-image-styling' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749120789/lqty9orhcrntyfhrhfny.png?_upload_ref=ic_img_tool&__ar__=3.42"/>
           </div>
             <div className='results_align_image_center'>
             <img className='results-image2-styling' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749023473/p0gyinjijn9bjyzgfiip.png?_upload_ref=ic_img_tool&__ar__=0.94"/>
           </div>
           <div className='winnig_container'> 
            <img className="Winning_image_styling" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749624797/kifduv1bctckuvnhvs3z.png?_upload_ref=ic_img_tool&__ar__=1.23"/>
           </div>
           <div>
            <div className='Toppers_container'> 
              <h1 class="Toppers_haeading"> Hear from our 2025 toppers</h1>
            </div>
            <div> 
              <div class="video-wrapper">
                  <video
                    class="promo-video"
                    autoplay
                    muted
                    loop
                    playsinline
                    controls
                  >
                  <source src="https://res.cloudinary.com/dpzpn3dkw/video/upload/w_1600,f_auto,q_auto/v1749190791/zrrft8m3t0xzreg74gfq.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
           </div>
        </div>
        
        
    </div>
  )
}

export default ResultsPage