module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "contentful-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ymbj0emwqrfq",
        accessToken: "q5o4Gij9br7WA0lYn84S9Ro59CNndY2M87p7AN1U9BI",
        environment: "dev",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
