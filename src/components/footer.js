import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby"
import footerStyles from './footer.module.css';

const Footer = () => {
    return(
        <footer className={footerStyles.footer}>
            <Link to ="/" className={footerStyles.logo}><h1><span>Tort</span> Magazine
            </h1></Link>

        <div className={footerStyles.about}>
                <p>We explore present societal issues through honest and in-depth 
            conversations with individuals directly or indirectly questioning 
            norms and committed to changing the way we live our lives.
            The content of this inaugural issue has been created together with 
            five writers and an editor. An illustrator, a photographer, a graphic designer, 
            a web developer, and an art director have all exercised their 
            command on the graphic and visual displays. During evenings, nights, 
            weekdays, and weekends leading up to this point, we’ve all been working 
            pro bono to bring forth what finally is Tort.
                </p>
         </div>

        <div className={footerStyles.team}>
            <div className={footerStyles.column1}>
            <h2>Editorial + Design Team</h2>
                <ul>
                    <li>Lizette Olofsson</li>
                    <li>Ashik Zaman</li>
                    <li>Lisa Lee Källman</li>
                    <li>Tor Westerlund</li>
                <li>Marta Casagrande</li>
                </ul>
            </div>  
            <div className={footerStyles.column2}>
            <h2>Contributors</h2>
                <ul>
                    <li>Riin Raanu</li>
                    <li>Maja Westerberg</li>
                    <li>Thulani Gushman</li>
                    <li>Clarice Gourant</li>
                </ul>
            </div>  

            <div className={footerStyles.column3}>
            <h2>Contact</h2>
            <ul>
                <li><a href="mailto:contact@tortmagazine.com">contact@tortmagazine.com</a></li>
                <li><a href="instagram.com/tort_magazine">instagram</a></li>
                <li><a href="facebook.com/tortmagazine">facebook</a></li>
            </ul>
            </div>
        </div>
        </footer>
        )
    }
    
    
    export default Footer;