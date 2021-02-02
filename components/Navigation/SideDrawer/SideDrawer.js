import React from 'react';

import LogoSm from '../../Logo/LogoSm';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                   <LogoSm />
                   
                  <DrawerToggle clicked={props.drawerToggleClicked} />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;