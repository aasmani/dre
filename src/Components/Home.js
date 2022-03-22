import React from 'react';

import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Vision from './Components/Vision/Vision';
import Mission from './Components/Mission/Mission';

import Service from './Components/servicee/Service';
import Contact from './Components/Contact/Contact';

function Home() {
  return (
    <div >
     <Header/>
     <Content/>
     <Intro/>
     <About/>
     <Vision/>
     <Mission/>
     <Service/>
     <Contact/>

    </div>
  );
}

export default Home;
