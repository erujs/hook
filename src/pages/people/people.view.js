import React, { useContext, useEffect } from 'react';
import { useParams, Routes, Route } from "react-router-dom";
import moment from 'moment';
import { PeopleProvider } from '../../contexts/people.context';
import { PeopleService } from '../../services/people.service';
import Error from '../../pages/error/error.view';
import Layout from '../../hoc/Layout/layout.component';
import { Grid, Card, Image, Icon, Feed, Segment } from 'semantic-ui-react'
import classes from './people.module.scss';
// import ProfileCard from '../../components/ProfileCard/ProfileCard';
// import PersonalInfo from '../../components/Content/PersonalInfo/PersonalInfo';
// import Home from '../../components/Content/Home/Home';
// import Base from '../../components/Base/Base';

const People = () => {
    const [people, dispatch] = useContext(PeopleProvider);
    const service = new PeopleService();
    let { uid } = useParams();

    useEffect(() => {
        service.initData(uid, 1).then(res => {
            dispatch('SET_DATA_SUMMARY', { people: res.data })
        })
        service.initData(uid, 2).then(res => {
            dispatch('SET_DATA_PROFILE', { people: res.data })
        })
    }, [])

    let dataRender = () => {
        switch (people.status) {
            case 200:
                return (
                    <Layout uid={uid}>
                        {/* <ProfileCard uid={uid} />
                            <Routes>
                                <Route path="/profile/*" element={<PersonalInfo />} />
                                <Route path="/home/*" element={<Home />} />
                            </Routes> */}
                        <Grid columns={2} padded='horizontally' stackable>
                            {/* adjust width */}
                            <Grid.Column width={6}>
                                <Card className={classes.profile}>
                                    <Image src={require('../assets/tats.jpg')} wrapped ui={false} className={classes.image} />
                                    <Card.Content>
                                        <Card.Header>Jerus</Card.Header>
                                        <Card.Meta>Front End Developer</Card.Meta>
                                        <Card.Description></Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Meta>
                                            <Icon name='map pin' />
                                            Tokyo, Japan
                                        </Card.Meta>
                                        <Card.Meta>
                                            <a href="#"
                                                tabIndex="0" aria-label="timezone">
                                                <Icon name='time' />
                                                {moment().format('LT')} (GMT+08:00) Kuala Lumpur, Singapore
                                            </a>
                                        </Card.Meta>
                                        <Card.Meta>
                                            <a>
                                                <Icon name='mail' />
                                                jerus@email.com
                                            </a>
                                        </Card.Meta>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Feed>
                                        <Feed.Event>
                                            <Feed.Label>
                                                <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                            </Feed.Label>
                                            <Feed.Content>
                                                <Feed.Summary>
                                                    <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                                    <Feed.Date>1 Hour Ago</Feed.Date>
                                                </Feed.Summary>
                                                <Feed.Meta>
                                                    <Feed.Like>
                                                        <Icon name='like' />4 Likes
                                                    </Feed.Like>
                                                </Feed.Meta>
                                            </Feed.Content>
                                        </Feed.Event>

                                        <Feed.Event>
                                            <Feed.Label image='/images/avatar/small/helen.jpg' />
                                            <Feed.Content>
                                                <Feed.Summary>
                                                    <a>Helen Troy</a> added <a>2 new illustrations</a>
                                                    <Feed.Date>4 days ago</Feed.Date>
                                                </Feed.Summary>
                                                <Feed.Extra images>
                                                    <a>
                                                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                    </a>
                                                    <a>
                                                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                    </a>
                                                </Feed.Extra>
                                                <Feed.Meta>
                                                    <Feed.Like>
                                                        <Icon name='like' />1 Like
                                                    </Feed.Like>
                                                </Feed.Meta>
                                            </Feed.Content>
                                        </Feed.Event>

                                        <Feed.Event>
                                            <Feed.Label image='/images/avatar/small/jenny.jpg' />
                                            <Feed.Content>
                                                <Feed.Summary
                                                    date='2 Days Ago'
                                                    user='Jenny Hess'
                                                    content='add you as a friend'
                                                />
                                                <Feed.Meta>
                                                    <Feed.Like>
                                                        <Icon name='like' />8 Likes
                                                    </Feed.Like>
                                                </Feed.Meta>
                                            </Feed.Content>
                                        </Feed.Event>

                                        <Feed.Event>
                                            <Feed.Label image='/images/avatar/small/joe.jpg' />
                                            <Feed.Content>
                                                <Feed.Summary>
                                                    <a>Joe Henderson</a> posted on his page
                                                    <Feed.Date>3 days ago</Feed.Date>
                                                </Feed.Summary>
                                                <Feed.Extra text>
                                                    Ours is a life of constant reruns. We're always circling back to where
                                                    we'd we started, then starting all over again. Even if we don't run
                                                    extra laps that day, we surely will come back for more of the same
                                                    another day soon.
                                                </Feed.Extra>
                                                <Feed.Meta>
                                                    <Feed.Like>
                                                        <Icon name='like' />5 Likes
                                                    </Feed.Like>
                                                </Feed.Meta>
                                            </Feed.Content>
                                        </Feed.Event>

                                        <Feed.Event>
                                            <Feed.Label image='/images/avatar/small/justen.jpg' />
                                            <Feed.Content>
                                                <Feed.Summary>
                                                    <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                                                    <Feed.Date>4 days ago</Feed.Date>
                                                </Feed.Summary>
                                                <Feed.Extra images>
                                                    <a>
                                                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                    </a>
                                                    <a>
                                                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                    </a>
                                                </Feed.Extra>
                                                <Feed.Meta>
                                                    <Feed.Like>
                                                        <Icon name='like' />
                                                        41 Likes
                                                    </Feed.Like>
                                                </Feed.Meta>
                                            </Feed.Content>
                                        </Feed.Event>
                                    </Feed>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Layout>
                )
            case 503:
                return <Error errorcode={"[503] Service Unavailable!"}
                    info={"Server is down, kindly refresh the page"} />
            case 204:
                return <Error errorcode={"[204] No Response!"}
                    info={"Data cannot find in the server, check URL or contact the administrator"} />
            default:
                // return <Base />
                return <>loading...</>
        }
    }

    return dataRender()
}

export default People;