import React, { useContext } from 'react';
import { PeopleProvider } from '../../../contexts/people.context';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import classes from '../content.module.scss';
import Profile from './Profile/Profile';

const PersonalInfo = (props) => {
    const [people] = useContext(PeopleProvider);
    let { uid } = useParams();

    return (
        <Box className={classes.Box} align="start">
            <Profile data={people.profile}
                contentName="profile"
                uid={uid}
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

export default PersonalInfo;