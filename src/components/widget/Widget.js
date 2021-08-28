import React, { Component } from "react"
import PropTypes from "prop-types"
import "./widget.scss"

class BaseWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      children: props.children,
      width: 198,
      height: 198,
    }
  }

  build(views) {
    return (
      <div
        style={{
          width: this.state.width,
          height: this.state.height,
          transform: "translate(900px, -100px)",
        }}
        className="darwin-widget-light-theme"
      >
        {views}
      </div>
    )
  }
}

BaseWidget.propTypes = {
  children: PropTypes.func,
}

export default BaseWidget
