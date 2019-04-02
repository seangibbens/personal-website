module.exports = {
  pathPrefix: '/personal',
  siteMetadata: {
    title: `Sean Gibbens Development`,
    description:
      'My name is Sean Gibbens. I am a developer based in Indianapolis, Indiana.',
    siteUrl: `https://seangibbens.github.io`,
    author: `Sean Gibbens`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean Gibbens Development`,
        short_name: `Sean Gibbens Dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/computer-icon.png`, // This path is relative to the root of the site.
        include_favicon: true
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline'
  ]
}
