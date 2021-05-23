import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, AppBar, Toolbar, BottomNavigation, Container } from "@material-ui/core"
import consbg from '../img/consbg.svg'

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundImage: `url(${consbg})`
  },
}));

function Home() {

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis ante ante. Quisque vel blandit nisl. Praesent aliquet dapibus nisi, sed convallis elit. Sed commodo aliquam convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque condimentum, arcu in lacinia volutpat, tellus dui tincidunt nulla, id elementum nibh dolor et risus. Nulla imperdiet dictum erat, quis consectetur sapien consectetur non. Cras turpis neque, tincidunt vitae elit a, finibus blandit elit. Proin auctor nisl non euismod vehicula. Sed nec nunc eu magna gravida dignissim. Etiam velit est, dictum nec feugiat ac, blandit et felis. Nulla tincidunt, urna vel viverra pharetra, turpis massa rutrum purus, a tristique est ligula ut turpis. Nulla aliquam eros nec augue lacinia convallis. Nulla fringilla ullamcorper sem, eu laoreet sapien lobortis vitae. Donec sodales blandit nibh, vel hendrerit urna rutrum non. In sollicitudin dui orci, ac maximus metus sagittis varius.
      </Typography>
    </div>
  );
}

export default Home;
