import React from 'react';

import { Route, Switch, } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, AppBar, Toolbar, } from "@material-ui/core"

import Home from "../pages/Home"
import About from "../pages/About"

const useStyles = makeStyles((theme) => ({
  root:{
    paddingTop: '1.2em',
    paddingBottom: '1.2em',
    backgroundColor: 'grey',
  },
}));

function ContentSwitch() {

  const classes = useStyles();
  
  return (
    <div className={classes.root}>

        <Grid container direction="column">
          <Grid container>

            <Grid item xs={0} md={1} lg={2}/>

              <Grid item xs={12} md={10} lg={8}>
                <Switch>
                    <Route path="/" exact><Home/></Route>
                    <Route path="/about"><About/></Route>
                </Switch>
              </Grid>

            <Grid item xs={0} md={1} lg={2}/>

          </Grid>
        </Grid>
    </div>
  );
}

export default ContentSwitch;
