import React from 'react';
import classes from './DrawerToggle.module.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
       <IconButton>
           { (props.arrow) ? <MenuIcon /> : <ArrowLeftIcon fontSize="large"/>}
       </IconButton>
    </div>
);

export default drawerToggle;