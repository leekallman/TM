import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import welcomeStyles from './welcome.module.css';



const Welcome = () => {
    let opacity;

    const checkpoint = 100;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
        // document.body.classList.add("scroll-block");
      } else {
        opacity = 0;
        // document.body.classList.remove("scroll-block");
      }
      document.getElementById("home").style.opacity = opacity;
    });
    
    return (
        // <div className={welcomeStyles.home} >
            <div className={welcomeStyles.wallpaper} id="home">
            
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={welcomeStyles.about}>A magazine about engagement, movement and reformation.</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
 
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
 
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={welcomeStyles.logo}><span>Tort</span> Magazine</h1>
        </div>
        // </div>
        )
    } 
    
    export default Welcome