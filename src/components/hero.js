import React from 'react';

import heroStyles from './hero.module.css';
import Loading from "../components/loading.js";
import gif from '../images/tort-gif.gif'


const Hero = () => {

return (
    <div>
            <Loading />
        <div className={heroStyles.hero}>
            <img src={gif} alt="flip through magazine pages" className={heroStyles.gif} width="500px" />
            <a className={heroStyles.purchase} href="/#footer"><h2>Purchase</h2></a>
        </div>
    </div>
)
}
export default Hero