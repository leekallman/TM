import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby"
import headerStyles from './header.module.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fab)

const Header = () => {
    return(
        <header className={headerStyles.header} id={'top'}>
            <Link className={headerStyles.title}to ="/"><h1><span>Tort</span> Magazine
            </h1></Link>
        </header>
        )
    }
    
    
    export default Header;