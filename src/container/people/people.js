import React, { useEffect } from 'react';
import Layout from '../../hoc/Layout/Layout';
import { Box } from '@material-ui/core';
import classes from './People.module.scss';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { Route, Switch } from "react-router-dom";
import PersonalInfo from '../../components/Content/PersonalInfo/PersonalInfo';
import Home from '../../components/Content/Home/Home';
import AppErr from '../../AppErr';
import Base from '../../components/Base/Base';
import { connect } from 'react-redux';
import * as peopleActions from '../../store/actions/index';

const People = (props) => {
    useEffect(() => {
        props.onInitData(props.match.params.uid, 1);
        props.onInitData(props.match.params.uid, 2);
    })
    let dataRender = () => {
        switch(props.status){
            case 200:
                return(
                    <Layout uid={props.match.params.uid}>
                        <Box className={classes.Box}>
                            <ProfileCard uid={props.match.params.uid} />
                            <Switch>
                                <Route path="/profile/:uid" exact component={PersonalInfo} />
                                <Route path="/home/:uid" exact component={Home} />
                            </Switch>
                        </Box>
                    </Layout>
                )
            case 503:
                return <AppErr errorcode={"[503] Service Unavailable!"} 
                    info={"Server is down, kindly refresh the page"} />
            case 204:
                return <AppErr errorcode={"[204] No Response!"} 
                    info={"Data cannot find in the server, check URL or contact the administrator"}/>
            default:
                return <Base />
        }
    }
    let people = dataRender()

    return(
        <React.Fragment>
            {people}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        status: state.status
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitData: (uid, sid) => dispatch(peopleActions.initData(uid, sid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);