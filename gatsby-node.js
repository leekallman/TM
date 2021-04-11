
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: `pages` })

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

const path = require("path")
const slash = require("slash")

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;
//     return graphql(
//         `
//         {
//             allContentfulVideo {
//                 edges{
//                     node{
//                         slug
//                     }
//                 }
//             }
//         }`
//     ).then(result => {
//         if (result.errors) {
//             console.log("Error with contentful data", result.errors)
//         }
//         const videoTemplate = path.resolve('./src/templates/video.js')
//         result.data.allContentfulVideo.edges.forEach(video => {
//             createPage({
//                 path: `/video/${video.node.slug}/`,
//                 component: slash(videoTemplate),
//                 context: {
//                     slug: video.node.slug
//                 },
//             })
//         })
//     }).catch(error => console.log("Error with contentful data", error))
// }
