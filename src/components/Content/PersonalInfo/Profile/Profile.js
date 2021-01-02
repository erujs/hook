import React, { Fragment, Component } from 'react';
import { Box, Paper, Typography, Button, Modal, ButtonGroup } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import classes from '../../Content.module.scss';
import { connect } from 'react-redux';
import * as peopleActions from '../../../../store/actions/index';
import Input from './Input/Input';
import Text from './Text/Text';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            modal: false
        }
    }

    editHandler = () => {
        this.setState((prevState) => {
            return { edit: !prevState.edit };
        })
    }

    modalHandler = () => {
        this.setState((prevState) => {
            return { modal: !prevState.modal };
        })
    }

    submitHandler = () => {
        this.props.onUpdateData(this.props.uid, this.props.sid, this.props.data)
        this.editHandler()
        this.modalHandler()
    }

    checkEditableHandler = (data, key) => {
        if (data.settings.editable === 1) {
            return (
                this.state.edit
                    ? <Input data={this.props.data} form={data} key={key} id={key} />
                    : <Text form={data} key={key} />
            )
        } else if (data.settings.editable === 0) {
            return (
                <Text form={data} key={key} />
            )
        }
    }

    dynamicFormsHandler = () => {
        let dForms = <Box className={classes.Loader} />
        if (this.props.data) {
            dForms = this.props.data.map((form, key) => {
                return (
                    this.checkEditableHandler(form, key)
                )
            })
        }
        let people = (
            <Paper className={classes.Paper}>
                <Box className={classes.FormHeader}>
                    <Typography className={classes.Info}
                        tabIndex="0"
                        aria-label={this.props.contentName + "info header"}>
                        {this.props.contentName} info
                    </Typography>
                    <Box align="end" mt={2}>
                        {this.state.edit ?
                            <ButtonGroup variant="outlined" tabIndex="0" aria-label="button group">
                                <Button type="submit" color="primary"
                                    tabIndex="0"
                                    aria-label="save button"
                                    startIcon={<SaveIcon />}
                                    onClick={this.submitHandler}>Save
                            </Button>
                                <Button color="secondary"
                                    tabIndex="0"
                                    aria-label="cancel button"
                                    endIcon={<CancelIcon />}
                                    onClick={this.editHandler} ml={1}>Cancel
                            </Button>
                            </ButtonGroup>
                            : <Button variant="outlined" color="primary"
                                tabIndex="0"
                                aria-label="edit button"
                                endIcon={<EditIcon />}
                                onClick={this.editHandler}>Edit
                        </Button>}
                    </Box>
                </Box>
                {dForms}
            </Paper>
        )
        return people
    }

    render() {
        let people = this.dynamicFormsHandler()
        return (
            <Fragment>
                { people}
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.modal}
                    onClose={this.modalHandler}
                >
                    <Paper className={classes.Modal}>
                        <Typography>Save Success!</Typography>
                        <Button variant="outlined" color="primary"
                            onClick={this.modalHandler}
                            tabIndex="0"
                            aria-label="save success close button">Ok
                          </Button>
                    </Paper>
                </Modal>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateData: (eid, sid, data) => dispatch(peopleActions.updateData(eid, sid, data))
    }
}

export default connect(null, mapDispatchToProps)(Profile);