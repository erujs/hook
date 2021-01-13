import React, { useState, Fragment } from 'react';
import { Box, Paper, Typography, Button, Modal, ButtonGroup } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import classes from '../../Content.module.scss';
import { connect } from 'react-redux';
import * as peopleActions from '../../../../store/actions/index';
import Input from './Input/Input';
import Text from './Text/Text';

const Profile = (props) => {
    const [settings, setSettings] = useState({
        edit: false,
        modal: false
    });

    let editHandler = () => {
        setSettings((prevState) => {
            return { ...settings, edit: !prevState.edit };
        })
    }

    let modalHandler = () => {
        setSettings((prevState) => {
            return { ...settings, modal: !prevState.modal };
        })
    }

    let submitHandler = () => {
        props.onUpdateData(props.uid, props.sid, props.data)
        editHandler()
        modalHandler()
    }

    let checkEditableHandler = (data, key) => {
        if (data.settings.editable === 1) {
            return (
                settings.edit
                    ? <Input form={data} key={key} id={key} />
                    : <Text form={data} key={key} />
            )
        } else if (data.settings.editable === 0) {
            return (
                <Text form={data} key={key} />
            )
        }
    }

    let dynamicFormsHandler = () => {
        let dForms = <Box className={classes.Loader} />
        let data = props.data
        if (data) {
            dForms = data[Object.keys(data)[0]].map((form, key) => {
                return (
                    checkEditableHandler(form, key)
                )
            })
        }
        return dForms;
    }
    let people = dynamicFormsHandler()
    
    return (
        <Fragment>
            <Paper className={classes.Paper}>
                <Box className={classes.FormHeader}>
                    <Typography className={classes.Info}
                        tabIndex="0"
                        aria-label={props.contentName + "info header"}>
                        {props.contentName} info
                    </Typography>
                    <Box align="end" mt={2}>
                        {settings.edit ?
                            <ButtonGroup variant="outlined" tabIndex="0" aria-label="button group">
                                <Button type="submit" 
                                    tabIndex="0"
                                    aria-label="save button"
                                    startIcon={<SaveIcon />}
                                    onClick={() => submitHandler()}>Save
                                </Button>
                                <Button color="secondary"
                                    tabIndex="0"
                                    aria-label="cancel button"
                                    endIcon={<CancelIcon />}
                                    onClick={() => editHandler()} ml={1}>Cancel
                                </Button>
                            </ButtonGroup>
                            : <Button variant="outlined" 
                                tabIndex="0"
                                aria-label="edit button"
                                endIcon={<EditIcon />}
                                onClick={() => editHandler()}>Edit
                        </Button>}
                    </Box>
                </Box>
                { people }
            </Paper>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={settings.modal}
                onClose={() => modalHandler()}>
                <Paper className={classes.Modal}>
                    <Typography>Save Success!</Typography>
                    <Button variant="outlined" color="primary"
                        onClick={() => modalHandler()}
                        tabIndex="0"
                        aria-label="save success close button">Ok
                      </Button>
                </Paper>
            </Modal>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateData: (eid, sid, data) => dispatch(peopleActions.updateData(eid, sid, data))
    }
}

export default connect(null, mapDispatchToProps)(Profile);