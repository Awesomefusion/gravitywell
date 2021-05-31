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
    backgroundColor: '#16161a'

  },
  navDisplayFlex: {
    display: 'flex',
    textDecoration: 'none !important',
    justifyContent: 'space-between',
  },
  desktopLinkText: {
    textDecoration: 'none !important',
    textTransform: 'uppercase',
    color: '#fffffe',
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


  const classes = useStyles();



  
  return (
      <div>
          <AppBar position="static" className={classes.navBar}>

            <div className={classes.navBar}>
              <Toolbar className={classes.navBar}>

                  <Typography variant="h4" className={classes.desktopTitle}>
                    Gravity Well
                  </Typography>
                  
              </Toolbar>
            </div>

          </AppBar>
      </div>
  );
}

export default Navbar;
