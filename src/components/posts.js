import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import './posts.css';
import Close from '../components/Close';


const Posts = () => {
    const [toggle, setToggle] = useState (true);
      
    const toggler = () => {
        setToggle(prev => !prev)
    } 
    
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: DESC, fields: [frontmatter___date] }
                ){
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

                        <button className="readMoreBtn" onClick={toggler}>{toggle ? <h2 className="readMore">Read more</h2> : <h2 className="readMore">Read less</h2>} 
                        </button>
                    </div>
                
                    <Img className="postImg" fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} /> 

                    <div className={toggle ? 'hide' : 'postCopy'} >
                        <Close close={toggler} />
                        <h3>{edge.node.frontmatter.details}</h3>
                        <div className="copy" dangerouslySetInnerHTML= {{__html: edge.node.html}}></div>
                        <h4>Read the full article in Issue One</h4>
                    </div>
                </div>
            )}
        )}
        </section>
    )
}
export default Posts;
            