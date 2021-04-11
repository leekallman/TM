import React from 'react';

import * as heroStyles from './hero.module.css';
import Loading from "../components/loading.js";
import gif from '../images/tort-gif.gif';


const Hero = () => {

    return (
        <React.Fragment>
            <Loading />
            <div className={heroStyles.hero}>
                <img src={gif} alt="flip through magazine gif" className={heroStyles.gif} width="500px" />
                <a className={heroStyles.purchase} href="/#footer"><h2>Available Now</h2></a>
            </div>
        </React.Fragment>
    )
}
export default Hero
