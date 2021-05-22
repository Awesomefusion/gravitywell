import React, { useState, useEffect} from 'react';

import { BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import { Grid, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container, Menu, MenuItem, Drawer, Link  } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root:{
  },
  navBar:{
    backgroundColor: '#023e8a',
    textDecoration: 'none',
  },
  navDisplayFlex: {
    display: 'flex',
    textDecoration: 'none !important',
    justifyContent: 'space-between',
  },
  navbarDisplayFlex: {
    display: 'flex',
    textDecoration: 'none !important',
  },
  desktopLinkText: {
    textDecoration: 'none !important',
    textTransform: 'uppercase',
    color: 'white',
  },
  mobileLinkText: {
    textDecoration: 'none !important',
    textTransform: 'uppercase',
    color: 'black',
  },
  iconNav:{
    paddingLeft: '0px',
  }
}));

function Navbar() {

  const { desktopLinkText, mobileLinkText } = useStyles();

  const classes = useStyles();

  const navLinks = [
    { title: 'Home', path: '/'},
    { title: 'About', path: '/about'},
  ]

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <div>
        <Toolbar className={classes.navBar}>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>

            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
              {navLinks.map(({ title, path }) => (
                <Link 
                {...{
                  component: RouterLink,
                  to: path,
                  color: "inherit",
                  className: desktopLinkText,
                  key: title,
                }}
                >
                <MenuItem className={classes.linkText}>{title}</MenuItem>
                </Link>
              ))}
            </List>
          </Container>
        </Toolbar>
      </div>
    )
  }

  const displayMobile = () => {

    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true}));

    const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false}));

    const getDrawerChoices = () => {
      return navLinks.map(({ title, path}) => {
        return (
          <Link 
          {...{
            component: RouterLink,
            to: path,
            color: "inherit",
            className: mobileLinkText,
            key: title,
          }}
          >
          <MenuItem className={classes.mobileLinkText}>{title}</MenuItem>
          </Link>
        );
      });
    };

    return(
      <div>
        <Toolbar className={classes.navBar}>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>

            <IconButton
            {...{
              edge: "end",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              style: {paddingLeft: "0px"},
              onClick: handleDrawerOpen,
            }}
            >
              <MenuIcon/>
            </IconButton>

            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div>{getDrawerChoices()}</div>
            </Drawer>

          </Container>
        </Toolbar>
      </div>
    )
  }
  
  return (
      <div>
          <AppBar position="static">
            {mobileView ? displayMobile() : displayDesktop()}
          </AppBar>
      </div>
  );
}

export default Navbar;
