import React, { useState } from "react"
import Img from "gatsby-image"
import './posts.css';
import cancel from '../images/cancel.png'

const Post = ({ title, name, id, body, subheading }) => {
    const [toggle, setToggle] = useState(true);

    const toggler = () => {
        setToggle(prev => !prev)
    }

    const selectPost = (event) => {
        let id = event.target.id,
            postCopy = document.getElementById('hide' + id);
        toggler.call(postCopy);
    }


    return (
        <div className="post">
            <div className="postDescrip">
                <h2 className="postTitle">{title}</h2>
                {/* <h2 className="name">{name}</h2> */}
                {/* <button className="readMoreBtn" onClick={selectPost}>{toggle ? <h2 id={id} className="readMore">Read more</h2> : <h2 id={id} className="readMore">Read less</h2>}
                </button> */}
            </div>

            {/* <Img className="postImg" fluid={image} fadeIn alt="article image"/> */}
            {/* <div id={'hide' + id} className={toggle ? 'hide' : 'postCopy'} >
                <button aria-label="Close" onClick={selectPost} className="closeBtn">
                    <img alt="close-button" src={cancel} />
                </button>
                <h3>{subheading}</h3>
                <div className="copy" dangerouslySetInnerHTML={body}></div>
                <a href="/#footer"><h4>Read the full article in Issue One</h4></a>
            </div> */}
        </div>
    )
}
export default Post;
