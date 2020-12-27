import React, { Component } from 'react';
import { Box, Card, Typography, Avatar, Link, Divider } from '@material-ui/core';
import classes from './ProfileCard.module.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import moment from 'moment';
import { connect } from 'react-redux';

class ProfileCard extends Component {
  renderLogic = () => {
    if (this.props.profileSummary) {
      let summary = this.props.profileSummary
      return (
        <Box className={classes.CustomWidth}>
          <Card className={classes.Card} align="center">
            <Avatar alt="Profile Image" className={classes.Avatar}
              src={require("../../assets/" + summary.fname + ".jpg")}
              tabIndex="0" aria-label={"profile image"} />
            <Typography>
              <Link href="#" className={classes.Name}
                tabIndex="0" aria-label={"display name = " + summary.dname}>{summary.dname}</Link>
            </Typography>
            <Typography>
              <Link href="#" className={classes.Role}
                tabIndex="0" aria-label={"position = " + summary.position}>{summary.position}</Link>
            </Typography>
          </Card>
          <Divider />
          <Card className={classes.Card} align="start">
            <Box className={classes.Box}>
              <LocationOnIcon className={classes.Icon} />
              <Typography className={classes.ProfileDetails}
                tabIndex="0" aria-label={"location = " + summary.city + ', ' + summary.country}>
                {summary.city}, {summary.country}
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
                tabIndex="0" aria-label={"email = " + summary.email}>{summary.email}</Link>
            </Box>
          </Card>
        </Box>
      )
    } else return <Box className={classes.Loader} />
  }

  render() {
    let profileCard = this.renderLogic
    return (
      <Box className={classes.CustomWidth}>
        {profileCard}
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    profileSummary: state.profileSummary
  }
}

export default connect(mapStateToProps)(ProfileCard);