import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import glamorous from "glamorous"

class Header extends React.PureComponent {
  render() {
    const { siteTitle } = this.props

    return (
      <Wrapper>
        <Title>
          <Link to={"/"} style={{ color: "#333333", borderBottom: "none" }}>
            {siteTitle}
          </Link>
        </Title>
        <div>
          <small>
            <em>
              Ein Blog über nichts bestimmtes von niemandem, den du kennst.
            </em>
          </small>
        </div>
      </Wrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

const Wrapper = glamorous.div({
  padding: "40px 0",
  marginBottom: 40,
  textAlign: "center",
})

const Title = glamorous.h1({
  margin: 0,
  fontSize: 36,
  display: "inline",
})

export default Header
