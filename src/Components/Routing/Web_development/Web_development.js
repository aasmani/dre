import React from 'react'
import "./Web_development.css"
import web_img from "./web_develoment.jpg"


const Web_development = () => {

  return (
    <div id='web'>
    <h1 className='webs'>Web Development</h1>
    {/* <hr className='line__web'></hr> */}
    <div className='web__details'>
       <img className='web_image' src={web_img}></img>
           <p className='web__descrip'>Web development is the work involved in developing a website for the 
Internet (World Wide Web) or an intranet (a private network). Among Web 
professionals, "Web development" usually refers to the main non-design 
aspects of building Web sites: writing markup and coding.</p>
       </div>
       <p className='bottom'>Reach media solutions</p>
       <hr className='bottomLine__film'></hr>
   </div>
  )
}

export default Web_development