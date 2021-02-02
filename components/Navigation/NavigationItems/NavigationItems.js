import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
 <div>
      <div>
        <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Fabbro</NavigationItem>
        <NavigationItem link="/">Elettricista</NavigationItem>
        <NavigationItem link="/">Idraulico</NavigationItem>
    </ul>
    
   </div>
   
 </div>

);

export default navigationItems;