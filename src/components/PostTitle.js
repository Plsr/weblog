import React from "react"
import PropTypes from "prop-types"
import glamorous from "glamorous"
import Link from "gatsby-link"
import { rhythm } from "../utils/typography"

class PostTitle extends React.PureComponent {
  render() {
    const { to, children } = this.props
    if (to) {
      return (
        <Headline>
          <Link to={to}>{children}</Link>
        </Headline>
      )
    }
    return <Headline>{children}</Headline>
  }
}

PostTitle.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string.isRequired,
}

PostTitle.defaultProps = {
  to: undefined,
}

const Headline = glamorous.h3({
  marginBottom: "40px",
})

export default PostTitle
