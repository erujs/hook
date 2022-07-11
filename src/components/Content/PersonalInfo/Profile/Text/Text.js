import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import moment from 'moment';
import classes from '../../../content.module.scss';

const Text = (props) => {
    let formHandler = () => {
        let form = props.form
        let textValue = null
        switch(form.settings.element){
            case 3:
                textValue = 
                <Typography className={classes.Type} 
                    tabIndex="0"
                    aria-label={form.labelTxt + " value = " + form.value}>
                    {moment(new Date(form.value)).format('MMMM, Do')}
                </Typography>
            break;
            default:
                textValue = 
                <Typography className={classes.Type} 
                    tabIndex="0"
                    aria-label={form.labelTxt + " value = " + form.value}>
                    {form.value}
                </Typography>
        }
        return (
            <Box className={classes.Form}>
                <Box width="50%" mr={2}>
                    <Typography tabIndex="0" aria-label={form.labelTxt + " label"}>
                        {form.labelTxt}
                    </Typography>
                </Box>
                <Box width="50%">
                    {textValue}
                </Box>
            </Box>
        )
    }

    let formNullHandler = () => {
        if(props.form){
            return formHandler()
        } else {
            return null
        }
    }
    let text = formNullHandler()

    return(
        <React.Fragment>
            {text}
        </React.Fragment>
    )
}

export default Text;