import React, { useContext } from 'react';
import { PeopleProvider } from '../../contexts/people.context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import classes from './ProfileCard.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import moment from 'moment';

const ProfileCard = (props) => {
  const [people] = useContext(PeopleProvider);

  let renderLogic = () => {
    if (people.profileSummary && people.profile) {
      let profile = people.profile
      let profileSummary = people.profileSummary
      let dname = profile[Object.keys(profile)[0]].map((obj, key) => obj.fieldName === "dname" ?
        <Typography>
          <Link href="#" className={classes.Name}
            tabIndex="0" aria-label={"display name = " + obj.value}>{obj.value}</Link>
        </Typography>
        : null)
      return (
        <Box className={classes.CustomWidth}>
          <Card className={classes.Card} align="center">
            <Avatar alt="Profile Image" className={classes.Avatar}
              src={"../../assets/" + profileSummary.fname + ".jpg"}
              tabIndex="0" aria-label={"profile image"} />
            {dname}
            <Typography>
              <Link href="#" className={classes.Role}
                tabIndex="0" aria-label={"position = " + profileSummary.position}>{profileSummary.position}</Link>
            </Typography>
          </Card>
          <Divider />
          <Card className={classes.Card} align="start">
            <Box className={classes.Box}>
              <LocationOnIcon className={classes.Icon} />
              <Typography className={classes.ProfileDetails}
                tabIndex="0" aria-label={"location = " + profileSummary.city + ', ' + profileSummary.country}>
                {profileSummary.city}, {profileSummary.country}
              </Typography>
            </Box>
            <Box className={classes.Box}>
              <AccessTimeIcon className={classes.Icon} />
              <Link href="#" className={classes.ProfileDetails}
                tabIndex="0" aria-label="timezone">
                {moment().format('LT')} (GMT+08:00) Kuala Lumpur, Singapore
              </Link>
            </Box>
            <Box className={classes.Box}>
              <MailOutlineIcon className={classes.Icon} />
              <Link href="#" className={classes.ProfileDetails}
                tabIndex="0" aria-label={"email = " + profileSummary.email}>{profileSummary.email}</Link>
            </Box>
          </Card>
        </Box>
      )
    } else return <Box className={classes.Loader} />
  }
  let profileCard = renderLogic()

  return (
    <Box className={classes.CustomWidth}>
      {profileCard}
    </Box>
  );
}

export default ProfileCard;