import React from "react"
import './main.css'
import Hero from '../components/hero.js'
import Posts from '../components/posts.js'
import Footer from '../components/footer'
  
    const IndexPage = (props) => {

      return (
        <div className="root">
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