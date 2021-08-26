module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "contentful-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "S_4vjxAbUnjVMAMM1Q4-tiCAmNSonac44fXWuNryUF8",
        spaceId: "az01v73g2qzq",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
