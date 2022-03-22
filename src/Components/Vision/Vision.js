import React from 'react'
import "./Vision.css"
import vision_image from "./Visions.jpg"
import vission_back from "../service_back.jpg"
import background_image_vision from "../background_image1.png"

const Vision = () => {
  return (
    <div id='vision'>
      <div className="backgroundss">
        <img src={vission_back} alt="" />
      </div>

      <div className='vision_header'>
    <img src={background_image_vision}></img>
      <div className='header_name_vision'>
    
    <h1>Our Visions</h1>
      </div>
    </div>
    
    {/* <hr className='line__vision'></hr> */}
    <div className='vision__details'>
       {/* <img className='vision_image' src={vision_image}></img> */}
           <p className='vision__descrip'>
               <ol>
                   <li>Inspired, competent and empowered people.</li>
                   <li> Leadership in innovative technologies.</li>
                   <li> Leveraging excellent marketing tools and products for Digital business platforms.</li>
               </ol>
           </p>
       </div>
   </div>
  )
}

export default Vision