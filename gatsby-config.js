module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "contentful-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Iw4TWDMpO9EBEDWTG5zGYqJn-JaL7vj7okXIXIMdeKE",
        spaceId: "az01v73g2qzq",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
