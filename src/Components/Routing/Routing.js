import React from 'react'
import Design from './Design/Design'
import Social_Media from './Social_Media/Social_Media'
import Web_development from './Web_development/Web_development'
import Film from './Film/Film'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Routing = () => {
  return (
    <div style={{textAlign : "center"}}>
    <ScrollToTop/>
        <Design/>
        <Film/>
        <Social_Media/>
        <Web_development/>
    </div>
  )
}

export default Routing