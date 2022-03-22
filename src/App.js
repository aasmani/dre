import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

import Routing from './Components/Routing/Routing';

import Home from './Home';

function App() {
  return (
    <div >
     <Router >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Routing/>} />
   
        
      </Routes>
    </Router>
   
   
    </div>
  );
}

export default App;
