import React, { Component } from "react"
import PropTypes from "prop-types"
import Draggable from "react-draggable"
import "./window.scss"

class Window extends Component {
  data = null
  constructor(props) {
    super(props)
    this.state = {
      item: React.createRef(),
      title: props.title == null || undefined ? "App" : props.title,
      maximizable: true,
      children: props.children,
      z_index: "z-index",
      is_window_fixed_size: false,
      is_dark_theme: false,
      should_render: true,
      is_maximized: false,
      custom_window_style: null,
      width: 768,
      height: 512,
      previous_width: 0,
      previous_height: 0,
    }
  }

  getCurrentWindowHeightAndWidth = () => {
    const width = this.item.current.offsetWidth
    const height = this.item.current.offsetHeight
    this.setState({
      previous_width: width,
      previous_height: height,
    })
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

  restoreOrMaximize = () => {
    if (this.state.is_maximized == false) {
      this.setState(
        {
          previous_width: 768,
          previous_height: 512,
          width: window.innerWidth / 2 + 300,
          height: window.innerHeight / 2 + 300,
          is_maximized: true,
        },
        () => console.log(this.state.previous_height)
      )
      this.forceUpdate()
    } else {
      this.setState({
        width: this.state.previous_width,
        height: this.state.previous_height,
        is_maximized: false,
      })
      this.forceUpdate()
    }
  }

  maximize = () => {
    if (this.state.is_window_fixed_size == false) {
      this.restoreOrMaximize()
    }
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
      <Draggable {...dragHandlers}>
        <div
          ref={this.state.item}
          style={{
            transform: `translate(${this.getRandomInt(
              0,
              500
            )}px, ${this.getRandomInt(0, 900)}px)`,
            width: this.state.width + "px",
            height: this.state.height + "px",
          }}
          className={this.applyCustomStyleOrDefaultTheme()}
        >
          <div className="window-control-wrapper">
            <div className="window-controls">
              <span onClick={this.terminate} className="wc-icon close-button"></span>
              <span className="wc-icon minimize-button"></span>
              <span
                onClick={this.maximize}
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
