import React from 'react';
import {Box,
        List,
        ListItem,
        ListItemIcon,
        Drawer} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import NavItem from '../Navbar/NavItem/NavItem';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
    overrides: {
      MuiPaper: {
        colorPrimary: {
          backgroundColor: teal
        }
      }
    }
});

const useStyles = makeStyles(theme => ({
    list: {
      width: 250,
    }
}));

const SideDrawer = (props) => {
    const classes = useStyles();
    const sideList = () => (
        <Box
          className={classes.list}
          role="presentation"
          onClick={props.close}
          onKeyDown={props.close}>
          <List>
            <ListItem className={classes.ListItem}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <NavItem link={"/home/" + props.uid} exact name="Home" />
            </ListItem>
            <ListItem>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <NavItem link={"/profile/" + props.uid} exact name="Profile" />
            </ListItem>
          </List>
        </Box>
    );
    return(
        <ThemeProvider theme={theme}>
            <Drawer open={props.open} onClose={props.close}>
                {sideList()}
            </Drawer>
        </ThemeProvider>
    )
}

export default SideDrawer;