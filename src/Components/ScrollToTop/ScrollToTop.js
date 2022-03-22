import React, { useState } from "react";
import"./ScrollToTop.css"

import logo from "./logo.png";
export default function ScrollToTop() {

  // const [scroll , setScroll] =useState(true)
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };


  return (
    <div className="scrolling" onClick={toTop} >
      <img src={logo}  alt="" />
    </div>
  );
}


