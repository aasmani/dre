import React from 'react'
import mission_img from "./mission.png"
import "./Mission.css"
import mission_background from "../1.jpg"
import background_image_mission from "../background_image1.png"

const Mission = () => {
  return (
    <div id='mission' >
     <div className="background">
        <img src={mission_background} alt="" />
      </div>
      <div className='mission_header'>
    <img src={background_image_mission}></img>
      <div className='header_name_mission'>
    
    <h1>Our Mission</h1>
      </div>
    </div>
  
    
     <div className='mission__details'>
        {/* <img className='mission_image' src={mission_img}></img> */}
            <p className='mission__descrip'>
            Reach Media Solutions LLP aims to provide digital solutions and strives to 
be part of top 50
elite media marketing companies offering premier services in the field of 
social media, video
marketing and virtual business communication
            </p>
        </div>
    </div>
  )
}

export default Mission