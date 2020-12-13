import React from 'react';
// import spread from "../images/spread.jpeg";
import Header from '../components/header.js';
import heroStyles from './hero.module.css';
import video from "../images/sample.mp4"



const Hero = () => {
    return(
        <div className={heroStyles.hero}>
        <Header />
        {/* <img src={spread} className={heroStyles.spread} alt="example spread" width="700px"/> */}
        <video controls width="600px">
            <source src={video} type="video/mp4" />
        </video>
        <a className={heroStyles.purchase} href="/"><h2>Purchase</h2></a>
        </div>
        );
    }
    export default Hero;