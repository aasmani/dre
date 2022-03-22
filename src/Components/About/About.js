import React from 'react'
import "./About.css"
import about_img from "./about_us.jpg"
import about__back from "../about_us_dreach_media_1.jpg"
import background_image_about from "../background_image1.png"

const About = () => {
  return (
    <div id='about'>
     <div className="backgrounds">
        <img src={about__back} alt="" />
      </div>

      <div className='about_header'>
    <img src={background_image_about}></img>
      <div className='header_name_about'>
    
    <h1 >About Us</h1>
      </div>
    </div>


     {/* <h1 className='about_Us'>About Us</h1> */}
     
     {/* <hr className='line__about'></hr> */}
     <div className='about__details'>
        {/* <img className='about_image' src={about_img}></img> */}
            <p className='about__descrip'>Reach Media Solutions is based in Pune. We are highly 
experienced team of Passionate and Professional 
Directors, Cinematographer, Editors who work together to 
create beautiful and engaging audio-visuals. We strive to 
achieve work that breaks our Creative Boundaries, 
Specialized in Film Productions,3D Animation, Visual 
Effects, Post Production, Designing and social media 
marketing, web development. 
Whether your brand needs, next video campaign filmed at 
any location around the world, we are here for you to 
achieve great results by offering End to End Services, from 
Content Strategy to Post-Production.</p>
        </div>
    </div>
  )
}

export default About