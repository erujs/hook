import React, { useContext, useEffect } from 'react';
import { useParams, Routes, Route } from "react-router-dom";
import { PeopleProvider } from '../../contexts/people.context';
import { PeopleService } from '../../services/people.service';
import Error from '../../pages/error/error.view';
// import Layout from '../../hoc/Layout/Layout';
import { Container, Card, Icon, Image } from 'semantic-ui-react'
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
                    // <Layout uid={uid}>
                    <Container className={classes.Box}>
                        {/* <ProfileCard uid={uid} />
                            <Routes>
                                <Route path="/profile/*" element={<PersonalInfo />} />
                                <Route path="/home/*" element={<Home />} />
                            </Routes> */}
                        <Card>
                            <Image src='https://images.unsplash.com/photo-1612271974453-15e684c6586b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>MJ</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2020</span>
                                </Card.Meta>
                                <Card.Description>
                                    Lorem Ipsum
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Container>
                    // </Layout>
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