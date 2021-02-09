import React, {useEffect} from "react";
import './main.css';
import Hero from '../components/hero.js';
import Posts from '../components/posts.js';
import Footer from '../components/footer';
import {Helmet} from 'react-helmet';
import useSiteMetadata from '../components/use-siteMetadata'

    const IndexPage = (props) => {

      const {title, description, keywords, author, url} = useSiteMetadata();

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      return (
        
        <div className="root">
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name= "keywords" content={keywords} />
            <meta name= "author" content={author} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="" />
            <meta property="og:locale" content="" />
            <meta property="og:url" content={url} />
            <link rel="canonical" href={url}/>
          </Helmet>
          <section className="home"> 
            <Hero />
          </section>

          <Posts />
          <section>
            <Footer />
          </section>
        </div>  
        );
    }
          
export default IndexPage;