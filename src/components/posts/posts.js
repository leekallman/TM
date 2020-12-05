import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
// import Button from './button.js';
import './posts.css';

const Posts = () => {
    const [toggle, setToggle] = useState (true);
      
    const toggler = () => {
        setToggle(prev => !prev)
    } 
    
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            name
                            details
                            featuredImage {
                                childImageSharp {
                                    fluid(maxWidth: 800) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        html
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    return (
        <section className="posts">
        {data.allMarkdownRemark.edges.map((edge) => {
            return (
                <div className="post">
                    <div className="postDescrip">
                        <h2 className="postTitle">{edge.node.frontmatter.title}</h2>
                        <h2 className="name">{edge.node.frontmatter.name}</h2>

                        <button onClick={toggler}><h2 className="readMore">Read more</h2></button>
                    </div>
                
                    <Img className="postImg" fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} /> 

                    <div className={toggle ? 'hide' : 'postCopy'} >
                        <h3>{edge.node.frontmatter.details}</h3>
                        <div className="copy" dangerouslySetInnerHTML= {{__html: edge.node.html}}></div>
                    </div>
                
                </div>
            )}
        )}
        </section>
    )
}
export default Posts;
            