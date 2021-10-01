import React, { Component } from "react"
import PropTypes from "prop-types"
import Indicator from "../indicator/Indicator"
import "./dock-icon.scss"

class DockIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_executing: false,
      indicator: "dot-indicator-disabled",
      onMouseDownEffect: "icon-img",
      is_being_pressed: false,
      is_launcher: props.is_launcher != null || undefined ? true : false,
      name: this.capitilizeFirstLetter(props.name),
    }
  }

  capitilizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  onClick = () => {
    if (!this.state.is_launcher) {
      this.setState({
        is_executing: true,
        indicator: "dot-indicator",
      })
    }
    console.log(this.state.is_executing)
  }

  onMouseDown = () => {
    this.setState({ onMouseDownEffect: "onMouseDown icon-img" })
  }

  onMouseUp = () => {
    this.setState({ onMouseDownEffect: "icon-img" })
  }

  onMouseLeave = () => {
    this.setState({ onMouseDownEffect: "icon-img" })
  }

  render() {
    const { icon, name } = this.props
    return (
      <li>
        <span className="icon">
          <img
            className={this.state.onMouseDownEffect}
            onMouseLeave={this.onMouseLeave}
            onClick={this.onClick}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            src={icon}
          ></img>
          <Indicator indicator={this.state.indicator}></Indicator>
        </span>
      </li>
    )
  }
}

DockIcon.propTypes = {
  is_launcher: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.string,
}

export default DockIcon
