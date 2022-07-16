import React, { useContext, useEffect } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { PeopleContext } from "../../contexts/people.context";
import { PeopleService } from "../../services/people.service";
import Error from "../../pages/error/error.view";
import Layout from "../../hoc/Layout/layout.component";
import Profile from "../../components/profile/profile.component";
import Wall from "../../components/wall/wall.component";
import { Grid, Segment } from "semantic-ui-react"

const People = () => {
    const [people, dispatch] = useContext(PeopleContext);
    const service = new PeopleService();
    let { uid } = useParams();

    useEffect(() => {
        service.initData(uid, 1).then(res => {
            dispatch("SET_DATA_SUMMARY", { people: res.data })
        })
        service.initData(uid, 2).then(res => {
            dispatch("SET_DATA_PROFILE", { people: res.data })
        })
    }, [])

    let dataRender = () => {
        switch (people.status) {
            case 200:
                return (
                    <Layout uid={uid}>
                        <Grid columns={2} padded="vertically" stackable container>
                            <Grid.Column width={5}>
                                <Profile />
                            </Grid.Column>
                            <Grid.Column width={11}>
                                <Wall />
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
                return <>loading...</>
        }
    }

    return dataRender()
}

export default People;