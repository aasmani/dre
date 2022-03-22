import React from 'react'
import "./Contact.css"

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
         <div id="contact">
      <div className="social_media">
        <div className="company__logo">
        <h1>Reach Media Solution LLP</h1>
        </div>
        <div className="icons">
          <div >
          <a href='https://www.facebook.com'target="_blank"> <FaFacebookSquare className="social-media  "></FaFacebookSquare></a>

          <a href='https://www.twitter.com'target="_blank"> <FaTwitterSquare className="social-media  "></FaTwitterSquare></a>

          <a href='https://www.instagram.com'target="_blank"> <FaInstagramSquare className="social-media  "></FaInstagramSquare></a>

          <a href='https://www.youtube.com'target="_blank"> <FaYoutubeSquare className="social-media  "></FaYoutubeSquare></a>

         

         
        
         
         </div>
         <div className="address">
          <p>Reach Us</p>
        </div>
        </div>
       

      </div>
      <hr className='footerhr'></hr>

      <div className="footer">
        <div className="copyright">
          <p>Copyright © 2022 Reach Media Solution LLP</p>
        </div>
        
        <div className="calling">
        <p>Call Us </p>
        <p>**********</p>
        </div>
        <div className="location">
     <p>No. 12, Moledina Rd, opp. Hotel 
Arora Towers, Hulshur, Pune 
Cantonment, Pune, Maharashtra 
411001</p>
        </div>
      </div>


    </div>
    </>
  )
}

export default Contact