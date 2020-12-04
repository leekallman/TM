import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby"
import blockStyles from './block.module.css';



const Block = () => {
    return(
        <div className={blockStyles.hero}>
        <img src={spread} className={heroStyles.spread} alt="example spread" />
        </div>
    );
}
export default Block;