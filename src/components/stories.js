// import React from "react";
// import { graphql } from 'gatsby';
// import Story from "./story.js";
// import './posts.css';

// // const { GATSBY_CONTENTFUL_SPACE_ID, GATSBY_CONTENTFUL_ACCESS_TOKEN } = process.env

// export const query = graphql`
//     query {
//     articles: allContentfulMagArticle{
//         edges{
//             node{
//                 index
//                 title
//                 name
//                 subHeading
//                 extract {
//                     raw
//                     }
//                 slug
//                 }
//             }
//         }
//    `
// const Stories = ({ data: { stories } }) => {
//     console.log(data)
//     // window.fetch(`https://graphql.contentful.com/content/v1/spaces/${GATSBY_CONTENTFUL_SPACE_ID}?access_token=${GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
//     //     {
//     //         method: "POST",
//     //         headers: {
//     //             'Content-Type': 'application / json',
//     //         },
//     //         body: JSON.stringify({ query }),
//     //     }
//     // )
//     //     .then((response) => response.json())
//     //     .then((json) => console.log(json.data));

//     return (
//         <section className="stories">
//             <ul className="story-list">
//                 {stories.edges.map(({ node }) => (
//                     <Story
//                         key={node.contentful_id}
//                         node={node} />
//                 ))}
//             </ul>
//         </section>
//     )
// }
// export default Stories;

