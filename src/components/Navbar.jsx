import React, { useState, useEffect} from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, IconButton, List, MenuItem, Drawer, Link, Typography  } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root:{
  },
  navBar:{
    backgroundColor: '#424242'

  },
  navDisplayFlex: {
    display: 'flex',
    textDecoration: 'none !important',
    justifyContent: 'space-between',
  },
  desktopLinkText: {
    textDecoration: 'none !important',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: '1.5rem',
  },
  mobileLinkText: {
    textDecoration: 'none !important',
    textTransform: 'uppercase',
    color: 'black',
  },
  iconNav:{
    paddingLeft: '0px',
  },
  desktopTitle:{
    padding: '1rem',
    marginRight: '2rem',
  },
  mobileTitle:{
    flex: '1',
  }
}));

function Navbar() {

  const { desktopLinkText, mobileLinkText } = useStyles();

  const classes = useStyles();

  const navLinks = [
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
      <div className={classes.navBar}>
        <Toolbar className={classes.navBar}>

            <Typography variant="h4" className={classes.desktopTitle}>
              Gravity Well
            </Typography>

            <IconButton edge="start" color="inherit" aria-label="menu" component={RouterLink} to='/'>
              <HomeIcon fontSize="large"/>
            </IconButton>

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
                <MenuItem className={classes.desktopLinkText}>{title}</MenuItem>
                </Link>
              ))}
            </List>
            
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
      <div className={classes.navBar}>
        <Toolbar className={classes.navBar}>

          <Typography variant="h6" className={classes.mobileTitle}>
              Gravity Well
            </Typography>

            <div>
              <IconButton edge="end" color="inherit" aria-label="menu" component={RouterLink} to='/'>
                <HomeIcon/>
              </IconButton>

              <IconButton
              {...{
                edge: "end",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                style: {textAlign: "right",},
                onClick: handleDrawerOpen,
              }}
              >
                <MenuIcon/>
              </IconButton>
            </div>

            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div>{getDrawerChoices()}</div>
            </Drawer>
        </Toolbar>
      </div>
    )
  }
  
  return (
      <div>
          <AppBar position="static" className={classes.navBar}>
            {mobileView ? displayMobile() : displayDesktop()}
          </AppBar>
      </div>
  );
}

export default Navbar;
