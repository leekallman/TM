module.exports = {
  siteMetadata: {
    title: `Tort Magazine`,
    description: `Tort Magazine is an independent printed magazine that explores present societal issues through honest and in-depth conversations with individuals directly or indirectly questioning norms and committed to make a change.`,
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
 