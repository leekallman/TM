import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby"
import spread from "./../images/spread.jpg" 
import heroStyles from './hero.module.css';



const Hero = () => {
    return(
        <div className={heroStyles.hero}>
        <img src={spread} className={heroStyles.spread} alt="example spread" />
        </div>
    );
}
export default Hero;