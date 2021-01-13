import React, { useState } from 'react';
import { TextField, Box, Typography } from '@material-ui/core';
import classes from '../../../Content.module.scss';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            input: {
                padding: 10
            },
        },
    },
});

const Input = (props) => {
    const [validation, setValidation] = useState({
        number: true,
        email: true,
        text: true
    })

    let validate = (name, value) => {
        switch(name) {
            case 'text':
                if(value.trim() !== ''){
                    return true
                };
            break;
            case 'email':
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                if(pattern.test(value)){
                  return true
                };
            break;
            case 'number':
                const regexr = /[\d()x-]/;
                if(regexr.test(value)){
                    return true
                };
            break;
            default:
                return false;
        }
    }

    let changeHandler = (event) => {
        let data = props.form
        let valid = validate(event.target.name, event.target.value);
        setValidation({...validation, [event.target.name]: valid})
        data.value = event.target.value;
    }
    
    let inputHandler = (form, key) => {
        let textField = null;
        switch(form.settings.element){
            case 1:
                textField = 
                    <TextField variant="outlined" 
                        aria-label={form.labelTxt + " input"}
                        tabIndex="0"
                        id={'key' + key}
                        name="number"
                        error={!validation.number}
                        defaultValue={form.value}
                        onChange={changeHandler.bind(this)}
                    />
            break;
            case 2:
                textField = 
                    <TextField variant="outlined" 
                        aria-label={form.labelTxt + " input"}
                        tabIndex="0"
                        id={'key' + key}
                        name="email"
                        error={!validation.email}
                        defaultValue={form.value}
                        onChange={changeHandler.bind(this)}
                    />
            break;
            default:
                textField = 
                    <TextField variant="outlined" 
                        aria-label={form.labelTxt + " input"}
                        tabIndex="0"
                        id={'key' + key}
                        name="text"
                        error={!validation.text}
                        defaultValue={form.value}
                        onChange={changeHandler.bind(this)}
                    />
        }
        return textField;
    }
    let input = inputHandler(props.form, props.id)

    return(
        <ThemeProvider theme={theme}>
            <Box className={classes.Form}>
                <Box width="50%" mr={2}>
                    <Typography tabIndex="0" aria-label={props.form.labelTxt + " label"}>
                        {props.form.labelTxt}
                    </Typography>
                </Box>
                <Box width="50%">
                    {input}
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Input;