import React, { Component, Fragment } from 'react';
import { Typography, Box } from '@material-ui/core';
import moment from 'moment';
import classes from '../../../Content.module.scss';

class Text extends Component {
    constructor(props) {
        super(props);
    }

    formHandler = (form) => {
        let textValue = 
            <Typography className={classes.Type} 
                tabIndex="0"
                aria-label={form.labelTXT + " value = " + form.value}>
                {form.value}
            </Typography>
        switch(form.settings.element){
            case 3:
                textValue = 
                <Typography className={classes.Type} 
                    tabIndex="0"
                    aria-label={form.labelTXT + " value = " + form.value}>
                    {moment(new Date(form.value)).format('MMMM, Do')}
                </Typography>
            default:
                textValue = 
                <Typography className={classes.Type} 
                    tabIndex="0"
                    aria-label={form.labelTXT + " value = " + form.value}>
                    {form.value}
                </Typography>
        }
        return (
            <Box className={classes.Form}>
                <Box width="50%" mr={2}>
                    <Typography tabIndex="0" aria-label={this.props.form.labelTXT + " label"}>
                        {this.props.form.labelTXT}
                    </Typography>
                </Box>
                <Box width="50%">
                    {textValue}
                </Box>
            </Box>
        )
    }

    formNullHandler = (form) => {
        if(form.value !== ""){
            return this.formHandler(form)
        } else {
            return null
        }
    }

    render(){
        let text = this.formNullHandler(this.props.form)
        return(
            <Fragment>
                {text}
            </Fragment>
        )
    }
}

export default Text;