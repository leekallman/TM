import React, { useState } from "react"
import Img from "gatsby-image"
import './posts.css';
import cancel from '../images/cancel.png'

const Post = ({title, name, image, details, html, toggle, setToggle, post}) => {
    
    // const toggler = () => {
    //     setToggle(prev => !prev)
    // } 
    const toggler = (event) => {
        let id = event.target.id;
        console.log(id);
        // setToggle(posts.filter(el => el.id !== post.id));
    } 
    return (
        <div className="post">
            <div className="postDescrip">
                <h2 className="postTitle">{title}</h2>
                <h2 className="name">{name}</h2>
                <button className="readMoreBtn" onClick={toggler}>{toggle ? <h2 className="readMore">Read more</h2> : <h2 className="readMore">Read less</h2>} 
                </button>
            </div>
        
            <Img className="postImg" fluid={image} />
            <div className={toggle ? 'hide' : 'postCopy'} >
                <button aria-label="Close" onClick={toggler} className="closeBtn">
                    <img alt="close-button" src={cancel}/>
                </button>
                <h3>{details}</h3>
                <div className="copy" dangerouslySetInnerHTML= {html}></div>
                <a href="/#footer"><h4>Read the full article in Issue One</h4></a>
            </div>
        </div>
    )
}
export default Post;
            