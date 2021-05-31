import React from 'react';

import { BrowserRouter as Router } from "react-router-dom"

import Navigation from "./components/Navbar"
import ContentSwitch from "./components/ContentSwitch"
import Footer from "./components/Footer"

function App() {

  
  return (
    <div>
      <Router>
        <Navigation/>
        <ContentSwitch/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;