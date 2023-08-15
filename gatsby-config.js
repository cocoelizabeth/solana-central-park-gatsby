/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Solana Central Park`,
    description: 'Luxury Apartments for Rent in Denver, Colorado. Coming 2024',
    // image: '/recess-chrome-v2-optimized.gif',
    siteUrl: `https://solanacentralpark.netlify.app`
  },
  plugins: [
    `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-inline-svg`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults:{
          formats: [`auto`, `webp`],
          placeholder: "blurred"
        }
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }, // Needed for dynamic images
    // {
    //   resolve: `gatsby-omni-font-loader`,
    //   options: {
    //     enableListener: true,
    //     preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
    //     web: [
    //       {
    //         name: `Fira Mono`,
    //         file: `https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap`,
    //       },
    //       {
    //         name: `Marcellus`,
    //         file: `https://fonts.googleapis.com/css2?family=Marcellus:wght@400&display=swap`,
    //       },
    //     ],
    //   },
    // },
  ]
}
