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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lknoe36ir5hh`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
  ],
}
