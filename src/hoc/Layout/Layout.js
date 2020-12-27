import React, {Component, Fragment} from 'react';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawer: false
    }
    drawerCloseHandler = () => {
        this.setState({sideDrawer: false});
    }
    drawerHandler = () => {
        this.setState((prevState) => {
            return {sideDrawer: !prevState.sideDrawer};
        });
    }
    render () {
        return (
            <Fragment>
                <Navbar uid={this.props.uid} sid={this.props.sid} drawerToggle={this.drawerHandler} />
                <SideDrawer 
                    uid={this.props.uid} sid={this.props.sid}
                    open={this.state.sideDrawer}
                    close={this.drawerCloseHandler} />
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
};

export default Layout;