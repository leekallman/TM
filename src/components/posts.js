import React from "react";
import { graphql } from 'gatsby';
import Post from "./post.js";
import './posts.css';

// const query = graphql`
//     query {
//     allContentfulMagArticle{
//         edges{
//             node{
//                 index
//                 title
//                 name
//                 subHeading
//                 extract {
//                     raw
//                     }
//                 }
//             }
//         }
//     }
// `
const Posts = ({ data }) => {
    return (
        <section className="posts">
            {/* <ul className="post-list">
                {data.allContentfulMagArticle.edges.map(({ node }) => (
                    <Post
                        key={node.index}
                        id={node.index}
                        title={node.title}
                        name={node.name}
                        // image={node.frontmatter.featuredImage.childImageSharp.fluid}
                        subheading={node.subheading}
                        body={node.extract.raw}
                    />
                ))}
            </ul> */}
        </section>
    )
}
export default Posts


// useEffect(() => {
    //     window.fetch(`https://graphql.contentful.com/content/v1/spaces/${GATSBY_CONTENTFUL_SPACE_ID}?access_token=${GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
    //         {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application / json',
    //             },
    //             body: JSON.stringify({ query }),
    //         }
    //     )
    //         .then((response) => response.json())
    //         .then((json) => console.log(json.data));

    //     // rerender the entire component with new data
    //     // setPage(data.allContentfulMagArticle.edges.node[0]);
    // });