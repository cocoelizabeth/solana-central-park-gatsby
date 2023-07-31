/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`, // Needed for dynamic images
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Fira Mono`,
            file: `https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap`,
          },
          {
            name: `Marcellus`,
            file: `https://fonts.googleapis.com/css2?family=Marcellus:wght@400&display=swap`,
          },
        ],
      },
    },
  ]
}
