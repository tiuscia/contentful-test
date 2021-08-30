module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "contentful-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Ndl8vpBv5_xwF_F91z2OQO5yEoXndPx7JXwdIAU5tCU",
        spaceId: "ymbj0emwqrfq",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
