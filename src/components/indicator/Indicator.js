import React, { Component } from "react"
import PropTypes from "prop-types"
import "./indicator.scss"

class Indicator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <span className={this.props.indicator}></span>
  }
}

Indicator.propTypes = {
  indicator: PropTypes.string,
}

export default Indicator
