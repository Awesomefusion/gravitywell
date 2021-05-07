import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container,  } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root:{
  },
  navBar:{
    backgroundColor: '#023e8a',
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navbarDisplayFlex: {
    display: `flex`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
}));

function Navbar() {

  const classes = useStyles();

  const navLinks = [
    { title: 'About', path: '/about'},
  ]
  
  return (
      <div>
          <AppBar position="static">
            <Toolbar className={classes.navBar}>
              <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
                <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="home">
                  <HomeIcon fontSize="large"/>
                </IconButton>

                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                  {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title}/>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Container>
            </Toolbar>
          </AppBar>
      </div>
  );
}

export default Navbar;
