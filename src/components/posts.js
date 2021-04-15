import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Story from "./story.js";
import Post from "./post.js";
import './posts.css';

const Posts = () => {
    const { allContentfulMagArticle, allContentfulPost } = useStaticQuery(
        graphql`
        query {
            allContentfulMagArticle (sort: { fields: [index], order: DESC }){
                edges{
                    node{
                        index
                        title
                        name
                        subHeading
                        extract{
                            raw
                        }
                        slug
                        image{
                            title
                            fluid (maxWidth: 980){
                                ...GatsbyContentfulFluid
                                src
                            }
                        }
                        
                    }
                }
            }
            allContentfulPost(sort: { fields: [date], order: DESC }){
                edges{
                    node{
                        index
                        title
                        name
                        subHeading
                        date
                        image{
                            title
                            fluid (maxWidth: 980){
                                ...GatsbyContentfulFluid
                                src
                            }
                        }
                        body{
                            raw
                            references{
                                contentful_id
                                __typename
                                gatsbyImageData
                                title
                                fluid(maxWidth:600){
                                    src
                                }
                            }
                        }
                        slug
                    }
                }
            }
        }
    `
    )

    return (
        <section className="posts">
            <ul className="post-list">
                {allContentfulPost.edges.map(({ node }) => (
                    <Story
                        key={node.index}
                        node={node}
                    />
                ))}
                {allContentfulMagArticle.edges.map(({ node }) => (
                    <Post
                        key={node.index}
                        node={node}
                    />
                ))}
            </ul>
        </section>
    )
}
export default Posts
