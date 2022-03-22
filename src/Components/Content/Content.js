import React from 'react'
import contents from "./conent1.jpg"
import "./Content.css"
import content_back from "../content_back.jpg"

const Content = () => {
  return (
    <div className='content'>
        {/* <div><img className='contents__img' src={contents}></img></div> */}
        <div className="background_content">
        <img src={content_back} alt="" />
        <div className='contents'>
        <ul className='description'>
            <li><a href='#intro'>Introduction</a></li>
            <li><a href='#about'>About <div>Us</div></a></li>
            <li><a href='#vision'>Our <div>Vision</div></a></li>
            <li><a href='#mission'>Our <div>Mission</div> </a></li>
            <li><a href='#services'>Our <div>Services</div> </a></li>
            <li><a href='#contact'>Contact <div>Us</div> </a></li>

        </ul>
        </div>
      </div>
        
        
    </div>
  )
}

export default Content
