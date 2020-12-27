import React from 'react';
import classes from './Loader.module.scss';
import { Box } from '@material-ui/core';

const Loader = () => {
    return (
        <Box className={classes.loader} />
    )
}

export default Loader;