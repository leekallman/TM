module.exports = {
  siteMetadata: {
    title: `Tort Magazine`,
    description: `independent magazine about societal change`,
    author: `Lisa Lee`,
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
  ],
}
 