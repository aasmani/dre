import React, { useState } from 'react'
import "./Service.css"
import service_img from "./service_image.png"
import { useNavigate } from 'react-router-dom';
//import serive__background from "../service__background2.png"
import background_image_service from "../background_image1.png"

const Service = () => {
  const services = [
    "Designing",
    "Web Development",
    "Films",
    "Social Media Marketing",
  ];
  const[active , setActive] = useState(1)

  let navigate = useNavigate();



  return (
    <div id='services'>
     <div className='service_header'>
    <img src={background_image_service}></img>
      <div className='header_name_service'>
    
    <h1 className='service'>Our Services</h1>
      </div>
    </div>


    <div className='service__details'>
      <div className='service__details_img'>
      <img  onClick={()=>{
        navigate("/services")
      }} className='service_image' src={service_img}>
        
      </img>
      </div>

      <div className='packages'>
  <ul onClick={()=>{
        navigate("/services")
      }}>
  {services.map((pkg , index)=>{
    function clickHandler (){
    setActive(index+1)
  }
     return (
     <li
     className={active===index+1 ? "activate" : ""} onClick={clickHandler}
     >{pkg}</li>)
      
   })}
  </ul>
  </div>
     {/* <div className='service_content'>
       <ul>
         <li>
           Designing
         </li>
         <li>
           Films
         </li>
         <li>
          Social Media Marketing
         </li>
         <li>
           Web Development
         </li>
       </ul>
     </div> */}

      
           
       </div>
   </div>
  )
}

export default Service