import React, { Component } from "react"
import PropTypes from "prop-types"
import "./button.scss"

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, onClick } = this.props
    return (
      <div onClick={onClick} className="darwin-button-large-primary">
        {text}
      </div>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}
