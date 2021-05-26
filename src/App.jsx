import React from 'react';

import { BrowserRouter as Router } from "react-router-dom"

import Navigation from "./components/Navbar"
import ContentSwitch from "./components/ContentSwitch"


function App() {

  
  return (
    <div>
      <Router>
        <Navigation/>
        <ContentSwitch/>
      </Router>
    </div>
  );
}

export default App;