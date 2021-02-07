import React from 'react';

import heroStyles from './hero.module.css';
import Loading from "../components/loading.js";
import gif from '../images/tort-gif.gif';
import background_the_hug from '../images/background_the_hug.jpg'


const Hero = () => {

return (
        <React.Fragment>
            <Loading />
            <div className={heroStyles.hero} styles={{ backgroundImage:`url(${background_the_hug})` }}>
                <img src={gif} alt="flip through magazine pages" className={heroStyles.gif} width="500px" />
                <a className={heroStyles.purchase} href="/#footer"><h2>feb 26</h2></a>
            </div>
    </React.Fragment>
)
}
export default Hero