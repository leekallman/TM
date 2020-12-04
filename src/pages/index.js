import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header.js';
import Hero from '../components/hero.js';
import Post from '../components/post.js';
import './main.css';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            name
            details
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <React.Fragment>

    <div className="root">
      <Header />

      <Hero />
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {

          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.name}</p>
              <Link to={`/post/${edge.node.fields.slug}`}>Read more</Link>
            </li>
          )
        })}
      </ol>
      

    </div>
  
  
    </React.Fragment>
  );
}

export default IndexPage;