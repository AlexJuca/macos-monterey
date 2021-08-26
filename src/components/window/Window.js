import React, { Component } from "react"
import PropTypes from "prop-types"
import Draggable from "react-draggable"
import "./window.scss"

class Window extends Component {
  data = null
  constructor(props) {
    super(props)
    this.state = {
      title: props.title == null || undefined ? "App" : props.title,
      maximizable: true,
      children: props.children,
      z_index: "z-index",
      is_window_fixed_size: false,
      is_dark_theme: false,
      should_render: true,
      custom_window_style: null,
    }
  }

  componentDidMount() {
    console.log(this.state.node_id)
  }

  terminate = () => {
    this.setState({ should_render: false })
  }

  useDarkTheme(value) {
    this.setState({
      is_dark_theme: value,
    })
  }

  setWindowFixedSize(value) {
    this.setState({
      is_window_fixed_size: value,
    })
  }

  setCustomStyle(style) {
    this.setState({
      custom_window_style: style,
    })
  }

  applyCustomStyleOrDefaultTheme = () => {
    if (this.state.custom_window_style != null) {
      return this.state.custom_window_style
    } else {
      return this.state.is_dark_theme
        ? "darwin-window-dark-theme"
        : "darwin-window-light-theme"
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  getWindowFixedSizeProp() {
    return this.state.is_window_fixed_size === true ? "wc-button-disabled" : ""
  }

  handleDrag = (ui) => {
    const { x, y } = this.state.deltaPosition
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    })
  }

  onStart = () => {
    this.setState({ z_index: "z-index-focused" })
  }

  onStop = () => {}

  onDrop = () => {
    this.setState({ z_index: "z-index" })
  }

  onDropAreaMouseEnter = () => {}

  onDropAreaMouseLeave = (e) => {
    e.target.classList.remove("hovered")
  }

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const { x, y } = this.state.controlledPosition
    this.setState({ controlledPosition: { x: x - 10, y } })
  }

  adjustYPos = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const { controlledPosition } = this.state
    const { x, y } = controlledPosition
    this.setState({ controlledPosition: { x, y: y - 10 } })
  }

  onControlledDrag = (e, position) => {
    const { x, y } = position
    this.setState({ controlledPosition: { x, y } })
  }

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position)
    this.onStop()
  }

  build(views) {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
    return this.state.should_render === true ? (
      <Draggable
        style={{
          transform: `translate(${this.getRandomInt(0, 500)}px, ${this.getRandomInt(
            0,
            900
          )}px)`,
        }}
        {...dragHandlers}
      >
        <div
          style={{
            transform: `translate(${this.getRandomInt(
              0,
              500
            )}px, ${this.getRandomInt(0, 900)}px)`,
          }}
          className={this.applyCustomStyleOrDefaultTheme()}
        >
          <div className="window-control-wrapper">
            <div className="window-controls">
              <span onClick={this.terminate} className="wc-icon close-button"></span>
              <span className="wc-icon minimize-button"></span>
              <span
                className={
                  this.getWindowFixedSizeProp() + " wc-icon maximize-button"
                }
              ></span>
            </div>
          </div>
          <div className="window-content">{views}</div>
        </div>
      </Draggable>
    ) : (
      ""
    )
  }
}

Window.propTypes = {
  title: PropTypes.string,
  maximizable: PropTypes.bool,
  children: PropTypes.func,
  z_index: PropTypes.string,
  is_window_fixed_size: PropTypes.bool,
  is_dark_theme: PropTypes.bool,
  should_render: PropTypes.bool,
}

export default Window
