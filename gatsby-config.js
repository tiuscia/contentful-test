module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "contentful-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "az01v73g2qzq",
        accessToken: "yagd-st0lw7ZF48iFrIQhHKyc_9t2zy7WyDgDqp_v4U",
        environment: "dev-id",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
