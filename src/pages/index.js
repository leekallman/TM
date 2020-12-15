import React from "react"
import './main.css'
import Welcome from '../components/welcome.js'
import Hero from '../components/hero.js'
import Posts from '../components/posts.js'
import Footer from '../components/footer'
// import About from '../components/about'

// import IssueOne from '../components/issueOne'
// export const query = graphql`
// query (
//   $slug: String! ) {
//     markdownRemark (
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }    
//       ) {
//         frontmatter {
//           title
//           name
//           details
//         }
//         html
//       }
//     }`
    
    const IndexPage = (props) => {

    
      
      return (
        <div className="root">
            <section className="welcome">
            <Welcome />
            </section>
            <section className="home">      
            <Hero />
          </section>
            <Posts />
            {/* <About /> */}
          <section>
          <Footer />
          </section>
        </div>  
        );
    }
          
export default IndexPage;