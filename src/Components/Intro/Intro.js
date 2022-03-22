import React from 'react'
import img1 from "./Logo1.png"
import "./Intro.css"
import serive__background from "../service__background2.png"
import background_image_intro from "../background_image1.png"

const Intro = () => {
  return (
    <div id='intro'>
        {/* <div className='introduction'>

            <h1>Brief<span className='brief'>introduction</span></h1>
            </div> */}

            <div className='intro_header'>
    <img src={background_image_intro}></img>
      <div className='header_name_intro'>
      <div className='introduction'>

<h1>Brief<span className='brief'>introduction</span></h1>
</div>

      </div>
    </div>
          
       
        <div className='intro__details'>
        <div className="backgroundservice">
        <img src={serive__background} alt="" />
      </div>
            <p className='intro__descrip'>We at Reach Media solutions LLP are highly experienced team of Passionate and Professional
Directors, Cinematographer, Editors who work together to create beautiful and engaging audiovisuals. We strive to achieve work that breaks our Creative Boundaries, Specialized in Film
Productions, Corporate Films, Visual Effects, Post Production.
Whether your brand needs, next video campaign filmed at any location around the world, we
are here for you to achieve great results by offering End to End Services, from Content Strategy
to Post-Production.</p>
        </div>
    </div>
  )
}

export default Intro