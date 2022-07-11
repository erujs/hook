import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import NavItem from '../Navbar/NavItem/NavItem';
import teal from '@mui/material/colors/teal';

const theme = createTheme({
  overrides: {
    MuiPaper: {
      colorPrimary: {
        backgroundColor: teal
      }
    }
  }
});

// const useStyles = makeStyles(theme => ({
//   list: {
//     width: 250,
//   }
// }));

const SideDrawer = (props) => {
  // const classes = useStyles();
  const sideList = () => (
    <Box
      // className={classes.list}
      role="presentation"
      onClick={props.close}
      onKeyDown={props.close}>
      <List>
        {/* <ListItem className={classes.ListItem}> */}
        <ListItem>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <NavItem link={"/home/" + props.uid} name="Home" />
        </ListItem>
        <ListItem>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <NavItem link={"/profile/" + props.uid} name="Profile" />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <ThemeProvider theme={theme}>
      <Drawer open={props.open} onClose={props.close}>
        {sideList()}
      </Drawer>
    </ThemeProvider>
  )
}

export default SideDrawer;