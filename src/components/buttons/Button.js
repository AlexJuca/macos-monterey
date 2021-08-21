import React, { Component } from "react"
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
