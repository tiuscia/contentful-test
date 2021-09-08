require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

/* issue 2 tokens */
const CONTENTFUL_SPACE_ID="ymbj0emwqrfq"
const CONTENTFUL_ACCESS_TOKEN="tWobUmPnO9iJ8jkY616i3Qy0pxUVyZhOF3SmHipe90o"
const CONTENTFUL_HOST="cdn.contentful.com"

module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "contentful-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        host: CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],

};
