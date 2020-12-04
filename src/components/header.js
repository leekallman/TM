import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby"
import headerStyles from './header.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Header = () => {
    // const data = useStaticQuery(graphql`
    // query {
    //     site {
    //         siteMetadata {
    //             title
    //         }
    //     }
    // }
    // `)

    return(
        <header className={headerStyles.header}>
        <h1>
        <Link className={headerStyles.title}to ="/"><span>Tort</span> Magazine
        </Link>
        </h1>
        {/* <nav>
        <ul className={headerStyles.navList}>
        <Link className= {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/read/">Read</Link> <br />
        <Link className= {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact/">Contact</Link> <br />
        <Link className= {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/shop/">Purchase</Link> <br />
        </ul>
        </nav>
        <div className={headerStyles.socialList}>
        <Link className= {headerStyles.social} to="https://instagram.com/tort_magazine"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
        <Link className= {headerStyles.social} to="https://facebook.com/tortmagazine"><FontAwesomeIcon icon={['fab', 'facebook']} /></Link>
        </div> */}
        </header>
        )
    }
    
    
    export default Header;