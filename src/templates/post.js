import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
query (
    $slug: String! ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }    
    ) {
      frontmatter {
        title
        name
        details
      }
      html
    }
  }`

const Post = (props) => {
    return (
      <React.fragment>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.details}</p>
            <div dangerouslySetInnerHTML= {{__html: props.data.markdownRemark.html}}></div>
      </React.fragment>
    )
}

export default Post