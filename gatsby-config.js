require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "contentful-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        // accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        // environment: process.env.ENVIRONMENT,
        // host: 'preview.contentful.com',
        accessToken: process.GATSBY_IS_PREVIEW ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.ENVIRONMENT,
        host: process.GATSBY_IS_PREVIEW ? 'preview.contentful.com' : 'cdn.contentful.com',
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
