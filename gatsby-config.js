module.exports = {
  siteMetadata: {
    title: `Tort Magazine`,
    description: `Independent magazine about societal change`,
    author: `Lisa Lee`,
    keywords: `magazine, swedish, stockholm, sex, sex work, art, race, opression`,
    url: `https://www.tortmagazine.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
 