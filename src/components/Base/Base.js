import React from 'react';
import classes from './Base.module.scss';
import { Box, Card, AppBar, Toolbar } from '@material-ui/core';
import logo from '../../logo.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
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