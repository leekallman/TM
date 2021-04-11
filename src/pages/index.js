import React, { useState, useEffect } from "react";
import './main.css';
import Hero from '../components/hero.js';
import Posts from '../components/posts.js';
// import Stories from '../components/stories.js';
import Footer from '../components/footer';
import Favicon from '../images/favicon.ico';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../components/use-siteMetadata'

const IndexPage = () => {

  const { title, description, author, url } = useSiteMetadata();
  const [toggle2, setToggle2] = useState(true);

  const toggler2 = () => {
    setToggle2(prev => !prev)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div className="root">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/148856643_437326214370011_2170845881351565213_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=yglJzYN9czwAX-U9Zb6&_nc_ht=scontent-arn2-1.xx&oh=c7fa16107486f97810a9c010d0325f2e&oe=60477BDD" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href={Favicon}></link>
      </Helmet>
      <section className="home">
        <Hero />
      </section>
      {/* 
          <button className="contentBtn" onClick={toggler2} onMouseEnter={toggler3} onMouseLeave={toggler3} >{toggle3 ? <h2 className="magazine">Magazine</h2> : <h2 className="stories">Stories</h2>}</button>
          {toggle2 ? <Posts /> : <Stories/>} */}


      <Posts />
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default IndexPage;