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
    Button,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import classes from './layout.module.scss';

const Layout = (props) => {
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState()

    return (
        <>
            <Menu size='massive' inverted className={classes.menu}>
                <Menu.Item name='Populus' icon='react' />

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={() => setActiveItem('home')}
                        className={'mobile hidden tablet hidden'}
                    />
                    <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={() => setActiveItem('profile')}
                        className={'mobile hidden tablet hidden'}
                    />
                    <Menu.Item className={'computer hidden large monitor hidden widescreen monitor hidden'}>
                        <Button
                            icon={visible ? 'close' : 'bars'}
                            className={classes.button}
                            onClick={() => setVisible((prevChecked) => !prevChecked)}
                        />
                        <Checkbox
                            onChange={(e, data) => setVisible(data.checked)}
                            checked={visible}
                            className={classes.checkbox}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Sidebar.Pushable as={Segment} className={classes.sidebar}>
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
                <Sidebar.Pusher dimmed={visible} className={classes.pusher}>
                    {props.children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    )
};

export default Layout;
