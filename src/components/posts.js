import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Post from "./post.js";
import './posts.css';

const Posts = () => {
    const { allContentfulMagArticle } = useStaticQuery(
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
        }
        `
    )

    return (
        <section className="posts">
            <ul className="post-list">
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
