import React from "react"
import get from "lodash/get"
import glamorous from "glamorous"
import Layout from "../components/Layout"

import PostTitle from "../components/PostTitle"
import PostDate from "../components/PostDate"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <Layout>
        <SEO title="Home" />
        {posts.map(({ node }) => {
          return (
            <PostWrapper key={node.fields.slug}>
              <PostDate>{node.frontmatter.date}</PostDate>
              <PostTitle to={node.fields.slug}>
                {node.frontmatter.title}
              </PostTitle>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </PostWrapper>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

const PostWrapper = glamorous.div({
  marginBottom: 120,
  ":last-child": {
    marginBottom: 0,
  },
})

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { glob: "**/posts/**" } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
