import React, { Component } from "react"
import "./dock.scss"
import DockIcon from "../dock-icon/DockIcon"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { isChrome } from "react-device-detect"

class DockIconWrapper extends Component {
  render() {
    const { children } = this.props
    return <ul className="icon-wrapper">{children}</ul>
  }
}

class Dock extends Component {
  componentDidMount() {
    this.updateDockPosition()
  }

  // TODO: Position correctly on Firefox and Edge Browsers
  updateDockPosition = () => {
    const position = isChrome
      ? -(window.innerHeight / 4) - 50
      : -(window.innerHeight / 4) - 110
    return position
  }

  render() {
    const { docked_applications, undocked_applications_in_execution, max_items } =
      this.props

    const currently_docked_apps = docked_applications.map((row, index) => {
      if (index < max_items) {
        return (
          <DockIcon
            is_launcher={row[1].is_launcher}
            name={row[0]}
            key={index}
            icon={row[1].icon}
          />
        )
      }
    })

    const currently_running_apps = undocked_applications_in_execution.map(
      (row, index) => {
        if (index < max_items && undocked_applications_in_execution.length != 0) {
          return (
            <DockIcon
              is_launcher={row[1].is_launcher}
              name={row[0]}
              key={index}
              icon={row[1].icon}
            />
          )
        }
      }
    )

    const conditionally_add_dock_seperator = () => {
      if (undocked_applications_in_execution.length == 0) {
        return null
      } else {
        return <div className="dock-seperator"></div>
      }
    }

    return (
      <div style={{ bottom: this.updateDockPosition() }} className="dock">
        <DockIconWrapper>
          {currently_docked_apps}
          {conditionally_add_dock_seperator()}
          {currently_running_apps}
        </DockIconWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dock_position: state.dock_position,
    docked_applications: state.dockReducer.docked_applications,
    undocked_applications_in_execution:
      state.dockReducer.undocked_applications_in_execution,
    width: state.dockReducer.width,
    height: state.dockReducer.height,
    max_items: state.dockReducer.max_items,
    visible: state.dockReducer.visible,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    run: (app) => {
      dispatch({
        type: "RUN_APP",
        payload: app,
      })
    },
  }
}

DockIconWrapper.propTypes = {
  children: PropTypes.array,
}

Dock.propTypes = {
  dock_position: PropTypes.number,
  docked_applications: PropTypes.array,
  undocked_applications_in_execution: PropTypes.array,
  max_items: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dock)
