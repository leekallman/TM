import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import tort from "../images/tort.jpeg" 
import './about.css'
import Close from '../components/Close'


import './posts.css';

const About = () => {
    const [toggle, setToggle] = useState (true);
      
    const toggler = () => {
        setToggle(prev => !prev)
    }
    return (
        <section className="aboutSection">
            <div className="about">
            <div className="aboutDescrip">
                <Link className="title" to ="/"><h2><span>Tort</span> Magazine</h2></Link>
        
                <button onClick={toggler} className="aboutButton"><h2 className="readMore">About</h2></button>
            </div>
        
            <img src={tort} className="tort" alt="tort illustration"/>
        
            <div className={toggle ? 'hide' : 'aboutCopy'} >
                <Close close={toggler} />
                <p className="aboutTort">We explore present societal issues through honest and in-depth 
                conversations with individuals directly or indirectly questioning 
                norms and committed to changing the way we live our lives.
                The content of this inaugural issue has been created together with 
                five writers and an editor. An illustrator, a photographer, a graphic designer, 
                a web developer, and an art director have all exercised their 
                command on the graphic and visual displays. During evenings, nights, 
                weekdays, and weekends leading up to this point, we’ve all been working 
                pro bono to bring forth what finally is Tort.
                </p>
                <div className="team">
                <div className="editorial">
                    <h4>Editorial + Design Team</h4>
                    <ul>
                        <li>Lizette Olofsson</li>
                        <li>Lisa Lee Källman</li>
                        <li>Tor Westerlund</li>
                        <li>Marta Casagrande</li>
                        <li>Jacob</li>
                    </ul>
                </div>  
        
                <div className="contributors">
                    <h4>Contributors</h4>
                    <ul>
                        <li>Ashik Zaman</li>
                        <li>Clarice Gourant</li>
                        <li>Maja Winberg</li>
                        <li>Riin Raanu</li>
                        <li>Thulani Gushman</li>
                        
                    </ul>
                </div>  
        
                {/* <div className="contact">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:contact@tortmagazine.com">contact@tortmagazine.com</a></li>
                        <li><a href="instagram.com/tort_magazine">instagram</a></li>
                        <li><a href="facebook.com/tortmagazine">facebook</a></li>
                    </ul>   
                </div> */}
                </div>
            </div>
            </div>
        </section>
        )
    }
    export default About;
    