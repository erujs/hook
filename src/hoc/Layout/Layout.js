import React, { useState } from 'react';
// import Navbar from '../../components/Navigation/Navbar/Navbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const Layout = (props) => {
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState()

    // state = {
    //     sideDrawer: false
    // }
    // drawerCloseHandler = () => {
    //     this.setState({ sideDrawer: false });
    // }
    // drawerHandler = () => {
    //     this.setState((prevState) => {
    //         return { sideDrawer: !prevState.sideDrawer };
    //     });
    // }

    return (
        <>
            {/* <Navbar uid={this.props.uid} sid={this.props.sid} drawerToggle={this.drawerHandler} /> */}
            {/* <SideDrawer
                uid={this.props.uid} sid={this.props.sid}
                open={this.state.sideDrawer}
                close={this.drawerCloseHandler} /> */}
            <Menu size='massive' inverted>
                <Menu.Item name='Populus'>
                    <img alt="logo" src='https://react.semantic-ui.com/logo.png' />
                </Menu.Item>
                <Menu.Item>
                    <code>Populus</code>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={() => setActiveItem('home')}
                    />
                    <Menu.Item

                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={() => setActiveItem('profile')}
                    />
                    <Menu.Item>
                        {/* hide if in const laptop = ['md', 'lg', 'xl']; */}
                        <Checkbox
                            checked={visible}
                            // label={{ children: <code>visible</code> }}
                            onChange={(e, data) => setVisible(data.checked)}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            {/* hide if in const laptop = ['md', 'lg', 'xl']; */}
            <Grid columns={1}>
                <Grid.Column>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            onHide={() => setVisible(false)}
                            vertical
                            visible={visible}
                            width='thin'
                        >
                            <Menu.Item as='a'>
                                <Icon name='home' />
                                Home
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='user circle' />
                                Profile
                            </Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher dimmed={visible}>
                            {props.children}
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
            </Grid>
        </>
    )
};

export default Layout;