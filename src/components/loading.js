import React, {useState, useEffect} from "react";
import loadingStyles from './loading.module.css';


const Loading = () => {
  // const [showing, setShowing] = useState(true);

  // const fadeStyles = useSpring({
  //   config: { ...config.stiff },
  //   from: { opacity: 1 },
  //   to: {
  //     opacity: showing ? 0 : 1
  //   }
  // });

  // useEffect(() => {
  //   setTimeout(() => setShowing(false), 3000)
  // }, []);


    // let opacity;

    // const checkpoint = 50;
    // window.addEventListener("scroll", () => {
    //   const currentScroll = window.pageYOffset;
    //   if (currentScroll <= checkpoint) {
    //     opacity = 1 - currentScroll / checkpoint;
    //     // document.body.classList.add("scroll-block");
    //   } else {
    //     opacity = 0;
    //     // document.body.classList.remove("scroll-block");
    //   }
    //   document.getElementById("home").style.opacity = opacity;
    // });
    
    return (
        <div className={loadingStyles.home}>
          <h1 className={loadingStyles.mainLogo}><span>Tort</span> Magazine</h1>

          <div className={loadingStyles.wallpaper} id="home">
            
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={loadingStyles.about}>A magazine about engagement, movement and reformation.</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
 
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
 
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>

            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
            <h1 className={loadingStyles.logo}><span>Tort</span> Magazine</h1>
        </div>
        </div>
        )
    } 
    
    export default Loading