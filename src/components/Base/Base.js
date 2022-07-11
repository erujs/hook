import React from 'react';
import classes from './Base.module.scss';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          background: 'linear-gradient(90deg, #0B486B 50%, #F56217 100%)'
        }
      }
    }
});

const Base = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
              <Toolbar className={classes.Toolbar}>
                  <img src={logo} className={classes.Logo} alt="logo" />
                  <code className={classes.LogoTxt}>Populus</code>
              </Toolbar>
            </AppBar>
            <Box className={classes.Box}>
                <Box className={classes.ProfileCardDiv}>
                    <Card className={classes.ProfileCard} />
                </Box>
                <Box className={classes.ContentDiv}>
                    <Card className={classes.Content} />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Base;