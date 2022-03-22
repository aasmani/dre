import React from 'react'
import "./Film.css"
import film_img from "./Film.jpg"

const Film = () => {
  return (
    <div id='film'>
    <h1 className='films'>Films</h1>
    {/* <hr className='line__film'></hr> */}
    <div className='film__details'>
       <img className='film_image' src={film_img}></img>
           <p className='film__descrip'>Corporate films are the perfect way to show the values and ethics 
of the company, whether it's a small scale business or a large 
corporate firm, we are here with our professional team of 
corporate filmmakers who will ensure that the right message will 
be delivered on the right platforms and to the specific target 
audience. </p>
       </div>
       <p className='bottom'>Reach media solutions</p>
       <hr className='bottomLine__film'></hr>
   </div>
  )
}

export default Film