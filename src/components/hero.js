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

        {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/650338109326125.5fd251c89a449.gif" width="800px"/> */}

        <a className={heroStyles.purchase} href="/#footer"><h2>Purchase</h2></a>
        </div>
        );
    }
    export default Hero;