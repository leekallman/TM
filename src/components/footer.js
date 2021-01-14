import React from 'react';
import footerStyles from './footer.module.css';
import { Link } from 'react-scroll'
import IssueOne from '../components/IssueOne';


const Footer = () => {
    return(
        <footer className={footerStyles.footer} id="footer">
            <a href="#" className={footerStyles.logo}><h1><span>Tort</span> Magazine
            </h1></a>
            <div className={footerStyles.spinner}> 
                <IssueOne className={footerStyles.issue}/>
            </div>
            <div className={footerStyles.about}>
                <p>ISSUE ONE<br/>
                Unwritten rules exist everywhere, in every culture and religion. In the world of art and on the dance scene, in sexual relations as well as in marriages. Even among species, we have notions of the correct behavior. Rarely we do remember the creator of these norms – more often we know who broke them. Tort explores present societal conceptions through honest conversations with individuals committed to change.      
                </p>
                <br/>
            </div>

            <div className={footerStyles.column1}>
                <p>
                    Editorial: Liz Olofsson, Lisa Lee, Marta Casagrande, Tor Westerlund<br/><br/>
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
        </footer>
        )
    }
    
    
    export default Footer;