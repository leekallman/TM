// const dotenv = require('dotenv')

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config()
// }
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: `Tort Magazine`,
    description: `Independent printed magazine that explores present societal issues through honest and in-depth conversations with individuals directly or indirectly questioning norms and are committed to make a change. Editorial team: Liz Olofsson, Lisa Lee, Marta Casagrande, Tor Westerlund.`,
    author: `Lisa Lee`,
    url: `https://www.tortmagazine.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
  ],
}
