import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';

const toolbar = ( props ) => (
    <div className={classes.Navbar}>
        <header className={[classes.Toolbar, classes[props.cont]].join(' ')}>
        <DrawerToggle arrow="true" clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo/>
        </div>
      <div className={classes.Nav}>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <a className={classes.Link} href="tel:247-42-303">
            <Button variant="contained" color="secondary">
                <CallIcon />
                <span className={classes.Number}>02345496</span>
            </Button>
        </a>
      </div>
    </header>
    </div>
);

export default toolbar;