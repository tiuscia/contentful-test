import * as React from "react"
import { graphql } from 'gatsby'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}


// data
const links = [
  {
    text: "Contentful > environment-aliases",
    url: "https://www.contentful.com/developers/docs/concepts/environment-aliases/",
    description:
      "An environment alias allows you to access and modify the data of an environment, called the target environment, through a different static identifier.",
    color: "#E95800",
  },
  {
    text: "Contentful > Managing multiple environments",
    url: "https://www.contentful.com/developers/docs/concepts/multiple-environments/",
    description:
      "Space environments are entities within a space that allow you to create and maintain multiple versions of the space-specific data, and make changes to them in isolation.",
    color: "#1099A8",
  },
]

// markup
const IndexPage = ({
  data: {
    allContentfulBlogPost: { edges: pages },
  },
}) => {

  const allPages = pages;

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations 
        <br />
        <span style={headingAccentStyles}>— we're testing contenteful! MAIN BRANCH</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      

      <p>All pages:</p> 
      <ul >
        {allPages.map(page => (
          <li key={page.node.slug} >
            <span>
              <a
                href={`${page.node.slug}`}
              >
                {page.node.title}
              </a>
            </span>
          </li>
        ))}
      </ul>

    </main>
  )
}

export const pageQuery = graphql`
  query LandingPageIndexQuery {
    allContentfulBlogPost {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

export default IndexPage
