import React, {useState, useEffect} from 'react';
import { useSpring, config, animated } from "react-spring";
// import spread from "../images/spread.jpeg";

import Header from '../components/header.js';
import heroStyles from './hero.module.css';
import video from "../images/sample.mp4"
import Loading from "../components/loading.js";
import gif from '../images/tort-gif.gif'


const Hero = () => {

return (
    <div>
            <Loading />
        <div className={heroStyles.hero}>
            {/* <Header /> */}
            {/* <img src={spread} className={heroStyles.spread} alt="example spread" width="700px"/> */}
            {/* <video autoPlay width="600px">
            <source src={video} type="video/mp4" />
            </video> */}
            <img src={gif} alt="flip through magazine pages" className={heroStyles.gif} width="500px" />
            <a className={heroStyles.purchase} href="/#footer"><h2>Purchase</h2></a>
        </div>
    </div>
)
}
export default Hero