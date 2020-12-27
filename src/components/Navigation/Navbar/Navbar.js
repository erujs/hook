import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../../logo.svg';
import classes from './Navbar.module.scss';
import NavItem from './NavItem/NavItem';
import { NavLink } from "react-router-dom";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        background: 'linear-gradient(90deg, #614385 50%, #516395 100%)'
      }
    }
  }
});

const Navbar = (props) => {
  const mobile = ['xs', 'sm'];
  const laptop = ['md', 'lg', 'xl'];
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar className={classes.Toolbar}>
          <Hidden only={laptop}>
            <IconButton edge="start" color="inherit" aria-label="menu"
              onClick={props.drawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <NavLink className={classes.Link}
            exact to={"/home/" + props.eid}
            tabIndex="0" aria-label="people logo, link redirect to home">
            <img src={logo} className={classes.Logo} alt="logo" />
            <code className={classes.LogoTxt}>People</code>
          </NavLink>
          <div className={classes.div}>
            <Hidden only={mobile}>
              <NavItem link={"/home/" + props.eid} exact name="Home" />
              <NavItem link={"/profile/" + props.eid} exact name="Profile" />
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;