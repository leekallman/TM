import React from 'react';
import * as footerStyles from './footer.module.css';
import IssueOne from '../components/IssueOne';


const Footer = () => {
    return (
        <footer className={footerStyles.footer} id="footer">
            <a href="/" className={footerStyles.logo}><h1><span>Tort</span> Magazine
            </h1></a>
            <div className={footerStyles.spinner}>
                <IssueOne />
            </div>
            <div className={footerStyles.about}>
                <p>ISSUE ONE<br />
                Unwritten rules exist everywhere, in every culture and religion. In the world of art and on the dance scene, in sexual relations as well as in marriages. Even among species, we have notions of the correct behavior. Rarely we do remember the creator of these norms – more often we know who broke them. Tort explores present societal conceptions through honest conversations with individuals committed to make a change.
                </p><br />
                <p>
                    Editorial team: Liz Olofsson, Lisa Lee, Marta Casagrande, Tor Westerlund<br /><br />
                Contributors: Ashik Zaman, Riin Rannu, Maja Winberg, Thulani Gushman, Clarice Goulart, William Harvey Howe, Emilia Stålhammar
                </p>
            </div>

            <div className={footerStyles.column1}>
                <p>
                    112 pp, 16 × 22 cm, softcover: 300g Lynx Rough, 2021.<br />
                    Binding: Sewed glue binding<br />
                    ISBN 2003-8003<br />
                    100SEK
                    <br /><br />
                    Stockists: <a href="https://papercutshop.se/">Papercut</a>, Krukmakargatan 24 Stockholm
                    <br />
                    Konst-ig, Skånegatan 71 Stockholm
                </p>
            </div>

            <div className={footerStyles.column2}>
                <div className={footerStyles.buy}>
                    <a href="https://shop.tortmagazine.com">
                        <h2>Buy now</h2>
                    </a>
                </div>
                <ul>
                    <li><a href="mailto:contact@tortmagazine.com">contact@tortmagazine.com</a></li>
                    <li><a href="https://instagram.com/tort_magazine" target="_blank" rel="noreferrer">instagram</a></li>
                    <li><a href="https://facebook.com/tortmagazine" target="_blank" rel="noreferrer">facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer;
