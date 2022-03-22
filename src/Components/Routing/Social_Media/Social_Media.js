import React from 'react'
import "./Social_Media.css"
import social_img from "./social__media.jpg"

const Social_Media = () => {
  return (
    <div id='social'>
    <h1 className='socials'>Social Media Marketing</h1>
    {/* <hr className='line__social'></hr> */}
    <div className='social__details'>
       <img className='social_image' src={social_img}></img>
           <p className='social__descrip'>Digital marketing is the act of promoting and selling products and services by 
leveraging online marketing tactics such as social media marketing, search 
marketing, and email marketing.</p>
       </div>
       <p className='bottom'>Reach media solutions</p>
       <hr className='bottomLine__film'></hr>
   </div>
  )
}

export default Social_Media