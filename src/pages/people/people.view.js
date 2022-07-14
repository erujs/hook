import React, { useContext, useEffect } from 'react';
import { useParams, Routes, Route } from "react-router-dom";
import { PeopleProvider } from '../../contexts/people.context';
import { PeopleService } from '../../services/people.service';
import Error from '../../pages/error/error.view';
// import Layout from '../../hoc/Layout/Layout';
import { Placeholder, Container } from 'semantic-ui-react'
import classes from './people.module.scss';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
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
                        <ProfileCard uid={uid} />
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Paragraph>
                        </Placeholder>
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