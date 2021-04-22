import React, { useState } from "react"
import Img from "gatsby-image"
import './stories.css';
import cancel from '../images/cancel.png'
import leftArrow from '../images/left-arrow.svg'
import rightArrow from '../images/right-arrow.svg'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"


const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="text">{children}</p>
// const Link = ({ children }) => <a className="link">{children}</a>

const Story = ({ node, gutter }) => {
    const [toggle, setToggle] = useState(true);

    const toggler = () => {
        setToggle(prev => !prev)
    }
    const selectStory = (event) => {
        let id = event.target.id,
            storyCopy = document.getElementById('hide' + id);
        toggler.call(storyCopy);
    }
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri}>{children}</a>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const {
                    fluid:{src},
                    title,
                } = node.data.target
                return (
                    <>
                    <img src={src}
                        alt={title}
                        width="80%"
                    />
                    </>
                )
            },
        },
    }
    return (
        <div className="story" >
            <div className={gutter ? 'noGutter' : 'gutter'}>
                    <div className="leftGutter"></div>
                    <div className="rightGutter"></div>
            </div>
            <div className="storyInner">
                <div className="storyDescrip">
                    <h2 className="storyTitle">{node.title}</h2>
                    <h2 className="name">{node.name}</h2>
                    <button className="readMoreBtn" onClick={selectStory}>{toggle ? <h2 id={node.index} className="readMore">Read more</h2> : <h2 index={node.index} className="readMore">Read less</h2>}
                    </button>
                </div>

                <Img className="storyImg" fluid={node.image.fluid} key={node.image.fluid.src} fadeIn alt={node.image.title} />
                <div id={'hide' + node.index} className={toggle ? 'hide' : 'storyCopy'} >
                    <button aria-label="Close" onClick={selectStory} className="closeBtn">
                        <img alt="close-button" src={cancel} />
                    </button>
                    <h3 className="subHeading">{node.subHeading}</h3>
                    <Text className="copy">{renderRichText(node.body, options)}</Text>
                    <div className="scrollArrow">
                        <img className="leftArrow" alt="left arrow" src={leftArrow} />
                        <p className="screenSize">Scroll</p>
                        <img className="rightArrow" alt="right arrow" src={rightArrow} />
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Story;
