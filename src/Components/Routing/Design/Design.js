import React from 'react'
import "./Design.css"
import design_img from "./design.jpg"

const Design = () => {
  return (
    <div id='design'>
    <div className='heading_design'>
    <h1 className='designs'>Designing</h1>
    
    </div>
    <div className='design__details'>
       <img className='design_image' src={design_img}></img>
           <p className='design__descrip'>Designing is one of the most important factor when 
building brand. A creative and high-quality design is what 
will set you apart from your competition and help you 
garner the desired emotion from customers.</p>
       </div>
       <p className='bottom'>Reach media solutions</p>
       <hr className='bottomLine__film'></hr>
   </div>
  )
}

export default Design