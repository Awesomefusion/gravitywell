import React from 'react';

import { Route, Switch, } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"

import Home from "../pages/Home"
import About from "../pages/About"

const useStyles = makeStyles((theme) => ({
  root:{
  },
}));

function ContentSwitch() {

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
                <Switch>
                    <Route path="/" exact><Home/></Route>
                    <Route path="/about"><About/></Route>
                </Switch>
    </div>
  );
}

export default ContentSwitch;
