import React from "react";
import { Segment, Image, Header, Icon, Divider, Button } from "semantic-ui-react";
import classes from "./profile.module.scss";
import moment from "moment";

const Profile = () => {
    return (
        <Segment.Group className={classes.profile}>
            <Segment className={classes.segment}>
                <Image src={require('../assets/tats.jpg')} ui={false} className={classes.image} />
            </Segment>
            <Segment className={classes.segment}>
                <Header size='medium' inverted>Jerus
                    <Header.Subheader>
                        Front End Developer
                    </Header.Subheader>
                </Header>
            </Segment>
            <Segment className={classes.segment} inverted>Carpe Noctem</Segment>
            <Segment className={classes.segment}>
                <Button.Group>
                    <Button animated color='red'>
                        <Button.Content visible>Swipe Left</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                    <Button.Or />
                    <Button animated color='green'>
                        <Button.Content visible>Swipe Right</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Button.Group>
            </Segment>
            <Divider />
            <Segment className={classes.segment} inverted>
                <Icon name='map pin' />
                Kuala Lumpur, Singapore
                <a href="#"
                    tabIndex="0" aria-label="timezone">
                    <Icon name='time' />
                    {moment().format('LT')} (GMT+08:00)
                </a>
                <a>
                    <Icon name='mail' />
                    jerus@email.com
                </a>
            </Segment>
        </Segment.Group>
    )
}

export default Profile;
