const path = require ('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField ({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions 
    const postTemplate = path.resolve('./src/templates/post.js')
    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `).then(res =>{
        if (res.rrors){
            return Promise.reject(res.errors)
        }
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: postTemplate,
            path: `/post/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
})
}