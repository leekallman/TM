import React, { useState } from "react"
import Img from "gatsby-image"
import './posts.css';
import cancel from '../images/cancel.png'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="text">{children}</p>
const Heading2 = ({ children }) => <h2 className="align-center">{children}</h2>

const Post = ({ node }) => {
    const [toggle, setToggle] = useState(true);

    const toggler = () => {
        setToggle(prev => !prev)
    }

    const selectPost = (event) => {
        let id = event.target.id,
            postCopy = document.getElementById('hide' + id);
        toggler.call(postCopy);
    }
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => {

                return (
                    <>
                        <h2>Embedded Asset</h2>
                        <pre>
                            <code>{JSON.stringify(node, null, 2)}</code>
                        </pre>
                    </>
                )
            },
        },
    }
    return (
        <div className="post" >
            <div className="postDescrip">
                <h2 className="postTitle">{node.title}</h2>
                <h2 className="name">{node.name}</h2>
                <button className="readMoreBtn" onClick={selectPost}>{toggle ? <h2 id={node.index} className="readMore">Read more</h2> : <h2 index={node.id} className="readMore">Read less</h2>}
                </button>
            </div>

            <Img className="postImg" fluid={node.image.fluid} key={node.image.fluid.src} fadeIn alt={node.image.title} />
            <div id={'hide' + node.index} className={toggle ? 'hide' : 'postCopy'} >
                <button aria-label="Close" onClick={selectPost} className="closeBtn">
                    <img alt="close-button" src={cancel} />
                </button>
                <h3>{node.subHeading}</h3>
                <Text className="copy">{renderRichText(node.extract, options)}</Text>
                <a href="/#footer"><h4>Read the full article in Issue One</h4></a>
            </div>
        </div >
    )
}
export default Post;
