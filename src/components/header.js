import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby"
import headerStyles from './header.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Header = () => {
    return(
        <header className={headerStyles.header}>
        <h1>
        <Link className={headerStyles.title}to ="/"><span>Tort</span> Magazine
        </Link>
        </h1>
        </header>
        )
    }
    
    
    export default Header;