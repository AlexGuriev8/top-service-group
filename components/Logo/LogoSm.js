import React from 'react';
import Image from 'next/image'
import classes from './Logo.module.css';

const logosm = (props) => (
    <div className={classes.LogoSm} style={{height: props.height}}>
      <Image 
            src="/topService.svg" 
            alt="MyBurger"
            width={150}
            height={50} 
        />
    </div>
);

export default logosm;