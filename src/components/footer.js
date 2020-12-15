import React from 'react';
// import {Link, graphql, useStaticQuery} from "gatsby"
import footerStyles from './footer.module.css';
import gif from "./../images/test.gif" 
import { Link } from 'react-scroll'
import IssueOne from '../components/IssueOne';


const Footer = () => {
    return(
        <footer className={footerStyles.footer} id="footer">
            <div className={footerStyles.spinner}> 
                <IssueOne className={footerStyles.issue}/>
            </div>
            <Link to='top' smooth={true} className={footerStyles.logo}><h1><span>Tort</span> Magazine
            </h1></Link>

            <div className={footerStyles.about}>
                <p>ISSUE ONE<br/>
                Tort Magazine Issue One was conceived with a single idea: to create a 
                dialogue between the conceptual artist Vadim Zakharov and the fashion world. 
                There are no off-bounds topics. Vadim Zakharov is an artist who expands 
                his media across all fields from painting, drawing and photography to video, 
                performance and installation, making a printed issue was both a challenge and a game.        
                </p>
                <br/>
            </div>

            <div className={footerStyles.column1}>
                <p>
                    Contributors: Ashik Zaman, Riin Raanu, Maja Winberg, Thulani Gushman, Clarice Goulart.<br/>
                    <br/>
                    Photographers: William Harvey Howe, Emilia Stålhammar
                    <br/><br/>
                    208 pp, 22 × 28 cm, softcover, 2019.<br/>
                    ISBN 978-3-95679-579-4<br/>
                    100SEK
                    {/* <a className={footerStyles.purchase} href="/">BUY NOW</a>    */}
                </p>
            </div>

            <div className={footerStyles.column2}>
                <div className={footerStyles.buy}>
                        <a href="https://www.shop.tortmagazine.com">
                            <h2>Buy now</h2>
                        </a>
                </div>
                <ul>
                <li><a href="mailto:contact@tortmagazine.com">contact@tortmagazine.com</a></li>
                <li><a href="https://instagram.com/tort_magazine" target="_blank" >instagram</a></li>
                <li><a href="https://facebook.com/tortmagazine" target="_blank" >facebook</a></li>
                </ul>
            </div>  

            <div className={footerStyles.column3}>
                
            </div>
        
        </footer>
        )
    }
    
    
    export default Footer;