import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, AppBar, Toolbar, BottomNavigation, Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root:{
  },
}));

function Home() {

  const classes = useStyles();
  
  return (
      <Container className={classes.root}>
          Home
      </Container>
  );
}

export default Home;
