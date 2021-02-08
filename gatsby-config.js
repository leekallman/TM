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
    // {
    // resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       'gatsby-remark-relative-images',
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 750,
    //           linkImagesToOriginal: false
    //         }
    //       }
    //     ]
    //   }
    // }
  ],
}
 