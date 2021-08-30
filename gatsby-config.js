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
        accessToken: "gmiJbJIWK3wD1tIulVXE8VYdj6pG51-cIB4QpaZoKMQ",
        environment: "dev-id",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
