import React from "react";
import { graphql } from 'gatsby';
import Story from "./story.js";
import './posts.css';

// const { GATSBY_CONTENTFUL_SPACE_ID, GATSBY_CONTENTFUL_ACCESS_TOKEN } = process.env

export const query = graphql`
    query {
        stories: allContentfulStory{
            edges{
                node{
                    contentful_id
                    title
                    name
                    subheading
                    date
                    photography
                    body{
                        raw
                    }
                }
            }
        }
    }
`
const Stories = ({ data: { stories } }) => {

    // window.fetch(`https://graphql.contentful.com/content/v1/spaces/${GATSBY_CONTENTFUL_SPACE_ID}?access_token=${GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
    //     {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application / json',
    //         },
    //         body: JSON.stringify({ query }),
    //     }
    // )
    //     .then((response) => response.json())
    //     .then((json) => console.log(json.data));

    return (
        <section className="stories">
            <ul className="story-list">
                {stories.edges.map(({ node }) => (
                    <Story
                        key={node.contentful_id}
                        node={node} />
                ))}
            </ul>
        </section>
    )
}
export default Stories;

