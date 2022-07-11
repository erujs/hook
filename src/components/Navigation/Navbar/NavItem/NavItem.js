import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './NavItem.module.scss';

const navItem = (props) => (
    <NavLink 
        to={props.link}
        // className={classes.Link}
        // activeClassName={classes.active}
        className={isActive => (classes.Link) + (isActive ? " " + (classes.active) : "")}
        tabIndex="0" aria-label={props.name}>
        {props.name}
    </NavLink>
);

export default navItem;