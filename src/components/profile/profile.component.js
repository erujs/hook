import React from "react";
import { Segment, Image, Header, Icon, Divider, Button, List } from "semantic-ui-react";
import classes from "./profile.module.scss";

const Profile = () => {
    return (
        <Segment.Group className={classes.profile}>
            {/* <Segment className={classes.segment}> */}
            <Image src={require('../assets/tats.jpg')} ui={false} className={classes.image} />
            {/* </Segment> */}
            <Segment className={classes.segment}>
                <Header size='medium' inverted>@jerus
                    <Header.Subheader>
                        Front End Developer
                    </Header.Subheader>
                </Header>
            </Segment>
            <Segment className={classes.segment} inverted>Carpe Noctem</Segment>
            <Segment className={classes.segment}>
                <Button.Group fluid>
                    <Button basic animated color='blue'>
                        <Button.Content visible>Swipe Left</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                    <Button.Or />
                    <Button basic animated color='red'>
                        <Button.Content visible>Swipe Right</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Button.Group>
            </Segment>
            <Divider />
            <Segment className={classes.segment} inverted>
                <List>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Kuala Lumpur, Singapore</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jerus@email.com'>jerus@email.com</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='linkify' />
                        <List.Content>
                            <a href='http://www.semantic-ui.com' target="_blank" rel="noreferrer">semantic-ui.com</a>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        </Segment.Group>
    )
}

export default Profile;
