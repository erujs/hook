import React from 'react';
import { Box } from '@material-ui/core';
import classes from '../Content.module.scss';
import Profile from './Profile/Profile';
import { connect } from 'react-redux';

const PersonalInfo = (props) => {
    return (
        <Box className={classes.Box} align="start">
            <Profile data={props.profile} 
                    contentName="profile" 
                    uid={props.match.params.uid} 
                    sid={2} />
            <Box className={classes.CustomMargin}>
                {/* <Profile data={props.contact} 
                        contentName="contact" 
                        eid={props.match.params.eid}
                        sid={3} /> */}
            </Box>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        contact: state.contact  
    };
}

export default connect(mapStateToProps)(PersonalInfo);