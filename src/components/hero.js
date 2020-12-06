import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby"
import spread from "./../images/spread.jpg";
import Header from '../components/header.js';
import heroStyles from './hero.module.css';



const Hero = () => {
    return(
        <div className={heroStyles.hero}>
            <Header />
            <img src={spread} className={heroStyles.spread} alt="example spread" width="700px"/>
            <a className={heroStyles.purchase} href="/"><h2>Purchase</h2></a>
        </div>
    );
}
export default Hero;