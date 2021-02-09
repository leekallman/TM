import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Post from "./post.js";
import './posts.css';


const Posts = () => {     
    
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: DESC, fields: [frontmatter___date] }
                ){
                edges {
                    node {
                        frontmatter {
                            id
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
            <ul className="post-list">
            {data.allMarkdownRemark.edges.map((edge) => (
                    <Post 
                    id={edge.node.frontmatter.id} 
                    data={data} 
                    title={edge.node.frontmatter.title}
                    name={edge.node.frontmatter.name}
                    image={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                    details={edge.node.frontmatter.details}
                    html={{__html: edge.node.html}}
                    />
                ))}
            </ul>
        </section>
    )
}
export default Posts;
            