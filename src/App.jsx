import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, AppBar, Toolbar, BottomNavigation, Container } from "@material-ui/core"

import Navigation from "./components/Navbar"
import ContentSwitch from "./components/ContentSwitch"

const useStyles = makeStyles((theme) => ({
  root:{
  },
}));

function App() {

  const classes = useStyles();
  
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