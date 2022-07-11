import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Hidden from '@mui/material/Hidden';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../logo.svg';
import classes from './Navbar.module.scss';
import NavItem from './NavItem/NavItem';

const theme = createTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        background: 'linear-gradient(90deg, #0B486B 50%, #F56217 100%)'
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
            to={"/home/" + props.uid}
            tabIndex="0" aria-label="people logo, link redirect to home">
          <Toolbar className={classes.Toolbar}>
            <img src={logo} className={classes.Logo} alt="logo" />
            <code className={classes.LogoTxt}>Populus</code>
          </Toolbar>
          </NavLink>
          <div className={classes.div}>
            <Hidden only={mobile}>
              <NavItem link={"/home/" + props.uid} name="Home" />
              <NavItem link={"/profile/" + props.uid} name="Profile" />
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;