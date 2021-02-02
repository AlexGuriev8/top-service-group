import React from 'react';
import Image from 'next/image'
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <Image 
            src="/topService.svg" 
            alt="MyBurger"
            width={150}
            height={50} 
        />
    </div>
);

export default logo;