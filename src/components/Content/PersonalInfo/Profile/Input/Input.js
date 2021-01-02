import React, { Component } from 'react';
import { TextField, Box, Typography } from '@material-ui/core';
import classes from '../../../Content.module.scss';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: true,
            email: true,
            text: true
        }
    }

    validate(name, value){
        switch(name) {
            case 'text':
                if(value.trim() !== ''){
                    return true
                };
            case 'email':
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                if(pattern.test(value)){
                  return true
                };
            case 'number':
                const regexr = /[\d()x-]/;
                if(regexr.test(value)){
                    return true
                };
            default:
                return false;
        }
    }

    changeHandler = (event) => {
        let data = this.props.data
        let someObj = data[(event.target.id).replace('key', '')]
        let valid = this.validate(event.target.name, event.target.value);
        this.setState({[event.target.name]: valid})
        someObj.value = event.target.value;
    }
    
    inputHandler = (form, key) => {
        switch(form.settings.element){
            case 1:
                return(
                    <TextField variant="outlined" 
                        aria-label={form.labelTxt + " input"}
                        tabIndex="0"
                        id={'key' + key}
                        name="number"
                        error={!this.state.number}
                        defaultValue={form.value}
                        onChange={this.changeHandler.bind(this)}
                    />
                );
            case 2:
                return(
                    <TextField variant="outlined" 
                        aria-label={form.labelTxt + " input"}
                        tabIndex="0"
                        id={'key' + key}
                        name="email"
                        error={!this.state.email}
                        defaultValue={form.value}
                        onChange={this.changeHandler.bind(this)}
                    />
                );
            default:
                return(
                    <TextField variant="outlined" 
                        aria-label={form.labelTxt + " input"}
                        tabIndex="0"
                        id={'key' + key}
                        name="text"
                        error={!this.state.text}
                        defaultValue={form.value}
                        onChange={this.changeHandler.bind(this)}
                    />
                );
        }
    }
    

    render() {
        let input = this.inputHandler(this.props.form, this.props.id)

        const theme = createMuiTheme({
            overrides: {
                MuiOutlinedInput: {
                    input: {
                        padding: 10
                    },
                },
            },
        });

        return(
            <ThemeProvider theme={theme}>
                <Box className={classes.Form}>
                    <Box width="50%" mr={2}>
                        <Typography tabIndex="0" aria-label={this.props.form.labelTxt + " label"}>
                            {this.props.form.labelTxt}
                        </Typography>
                    </Box>
                    <Box width="50%">
                        {input}
                    </Box>
                </Box>
            </ThemeProvider>
        )
    }
}

export default Input;