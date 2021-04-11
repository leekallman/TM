// import React, { useState } from "react"
// import Img from "gatsby-image"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import './posts.css';
// import cancel from '../images/cancel.png'
// import { graphql } from "gatsby";
// import { query } from "./stories";

// const Bold = ({ children }) => <span className="bold">{children}</span>
// const Text = ({ children }) => <p className="text">{children}</p>
// const Heading2 = ({ children }) => <h2 className="align-center">{children}</h2>

// const Story = ({ node }) => {
//     const [toggle, setToggle] = useState(true);
//     const toggler = () => {
//         setToggle(prev => !prev)
//     }
//     const selectStory = (event) => {
//         let id = event.target.id,
//             storyCopy = document.getElementById('hide' + id);
//         toggler.call(storyCopy);
//     }
//     const options = {
//         renderMark: {
//             [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
//         },
//         renderNode: {
//             [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//             [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
//             [BLOCKS.EMBEDDED_ASSET]: (node) => {
//                 return (
//                     <>
//                         <h2>Embedded Asset</h2>
//                         <pre>
//                             <code>{JSON.stringify(node, null, 2)}</code>
//                         </pre>
//                     </>
//                 )
//             },
//         },
//     }


//     return (
//         <div className="post" >
//             <div className="postDescrip">
//                 <h2 className="postTitle">{node.title}</h2>
//                 <h2 className="name">{node.name}</h2>
//                 <button className="readMoreBtn" onClick={selectStory}>{toggle ? <h2 id={node.index} className="readMore">Read more</h2> : <h2 id={node.index} className="readMore">Read less</h2>}
//                 </button>
//             </div>

//             {/* <Img className="storyImg" fluid={image} fadeIn alt="story image" /> */}
//             <div id={'hide' + node.index} className={toggle ? 'hide' : 'storyCopy'} >
//                 <button aria-label="Close" onClick={selectStory} className="closeBtn">
//                     <img alt="close-button" src={cancel} />
//                 </button>
//                 <h3>{node.title}</h3>
//                 <h3>{node.subheading}</h3>
//                 <h3>{node.photography}</h3>
//                 <h4>{node.date}</h4>
//                 <Text>{renderRichText(node.body, options)}</Text>
//             </div>
//         </div >
//     )
// }
// export default Story;


// // export const pageQuery = graphql`
// // query($slug: String!) {
// //     video: contentfulVideo(slug: {eq: $slug}){
// //         slug
// //         title
// //         body{
// //             raw
// //         }
// //         video{
// //             file{
// //                 url
// //             }
// //         }
// //     }
// // }
// // `

