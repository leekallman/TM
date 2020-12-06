import React from "react"
import './main.css';
import Hero from '../components/hero.js';
import Posts from '../components/posts.js';
import Footer from '../components/footer'
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
          <section>
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